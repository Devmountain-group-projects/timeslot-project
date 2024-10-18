import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Photo path
const photoPath = path.join(__dirname, "../../../public/photos");
if (!fs.existsSync(photoPath)) {
    fs.mkdirSync(photoPath, { recursive: true });
}


export const createClient = async (req, res) => {
    const db = req.app.get("db");

    // Log the request body and files to check the received fields
    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.files);

    const { clientName, clientEmail, clientPhone } = req.body;

    // Validate the required fields
    if (!clientName || !clientEmail || !clientPhone) {
        console.error('Missing required client information:', { clientName, clientEmail, clientPhone });
        return res.status(400).send({
            message: "Client name, email, and phone are required.",
            success: false,
        });
    }

    console.log("Processing client creation...");

    let photoUrl = null;

    if (req.files && req.files.photo) {
        const photo = req.files.photo;
        const photoFileName = `${Date.now()}_${photo.name}`;
        const fullPath = path.join(photoPath, photoFileName);

        try {
            fs.writeFileSync(fullPath, photo.data);
            photoUrl = `http://localhost:5539/photos/${photoFileName}`;
            console.log("Photo URL:", photoUrl);
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
        const newClient = await db.user.create({
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            role_id: 2,
            password_hash: await bcrypt.hash('default_password', 10),
        });

        if (photoUrl) {
            await db.image.create({
                src: photoUrl,
                user_id: newClient.user_id,
                imageType: 'profile',
            });
        }

        console.log("Client created successfully:", newClient);
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

// Add an appointment
export const addAppointment = async (req, res) => {
    const db = req.app.get("db");
    const { userId, serviceId, appointmentDate, startTime, endTime, notes } = req.body;

    try {
        const newAppointment = await db.appointment.create({
            user_id: userId,
            service_id: serviceId,
            appointment_date: appointmentDate,
            appointment_start: startTime,
            appointment_end: endTime,
            notes: notes || "No additional notes",
            status: "pending"
        });

        res.status(201).send({
            message: "Appointment added successfully",
            success: true,
            appointment: newAppointment
        });
    } catch (error) {
        console.error("Error adding appointment:", error);
        res.status(500).send({
            message: "Failed to add appointment",
            success: false,
            error: error.message
        });
    }
};

// Remove an appointment
export const removeAppointment = async (req, res) => {
    const db = req.app.get("db");
    const { appointmentId } = req.body;

    try {
        const appointment = await db.appointment.findByPk(appointmentId);
        if (!appointment) {
            return res.status(404).send({
                message: "Appointment not found",
                success: false
            });
        }

        await appointment.destroy();
        res.send({
            message: "Appointment removed successfully",
            success: true
        });
    } catch (error) {
        console.error("Error removing appointment:", error);
        res.status(500).send({
            message: "Failed to remove appointment",
            success: false,
            error: error.message
        });
    }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
    const db = req.app.get("db");
    const { appointmentId, appointmentDate, startTime, endTime, notes, status } = req.body;

    try {
        const appointment = await db.appointment.findByPk(appointmentId);
        if (!appointment) {
            return res.status(404).send({
                message: "Appointment not found",
                success: false
            });
        }

        appointment.appointment_date = appointmentDate || appointment.appointment_date;
        appointment.appointment_start = startTime || appointment.appointment_start;
        appointment.appointment_end = endTime || appointment.appointment_end;
        appointment.notes = notes || appointment.notes;
        appointment.status = status || appointment.status;

        await appointment.save();

        res.send({
            message: "Appointment updated successfully",
            success: true,
            appointment
        });
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).send({
            message: "Failed to update appointment",
            success: false,
            error: error.message
        });
    }
};

// Get appointment by ID
export const getAppointment = async (req, res) => {
    const db = req.app.get("db");
    const { appointmentId } = req.query;

    try {
        const appointment = await db.appointment.findByPk(appointmentId, {
            include: [
                { model: db.user, as: "user" },
                { model: db.service, as: "service" }
            ]
        });

        if (!appointment) {
            return res.status(404).send({
                message: "Appointment not found",
                success: false
            });
        }

        res.send({
            message: "Appointment retrieved successfully",
            success: true,
            appointment
        });
    } catch (error) {
        console.error("Error retrieving appointment:", error);
        res.status(500).send({
            message: "Failed to retrieve appointment",
            success: false,
            error: error.message
        });
    }
};

// Get appointments by business
export const getAppointmentByBusiness = async (req, res) => {
    const db = req.app.get("db");
    const { businessId } = req.query;

    try {
        const appointments = await db.appointment.findAll({
            where: { business_id: businessId },
            include: [
                { model: db.user, as: "user" },
                { model: db.service, as: "service" }
            ]
        });

        res.send({
            message: "Appointments retrieved successfully",
            success: true,
            appointments
        });
    } catch (error) {
        console.error("Error retrieving appointments:", error);
        res.status(500).send({
            message: "Failed to retrieve appointments",
            success: false,
            error: error.message
        });
    }
};

// Get appointments by user
export const getAppointmentByUser = async (req, res) => {
    const db = req.app.get("db");
    const { userId } = req.query;

    try {
        const appointments = await db.appointment.findAll({
            where: { user_id: userId },
            include: [
                { model: db.business, as: "business" },
                { model: db.service, as: "service" }
            ]
        });

        res.send({
            message: "Appointments retrieved successfully",
            success: true,
            appointments
        });
    } catch (error) {
        console.error("Error retrieving appointments:", error);
        res.status(500).send({
            message: "Failed to retrieve appointments",
            success: false,
            error: error.message
        });
    }
};