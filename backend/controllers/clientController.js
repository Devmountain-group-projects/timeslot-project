import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import { fileURLToPath } from "url";
import { ImageUser } from "../models/imageUser.js";

// Get the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the photo path where images will be saved
const photoDir = "photos";
const publicDir = path.join(__dirname, "../../public");

// Ensure the photos directory exists, create it if it doesn't
if (!fs.existsSync(`${publicDir}/${photoDir}`)) {
    fs.mkdirSync(`${publicDir}/${photoDir}`, { recursive: true });
}

export const getClients = async (req, res) => {
    const db = req.app.get("db");

    try {
        const clients = await db.user.findAll({
            where: {
                role_id: 1,
            },
        });
        res.status(200).send({
            success: true,
            clients,
        });
    } catch (error) {
        console.error("Error fetching clients:", error);
        res.status(500).send({
            success: false,
            message: "Failed to fetch clients",
        });
    }
};

export const createClient = async (req, res) => {
    const db = req.app.get("db");

    // console.log("Request Body:", req.body);
    // console.log("Uploaded Files:", req.files);

    const { clientName, clientEmail, clientPhone } = req.body;

    if (!clientName || !clientEmail || !clientPhone) {
        return res.status(400).send({
            message: "Client name, email, and phone are required.",
            success: false,
        });
    }

    let photoUrl = null;

    // Handle the photo if it's uploaded
    if (req.files && req.files.photo) {
        const photo = req.files.photo;
        const photoFileName = `${Date.now()}_${photo.name}`;
        const fullPath = path.join(`${publicDir}/${photoDir}`, photoFileName);

        console.log("Saving photo to:", fullPath);

        try {
            // Write the file to the specified directory
            fs.writeFileSync(fullPath, photo.data);
            photoUrl = `${photoDir}/${photoFileName}`; // Construct the photo URL
            console.log("Photo saved at:", photoUrl);
        } catch (err) {
            console.error("Error saving client photo:", err);
            return res.status(500).send({
                message: "Error saving client photo",
                success: false,
                error: err.message,
            });
        }
    }

    try {
        // Create the client
        const newClient = await db.user.create({
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            role_id: 1, // Role ID is 1 for client based on seed
            profile_picture: photoUrl || null, // Save the photo URL in the profile_picture field
            password_hash: await bcrypt.hash("default_password", 10), // Hash a default password
        });

        if (photoUrl) {
            // Store the image in the `image` table
            const newImage = await db.image.create({
                src: photoUrl, // Save the photo URL
            });

            // Associate the image with the user in the `image_user` table
            await db.image_user.create({
                user_id: newClient.user_id, // Link the image to the user
                image_id: newImage.image_id, // Link the image from the image table
                image_type: "user_profile", // Define the image type
            });
        }

        res.status(201).send({
            message: "Client created successfully",
            success: true,
            client: newClient,
        });
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).send({
            message: "Failed to create client",
            success: false,
            error: error.message,
        });
    }
};

export const updateClient = async (req, res) => {
    const db = req.app.get("db");
    const clientId = req.params.clientId;
    const { clientName, clientEmail, clientPhone } = req.body;

    try {
        const client = await db.user.findByPk(clientId, {
            include: [{ model: db.image, through: db.image.user, as: "images" }],
        });
        if (!client) {
            return res.status(404).send({
                message: "Client not found",
                success: false,
            });
        }

        // Update basic client information
        client.name = clientName || client.name;
        client.email = clientEmail || client.email;
        client.phone = clientPhone || client.phone;

        if (req.files && req.files.photo) {
            let photoUrl = null;

            // Remove old image(s) since there is a new photo being updated
            const userImages = client.images;

            if (userImages.length > 0) {
                await client.setImages([]);
                userImages.map(function (image) {
                    fs.unlink(`${publicDir}/${image.src}`, (err) => {
                        if (!err) {
                            image.destroy();
                        }
                    });
                });
            }

            const photo = req.files.photo;
            const photoFileName = `${Date.now()}_${photo.name}`;
            const fullPath = path.join(`${publicDir}/${photoDir}`, photoFileName);

            try {
                // Write the file to the specified directory
                fs.writeFileSync(fullPath, photo.data);
                photoUrl = `${photoDir}/${photoFileName}`; // Construct the photo URL

                // Store the image in the `image` table
                const newImage = await db.image.create({
                    src: photoUrl, // Save the photo URL
                });

                // Associate the image with the user in the `image_user` table
                await db.image_user.create({
                    user_id: client.user_id, // Link the image to the user
                    image_id: newImage.image_id, // Link the image from the image table
                    image_type: "user_profile", // Define the image type
                });

                client.profile_picture = photoUrl || client.profile_picture;
            } catch (err) {
                return res.status(500).send({
                    message: "Error saving client photo",
                    success: false,
                    error: err.message,
                });
            }
        }

        await client.save();

        res.send({
            message: "Client updated successfully",
            success: true,
            client,
        });
    } catch (error) {
        res.status(500).send({
            message: "Failed to update client",
            success: false,
            error: error.message,
        });
    }
};

// Function to delete client
// Function to remove client
export const removeClient = async (req, res) => {
    const db = req.app.get("db");
    const clientId = req.params.clientId;

    if (!clientId) {
        return res.status(400).send({ message: "Client ID is required" });
    }

    // Fetch the client and its associated images
    const client = await db.user.findOne({
        include: [
            { model: db.image, through: db.image.user }, // Assuming you have a client-image relationship
        ],
        where: {
            user_id: clientId, // Assuming 'user_id' is the foreign key for clients
        },
    });

    if (!client) {
        res.status(404).send({
            message: "Client not found",
            success: false,
        });
        return;
    }

    const userImages = client.images;
    await client.setImages([]);
    userImages.map(function (image) {
        fs.unlink(`${publicDir}/${image.src}`, (err) => {
            if (!err) {
                image.destroy();
            }
        });
    });

    // Destroy the client (this will cascade and delete associated records if configured)
    await client.destroy();

    res.status(200).send({
        message: "Client removed successfully",
        success: true,
    });
};
