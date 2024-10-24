// Add an appointment
export const addAppointment = async (req, res) => {
    console.log("req.body", req.body);
    const db = req.app.get("db");
    const {
        user_id,
        service_id,
        appointment_date,
        appointment_start,
        appointment_end,
        notes,
        status,
        payment_status,
    } = req.body;

    try {
        await db.appointment
            .create({
                user_id_created: req.session.userId,
                user_id: user_id,
                service_id: service_id,
                appointment_date: appointment_date,
                appointment_start: appointment_start,
                appointment_end: appointment_end,
                notes: notes || "No additional notes",
                status: status,
                payment_status: payment_status,
            })
            .then(async (appointment) => {
                const newAppointment = await db.appointment.findByPk(
                    appointment.appointment_id,
                    {
                        include: [
                            {
                                model: db.user,
                                as: "user",
                                include: [{ model: db.business, as: "business" }],
                            },
                            { model: db.service, as: "service" },
                        ],
                    },
                );

                res.status(201).send({
                    message: "Appointment added successfully",
                    success: true,
                    appointment: newAppointment,
                });
            });
    } catch (error) {
        console.error("Error adding appointment:", error);
        res.status(500).send({
            message: "Failed to add appointment",
            success: false,
            error: error.message,
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
                success: false,
            });
        }

        await appointment.destroy();
        res.send({
            message: "Appointment removed successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error removing appointment:", error);
        res.status(500).send({
            message: "Failed to remove appointment",
            success: false,
            error: error.message,
        });
    }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
    const db = req.app.get("db");
    const { appointmentId } = req.params;
    const updatedData = req.body;

    try {
        const appointment = await db.appointment.findByPk(appointmentId);
        if (!appointment) {
            return res.status(404).send({
                message: "Appointment not found",
                success: false,
            });
        }

        // Ensure the date is parsed correctly
        if (updatedData.appointment_date) {
            updatedData.appointment_date = new Date(updatedData.appointment_date);
        }

        await appointment.update(updatedData);

        const updatedAppointment = await db.appointment.findByPk(appointmentId, {
            include: [
                { model: db.user, as: "user" },
                { model: db.service, as: "service" },
            ],
        });

        res.status(200).send({
            message: "Appointment updated successfully",
            success: true,
            appointment: updatedAppointment,
        });
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).send({
            message: "Failed to update appointment",
            success: false,
            error: error.message,
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
                { model: db.service, as: "service" },
            ],
        });

        if (!appointment) {
            return res.status(404).send({
                message: "Appointment not found",
                success: false,
            });
        }

        res.send({
            message: "Appointment retrieved successfully",
            success: true,
            appointment,
        });
    } catch (error) {
        console.error("Error retrieving appointment:", error);
        res.status(500).send({
            message: "Failed to retrieve appointment",
            success: false,
            error: error.message,
        });
    }
};

// Get appointments
export const getAppointments = async (req, res) => {
    const db = req.app.get("db");
    const { userId, businessId } = req.query;

    let objWhere = {};

    if (userId) {
        objWhere = { user_id: userId };
    } else if (businessId) {
        objWhere = { business_id: businessId };
    }

    try {
        const appointments = await db.appointment.findAll({
            where: objWhere,
            include: [
                {
                    model: db.user,
                    as: "user",
                    include: [{ model: db.business, as: "business" }],
                },
                { model: db.service, as: "service" },
            ],
        });

        res.send({
            message: "Appointments retrieved successfully",
            success: true,
            appointments,
        });
    } catch (error) {
        console.error("Error retrieving appointments:", error);
        res.status(500).send({
            message: "Failed to retrieve appointments",
            success: false,
            error: error.message,
        });
    }
};
