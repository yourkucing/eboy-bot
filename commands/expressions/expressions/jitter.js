const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
		var gifs = [
			'https://media.tenor.com/images/cc195b958322477eb567be70334ec6a3/tenor.gif',
            'https://media.tenor.com/images/00d5fb23798dc9c84eb56060589bb451/tenor.gif',
            'https://spoonuniversity.com/wp-content/uploads/sites/96/2016/04/tumblr_nmkyszkDUk1urj73to1_500.gif',
            'https://media1.tenor.com/images/cfd5c19b4fb05c9e3c338815b714b21b/tenor.gif',
            'https://media3.giphy.com/media/lvzdeWk12qjmM/giphy.gif',
            'https://media0.giphy.com/media/3oz8xLlw6GHVfokaNW/200.gif',
            'https://kmadsblog.files.wordpress.com/2016/07/hyperventilating-gif.gif',
			'https://cdn.discordapp.com/emojis/768567178655301652.gif',
			'https://cdn.discordapp.com/emojis/770622613000814592.gif'
			]
		var randomgif = gifs[Math.floor(Math.random()*gifs.length)];
		const taggedUser = msg.mentions.users.first();
		const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setDescription(`jitter jitter jitter`)
		.setImage(randomgif)
		.setFooter(`Are you okay? o.o`);
		msg.channel.send(embed);
}