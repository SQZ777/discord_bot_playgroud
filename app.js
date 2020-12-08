require('dotenv').config();
const { Client } = require('discord.js');

Client.login(process.env.discordToken);
