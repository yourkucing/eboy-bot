const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **byebye** command in **${guild}** [${msg.guild.id}].`)

	if (msg.author.id == "557013039795273750") {
		msg.channel.send(`NO, CALUM, YOU'RE BANNED FROM USING THIS.`)
	}

	else {

		if (!msg.mentions.users.size) {
			const words = args.join(' ');
			if (words === "") {
				return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
			}
			else {
				msg.channel.send(`OH, BYEBYE ${words.toUpperCase()}! See you later, but highly likely never u.u`);
			}
		}
		else {
			if (msg.author.hasPermission("ADMINISTRATOR")) {
				let taggedUser = msg.mentions.members.first();
				taggedUser.kick().then((taggedUser) => {
						  // Successmessage
						  msg.channel.send("byebye!");
					  }).catch(() => {
						   // Failmessage
						  msg.channel.send(`NOPE, no byebye. ${taggedUser.displayName} isn't going anywhere.`);
					  });
			}
			else {
				msg.channel.send(`You have no permission to kick anyone out.`)
			}

		}

}
}