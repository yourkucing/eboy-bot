const Discord = require('discord.js');
const fs = require('fs').promises;

module.exports.run = async(client, msg, args) => {
	if(args.split(/\s+/).length !== 1) {
		let msg1 = await msg.channel.send(`You only need to provide one message ID, ${msg.author}! What a dumdum.`);
	    await msg1.delete({ timeout: 3500 }).catch(err => console.log(err));
	}
	else {
		try {
			let fetchedMessage = await msg.channel.messages.fetch(args);
		}
		catch(err) {
			console.log(err);
			let msg1 =  await msg.channel.send(`Message ID was not even valid, dumdum D:`);
			await msg1.delete({ timeout: 3500 }).catch(err => console.log(err));
		}
	}
}