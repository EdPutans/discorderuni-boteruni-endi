const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

require('dotenv').config()

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.TOKEN;
const guildId = '964453863472119848';

const commands = [
  new SlashCommandBuilder().setName('ping')
    .setDescription('Replies with pong!'),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);