import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the photo path where images will be saved
const photoPath = path.join(__dirname, "../../public/photos");

// Ensure the photos directory exists, create it if it doesn't
if (!fs.existsSync(photoPath)) {
    fs.mkdirSync(photoPath, { recursive: true });
}

export const createClient = async (req, res) => {
    const db = req.app.get("db");

    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.files);

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
        const fullPath = path.join(photoPath, photoFileName);

        console.log("Saving photo to:", fullPath);

        try {
            // Write the file to the specified directory
            fs.writeFileSync(fullPath, photo.data);
            photoUrl = `http://localhost:5539/photos/${photoFileName}`;  // Construct the photo URL
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
            role_id: 2,  // Assuming role_id 2 is for 'client'
            profile_picture: photoUrl || null,  // Save the photo URL in the profile_picture field
            password_hash: await bcrypt.hash('default_password', 10),  // Hash a default password
        });

        if (photoUrl) {
            // Optionally, store the image in an image table for further tracking
            await db.image.create({
                src: photoUrl,
                user_id: newClient.user_id,
                imageType: 'profile',
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
    const { clientId, clientName, clientEmail, clientPhone } = req.body;

    try {
        const client = await db.user.findByPk(clientId);
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

        // Handle updated photos
        let photos = [];
        if (req.files) {
            let reqPhotos = req.files.photos;

            if (!(reqPhotos instanceof Array)) {
                reqPhotos = [reqPhotos];
            }

            reqPhotos.forEach((file, index) => {
                fs.writeFile(photoPath + "/" + file.name, file.data, () => {});

                photos.push({
                    src: `http://localhost:5539/photos/${file.name}`,
                    clientImage: {
                        imageType: index === 0 ? 'profile' : 'banner',  // First image is profile, second is banner
                    },
                });
            });

            // If new photos are uploaded, replace the old ones
            if (photos.length > 0) {
                // Assuming there is a method to remove old photos and replace them
                await db.image.destroy({ where: { user_id: clientId } });
                await db.image.bulkCreate(
                    photos.map((photo) => ({
                        src: photo.src,
                        user_id: clientId,
                        imageType: photo.clientImage.imageType,
                    }))
                );
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

export const removeClient = async (req, res) => {
    const db = req.app.get("db");
    const { clientId } = req.body;

    try {
        const client = await db.user.findByPk(clientId);
        if (!client) {
            return res.status(404).send({
                message: "Client not found",
                success: false,
            });
        }

        // Remove associated images
        await db.image.destroy({ where: { user_id: clientId } });

        // Remove the client
        await client.destroy();

        res.send({
            message: "Client removed successfully",
            success: true,
        });
    } catch (error) {
        res.status(500).send({
            message: "Failed to remove client",
            success: false,
            error: error.message,
        });
    }
};