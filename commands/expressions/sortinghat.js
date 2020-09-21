const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	var houses = [
		'Gryffindor',
        'Ravenclaw',
        'Hufflepuff',
        'Slytherin'
		]
    msg.channel.send(`*You might belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve and chivalry\nSet Gryffindors apart;\nYou might belong in Hufflepuff,\nWhere they are just and loyal,\nThose patient Hufflepuffs are true\nAnd unafraid of toil;\nOr yet in wise old Ravenclaw,\nIf you've a steady mind,\nWhere those of wit and learning,\nWill always find their kind;\nOr perhaps in Slytherin\nYou'll make your real friends,\nThose cunning folk use any means\nTo achieve their ends.*`).then((sentMessage) => sentMessage.edit("You belong in Gryffindor!"));
}