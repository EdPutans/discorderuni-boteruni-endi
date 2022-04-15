
import { Client } from 'discord.js'
require('dotenv').config()
const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;

// Create a new client instance
const client = new Client({
  intents: [
    'GUILD_MESSAGES', // posting messages / interactions
    'GUILD_MESSAGE_REACTIONS',// working with threads
    'GUILDS', // working with threads
    'GUILD_MEMBERS', // get offline + online users
    'GUILD_PRESENCES', // get offline + online users
    'GUILD_INTEGRATIONS',
  ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});
// using a slash command
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  const userId = interaction.user.id;
  if (commandName === 'ping') {
    await interaction.reply({
      content: `Pong! <@${userId}>`,
      ephemeral: true
    });
  }
});

client.on('messageCreate', async message => {
  if (message.author.id === clientId) return;
  // if (message.content.includes('yeet')) return;
  // ed has disgracefully failed his students here ^ RIP.

  message.reply({
    content: "Nice opinion bro!",
  });
})

// Login to Discord with your client's token
client.login(token);