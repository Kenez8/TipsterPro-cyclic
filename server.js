// Import necessary packages
const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Telegram Bot Setup
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const chatId = process.env.TELEGRAM_CHANNEL_ID;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to receive data from the frontend
app.post('/sendToTelegram', (req, res) => {
    const { sport, team1, team2, tip, bet } = req.body;

    // HTML-formatted message
    const message =  `<b>${sport}</b>\n` +
    `~~~~~~~~~~~~~~~~~~~~\n` +
    `<b>${team1} vs ${team2}</b>\n` +
    `~~~~~~~~~~~~~~~~~~~~\n` +
    `<b>Tip:</b>\t ${tip}\n` +
    `~~~~~~~~~~~~~~~~~~~~\n` +
    `<b>Tét:</b>\t${bet}%`;

    // Sending message to Telegram channel with HTML formatting
    bot.sendMessage(chatId, message, { parse_mode: "HTML" })
       .then(response => {
           res.status(200).send({ message: 'Message sent successfully', response });
       })
       .catch(error => {
           console.error('Error sending message:', error);
           res.status(500).send({ message: 'Error sending message', error });
       });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
