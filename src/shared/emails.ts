//  Email
import emailjs from '@emailjs/browser';

export function sendEmail(templateParams: any, isCalling: any) {
    emailjs.send(
        import.meta.env.VITE_BASE_EMAIL_SERVICE, 
        isCalling, 
        templateParams,
        import.meta.env.VITE_BASE_EMAIL_PUBLIC
    )
    .then(() => console.log("Send Emails"))
    .catch((error) => console.error(error))
};
