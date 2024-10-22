import emailjs from '@emailjs/browser';

// Make sure these match exactly with your .env variable names in the backend directory
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Debug logging for environment variables
console.log('EmailJS Configuration Check:');
console.log('Service ID exists:', !!EMAILJS_SERVICE_ID);
console.log('Template ID exists:', !!EMAILJS_TEMPLATE_ID);
console.log('Public Key exists:', !!EMAILJS_PUBLIC_KEY);

/**
 * Service class for handling appointment-related operations
 * TODO: When implementing database:
 * - Add methods for CRUD operations with your backend API
 * - Update createAppointment to save to database first, then send email
 * - Add error handling for database operations
 * - Consider adding retry logic for failed email sends
 */
class AppointmentService {
  /**
   * Creates a new appointment and sends confirmation email to the client
   * @param {Object} appointmentData - The appointment data from the form
   * @param {Object} client - The selected client object containing email and name
   * @returns {Promise} - Resolves when appointment is created and email is sent
   */
  async createAppointment(appointmentData, client) {
    try {
      console.log('Starting appointment creation process...');
      console.log('Client data:', client);
      console.log('Sending confirmation to:', client.email);

      // Format date and time for better email readability
      const formattedDate = new Date(appointmentData.date).toLocaleDateString();
      const formattedStartTime = this.formatTime(appointmentData.startTime);
      const formattedEndTime = this.formatTime(appointmentData.endTime);

      // Prepare email template parameters
      const emailParams = {
        to_email: client.email, // Use client's email from the clients array
        to_name: client.name,
        appointment_date: formattedDate,
        appointment_time: `${formattedStartTime} - ${formattedEndTime}`,
        service_type: appointmentData.serviceType,
        appointment_status: appointmentData.status,
        appointment_price: `$${appointmentData.price}`,
        appointment_description: appointmentData.description,
        payment_status: appointmentData.paymentStatus,
      };

      console.log('Email parameters:', emailParams);

      // Send confirmation email
      const emailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully!');
      console.log('Response:', emailResponse);

      return {
        success: true,
        message: `Appointment confirmation sent to ${client.email}`,
        emailResponse,
      };
    } catch (error) {
      console.error('Failed to send email. Details:', {
        error: error.message,
        clientEmail: client?.email,
        serviceName: EMAILJS_SERVICE_ID,
        templateName: EMAILJS_TEMPLATE_ID,
        emailjsInitialized: !!EMAILJS_PUBLIC_KEY,
      });

      throw new Error(
        `Failed to create appointment or send confirmation email: ${error.message}`
      );
    }
  }

  /**
   * Formats time from 24h to 12h format
   * @param {string} time - Time in 24h format (HH:mm)
   * @returns {string} - Time in 12h format with AM/PM
   */
  formatTime(time) {
    if (!time) return '';

    try {
      const [hours, minutes] = time.split(':');
      const date = new Date();
      date.setHours(parseInt(hours));
      date.setMinutes(parseInt(minutes));

      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
    } catch (error) {
      console.error('Error formatting time:', error);
      return time; // Return original time if formatting fails
    }
  }

  /**
   * Updates an existing appointment
   * TODO: Implement when adding database
   * @param {string} id - Appointment ID
   * @param {Object} appointmentData - Updated appointment data
   */
  async updateAppointment(id, appointmentData) {
    try {
      // TODO: Implement database update
      // const updated = await api.put(`/appointments/${id}`, appointmentData);
      console.log('Updating appointment:', { id, ...appointmentData });
      throw new Error('Update appointment functionality not implemented yet');
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  }

  /**
   * Deletes an appointment
   * TODO: Implement when adding database
   * @param {string} id - Appointment ID
   */
  async deleteAppointment(id) {
    try {
      // TODO: Implement database deletion
      // await api.delete(`/appointments/${id}`);
      console.log('Deleting appointment:', id);
      throw new Error('Delete appointment functionality not implemented yet');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  }

  /**
   * Retrieves all appointments
   * TODO: Implement when adding database
   * @returns {Promise<Array>} - List of appointments
   */
  async getAllAppointments() {
    try {
      // TODO: Implement database fetch
      // const appointments = await api.get('/appointments');
      console.log('Fetching all appointments');
      throw new Error('Get all appointments functionality not implemented yet');
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  }

  /**
   * Validates appointment data before processing
   * @param {Object} appointmentData - The appointment data to validate
   * @returns {boolean} - True if valid, throws error if invalid
   */
  validateAppointmentData(appointmentData) {
    const requiredFields = [
      'date',
      'startTime',
      'endTime',
      'serviceType',
      'status',
      'price',
      'description',
      'paymentStatus',
    ];

    for (const field of requiredFields) {
      if (!appointmentData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate date is not in the past
    const appointmentDate = new Date(appointmentData.date);
    if (appointmentDate < new Date().setHours(0, 0, 0, 0)) {
      throw new Error('Appointment date cannot be in the past');
    }

    return true;
  }
}

export const appointmentService = new AppointmentService();
