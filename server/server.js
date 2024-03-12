require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/', (req, res) => {
    const {name, lastName, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `New message from ${name} ${lastName}`,
        text: `${name}\n${lastName}\n${email}\n${message}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }
        res.status(200).json({
            message: 'Email sent successfully', info,
        });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));