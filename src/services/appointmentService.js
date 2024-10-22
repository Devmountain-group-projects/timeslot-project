import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
        to_email: client.email,
        to_name: client.name,
        appointment_date: formattedDate,
        appointment_time: `${formattedStartTime} - ${formattedEndTime}`,
        service_type: appointmentData.serviceType,
        appointment_status: appointmentData.status,
        appointment_price: `$${appointmentData.price}`,
        appointment_description: appointmentData.description,
        payment_status: appointmentData.paymentStatus,
        update_type: 'New Appointment Created',
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
   * Updates an appointment and sends notification
   */
  async updateAppointment(appointmentData, clientEmail) {
    try {
      console.log('Starting appointment update process...');

      // Format date and time for email
      const formattedDate = new Date(appointmentData.date).toLocaleDateString();
      const formattedTime = this.formatTime(appointmentData.time);

      // Prepare email parameters for notification
      const emailParams = {
        to_email: clientEmail,
        to_name: appointmentData.name,
        appointment_date: formattedDate,
        appointment_time: formattedTime,
        service_type: appointmentData.serviceType,
        appointment_status: appointmentData.status,
        appointment_price: `$${appointmentData.details.price}`,
        appointment_description: appointmentData.details.description,
        payment_status: appointmentData.details.paymentStatus,
        update_type: 'Appointment Updated',
      };

      console.log('Sending update notification to:', clientEmail);

      // Send notification email
      const emailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Update notification sent successfully!');
      console.log('Response:', emailResponse);

      return {
        success: true,
        message: `Appointment update notification sent to ${clientEmail}`,
        emailResponse,
      };
    } catch (error) {
      console.error('Failed to send update notification:', error);
      throw error;
    }
  }

  /**
   * Deletes an appointment and sends notification
   */
  async deleteAppointment(appointmentData, clientEmail) {
    try {
      console.log('Starting appointment deletion process...');

      // Prepare email parameters for notification
      const emailParams = {
        to_email: clientEmail,
        to_name: appointmentData.name,
        appointment_date: new Date(appointmentData.date).toLocaleDateString(),
        appointment_time: this.formatTime(appointmentData.time),
        service_type: appointmentData.serviceType,
        appointment_status: 'Cancelled',
        appointment_description: 'This appointment has been cancelled.',
        update_type: 'Appointment Cancelled',
      };

      console.log('Sending cancellation notification to:', clientEmail);

      // Send notification email
      const emailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Cancellation notification sent successfully!');
      console.log('Response:', emailResponse);

      return {
        success: true,
        message: `Appointment cancellation notification sent to ${clientEmail}`,
        emailResponse,
      };
    } catch (error) {
      console.error('Failed to send cancellation notification:', error);
      throw error;
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
}

export const appointmentService = new AppointmentService();
