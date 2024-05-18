import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'code.nf404@gmail.com',
            pass: 'Mula5079'
        }
    });

    try {
        const mailOptions = {
            from: email,
            to: 'muthula.alwis@gmail.com',
            subject: `New Work Request - ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        }

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
}