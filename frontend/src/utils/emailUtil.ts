import nodemailer from 'nodemailer';

export async function sendEmail(email, message) {
    try {
        // Создаем транспорт для отправки письма
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com', // адрес SMTP-сервера
            port: 587, // порт SMTP-сервера
            secure: false, // используйте true, если используете SSL
            auth: {
                user: 'your-email@example.com', // адрес электронной почты отправителя
                pass: 'your-email-password', // пароль от адреса электронной почты отправителя
            },
        });

        // Определяем содержимое письма
        const mailOptions = {
            from: 'your-email@example.com', // адрес электронной почты отправителя
            to: email, // адрес электронной почты получателя
            subject: 'Новое сообщение с сайта', // тема письма
            text: message, // текст письма
        };

        // Отправляем письмо
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Ошибка отправки письма:', error);
        throw new Error('Не удалось отправить письмо');
    }
}