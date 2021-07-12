const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzc1Mzk5ODQzODQ0NzE4NjIz.X6lxYQ.akcPowk-4eQ7z1fB-4rIkj9N5-s');

client.on('ready', () => {
	console.log("working");
});

client.on('message', (msg) => {
	if (msg.content == 'Ping') {
		msg.reply("Pong");
	}

	if (msg.content == "Hello") {
		msg.channel.send(`Hi ${msg.author.username}`);
	}

	if (msg.content == "Hi") {
		msg.reply("Hello");
	}

	if (msg.content == "How are you?") {
		msg.reply("I am fine, How are you?");
	}

	if (msg.content == "I am fine") {
		msg.reply("Great");
	}

	if (msg.content == "Good Morning") {
		msg.channel.send("Good Morning");
	}
});