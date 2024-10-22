import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID2;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

class ContactService {
    async createContact(contactData) {
        try {
            // Log the contact data received
            console.log('Contact data received:', contactData);

            // Prepare email template parameters
            const emailParams = {
                from_name: contactData.fromName,
                email: contactData.email,
                subject: contactData.subject,
                message: contactData.message,
            };

            // Log the email parameters before sending
            console.log('Prepared email parameters:', emailParams);

            // Send confirmation email
            const emailResponse = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID2,
                emailParams,
                EMAILJS_PUBLIC_KEY
            );

            // Log the response from emailjs after email is sent
            console.log('Email sent successfully!');

            return {
                success: true,
                message: `Message sent successfully!`,
                emailResponse,
            };
        } catch (error) {
            // Log the error details for debugging
            console.error('Failed to send email. Error details:', {
                error: error.message,
                clientEmail: contactData?.email,
                serviceName: EMAILJS_SERVICE_ID,
                templateName: EMAILJS_TEMPLATE_ID2,
                emailjsInitialized: !!EMAILJS_PUBLIC_KEY,
            });

            throw new Error(
                `Failed to send the message: ${error.message}`
            );
        }
    }
}

export const contactService = new ContactService();