import { sendEmail } from "../utils/emailUtil";

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Получить данные формы из тела запроса
        const { email, message } = req.body;

        // Отправить электронное письмо с помощью node.js и вашей библиотеки электронной почты
        sendEmail(email, message);

        res.status(200).json({ message: 'Письмо отправлено на ваш адрес' });
    } else {
        res.status(405).json({ error: 'Метод не разрешен' });
    }
}