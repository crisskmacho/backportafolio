const nodemailer = require('nodemailer');

const enviarCorreo = async(req, res) => {
    const { fullName, emailAddress, mobileNumber, emailSubject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: emailAddress,
        to: process.env.EMAIL_USER,
        subject: emailSubject,
        text: `Nombre: ${fullName}\nEmail: ${emailAddress}\nTeléfono: ${mobileNumber}\nMensaje: ${message}`,
    };

    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado correctamente'});
    }catch(error){
        console.error('Error al enviar el correo', error);
        res.status(500).json({ error: 'Error al enviar el correo'});
    }
};

module.exports = {enviarCorreo};