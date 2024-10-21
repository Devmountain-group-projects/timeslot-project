

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