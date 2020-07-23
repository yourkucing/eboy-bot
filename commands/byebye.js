const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		let taggedUser = msg.mentions.members.first();
		  taggedUser.kick().then((taggedUser) => {
					// Successmessage
					msg.channel.send("byebye!");
				}).catch(() => {
					 // Failmessage
					msg.channel.send(`NOPE, no byebye. ${taggedUser.displayName} isn't going anywhere.`);
				});
	}
}