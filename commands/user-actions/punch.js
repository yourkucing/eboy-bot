const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
	guild = client.guilds.cache.get(msg.guild.id)
	eboylog.send(`**${author.username}** [${author.id}] used the **punch** command in **${guild}** [${msg.guild.id}].`)
	var gifs = [
		'https://66.media.tumblr.com/06f9c15ef14eea0140fff2800889eb68/tumblr_nmifhe4pyE1tb8iyko1_400.gif',
		'https://media.giphy.com/media/D9AJVEMgXAhlm/giphy.gif',
		'https://gifimage.net/wp-content/uploads/2017/09/anime-punch-gif-6.gif',
		'https://i.pinimg.com/originals/bb/6b/8e/bb6b8e07c31e7ab9f481240e97704020.gif',
		'https://cdn159.picsart.com/228190013051202.gif',
		'https://3.bp.blogspot.com/-f2C5CBKw05A/W95nlOPZ4HI/AAAAAAABXVo/eU16NRt_qQIh64c3AvSScDYuRL2H6lAegCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFairy%2BTail%2BFinal%2BSeason%2B-%2BEpisode%2B282%2B-%2BLucy%2BPunch.gif',
		'https://pa1.narvii.com/6335/c697f13cfc2ff482fd2970fb205fd7d23d57dc32_hq.gif',
		'https://1.soompi.io/wp-content/uploads/2014/07/kim-soo-hyun-secretly-greatly-punch.gif',
		'https://media1.tenor.com/images/288b7338acc44e10004a1063dc5fc521/tenor.gif'
		]
	if (!msg.mentions.users.size) {
		const words = args.join(' ');
		if (words === "") {
			return msg.channel.send(`You didn't provide any name, ${msg.author}! What a dumdum.`);
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched **${words}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send({embeds: [embed]});
		}
	}
	else {
		const taggedUser = msg.mentions.members.first();
		if (taggedUser.id === msg.author.id) {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched yourself!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send({embeds: [embed]});
		}
		else {
			const embed = new MessageEmbed()
			.setColor('#FF69B4')
			.setDescription(`You punched **${taggedUser.displayName}**!`)
			.setImage(gifs[Math.floor(Math.random()*gifs.length)])
			.setFooter(`Wow, what a fighter uwu!`);
			msg.channel.send({embeds: [embed]});

		}
	}
}