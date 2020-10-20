const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    var results = [
    {
        score: '0/100',
        bar: '░░░░░░░░░░',
        conclusion: 'Um, so bad news? This is never ever gonna work out.'
    },
    {
        score: '10/100',
        bar: '█░░░░░░░░░',
        conclusion: 'I mean, you can try.... But nahhhhh. Sorry mate.'
    },
    {
        score: '20/100',
        bar: '██░░░░░░░░',
        conclusion: 'There is a smol tiny tiny chance? Possibly?'
    },
    {
        score: '30/100',
        bar: '███░░░░░░░',
        conclusion: 'Like I said, you could try... But do you want to take the chance?'
    },
    {
        score: '40/100',
        bar: '████░░░░░░',
        conclusion: 'It might be a little rocky but you kinda might want to prepare for the worst.'
    },
    {
        score: '50/100',
        bar: '█████░░░░░',
        conclusion: 'You could be friends with benefits? Just in case things dont work out?'
    },
    {
        score: '60/100',
        bar: '██████░░░░',
        conclusion: 'You could either give up or continue, up to yall :3'
    },
    {
        score: '70/100',
        bar: '███████░░░',
        conclusion: 'This could possibly work out, I mean, yall are cute together uwu.'
    },
    {
        score: '80/100',
        bar: '████████░░',
        conclusion: 'There is a high chance you guys can make this work, dont give up!'
    },
    {
        score: '90/100',
        bar: '█████████░',
        conclusion: 'You guys will probably last till eternity :3'
    },
    {
        score: '100/100',
        bar: '██████████',
        conclusion: 'You will definitely last till eternity. :heart:'
    }
    ]
    
	if (msg.mentions.users.size < 2) {
		const words = args.join(' ').toString();
        userid = words.replace(/<@!/g, '').replace(/>/g, '').split(" ")
        if (userid[0] === "" || userid[1] === "") {
            return msg.channel.send(`You didn't provide any names, ${msg.author}! You gotta provide 2 names. What a dumdum.`);
        }
        else if (userid[0] === userid[1]) {
            msg.channel.send("same same sameeee")
        }
	}
	else {
		const users = msg.mentions.users.map(user => {
		return `${msg.guild.members.cache.get(user.id).displayName} `;
		});
		const userids = msg.mentions.users.map(user => {
		return `${user.id} `;
		});
		userid = userids.toString().split(',');
		if ((userid[0].trim() === '632493999818670091' && userid[1].trim() === '630803907181936641') || (userid[1].trim() === '632493999818670091' && userid[0].trim() === '630803907181936641')) {
			players = users.toString().split(',');
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setTitle(`uwu matchmaking (っ◕‿◕)っ :heart:`)
			.setDescription('Come come, let eboy show you how compatible you are :3')
			.addFields(
				{ name: 'Hooman 1', value: `${players[0]}`, inline: true },
				{ name: 'Hooman 2', value: `${players[1]}`, inline: true },
				{ name: 'Love score', value: `100/100`, inline: true },
				{ name: 'Love bar', value: `██████████`},
				{ name: 'Conclusion', value: `You will last till eternity. :heart:`},
			);
			
			msg.channel.send(embed);
		}
		else if ((userid[0].trim() === '589816379511668756' && userid[1].trim() === '671158558880038922') || (userid[1].trim() === '589816379511668756' && userid[0].trim() === '671158558880038922')) {
			players = users.toString().split(',');
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setTitle(`uwu matchmaking (っ◕‿◕)っ :heart:`)
			.setDescription('Come come, let eboy show you how compatible you are :3')
			.addFields(
				{ name: 'Hooman 1', value: `${players[0]}`, inline: true },
				{ name: 'Hooman 2', value: `${players[1]}`, inline: true },
				{ name: 'Love score', value: `100/100`, inline: true },
				{ name: 'Love bar', value: `██████████`},
				{ name: 'Conclusion', value: `You will last till eternity. :heart:`},
			);
			
			msg.channel.send(embed);
		}
		else if ((userid[0].trim() === '332123726864973837' && userid[1].trim() === '279101053750870017') || (userid[1].trim() === '332123726864973837' && userid[0].trim() === '279101053750870017')) {
			players = users.toString().split(',');
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setTitle(`uwu matchmaking (っ◕‿◕)っ :heart:`)
			.setDescription('Come come, let eboy show you how compatible you are :3')
			.addFields(
				{ name: 'Hooman 1', value: `${players[0]}`, inline: true },
				{ name: 'Hooman 2', value: `${players[1]}`, inline: true },
				{ name: 'Love score', value: `100/100`, inline: true },
				{ name: 'Love bar', value: `██████████`},
				{ name: 'Conclusion', value: `You will last till eternity. :heart:`},
			);
			
			msg.channel.send(embed);
		}
		else {
			var randomresults = results[Math.floor(Math.random()*results.length)];
			players = users.toString().split(',');
			const embed = new Discord.MessageEmbed()
			.setColor('#FF69B4')
			.setTitle(`uwu matchmaking (っ◕‿◕)っ :heart:`)
			.setDescription('Come come, let eboy show you how compatible you are :3\r\nI\'m just a bot messenger btw, this is definitely not real so please do not shoot or kill the messenger uwu thankies :3')
			.addFields(
				{ name: 'Hooman 1', value: `${players[0]}`, inline: true },
				{ name: 'Hooman 2', value: `${players[1]}`, inline: true },
				{ name: 'Love score', value: `${randomresults.score}`, inline: true },
				{ name: 'Love bar', value: `${randomresults.bar}`},
				{ name: 'Conclusion', value: `${randomresults.conclusion}`},
			);
			
			msg.channel.send(embed);
		}
	}
}