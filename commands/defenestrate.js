exports.run = (client, message, args) => {
	if (!msg.mentions.users.size) {
		return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
	}
	else {
		var gifs = ['https://thumbs.gfycat.com/MistyDelectableKouprey-size_restricted.gif', 'https://i.pinimg.com/originals/51/58/88/515888d6d7fadfd3dd0fa312ca287a34.gif']
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			
			var author = msg.author.id;
			var tagged = msg.author.id;

			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!\r\n${msg.guild.members.cache.get(msg.author.id).displayName} defenestrated themselves.`);
			msg.channel.send(embed);
		}
		else {
			
			var author = msg.author.id;
			var tagged = taggedUser.id;
			
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You defenestrated **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Yikes, byebye ${taggedUser.displayName}!\r\n${msg.guild.members.cache.get(msg.author.id).displayName} defenestrated ${taggedUser.displayName}.`);
			msg.channel.send(embed);
		}
	}
 };
