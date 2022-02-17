const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const reactionsModel = require('../../models/welcomemsgSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **welcome-msg** command in **${guild}** [${msg.guild.id}].`)

    if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        msg.channel.send("You don't have Administrator permissions to use this.")
        return
    }
    else {
        author = msg.author.id
        serverID = msg.guild.id
        if (!args || args.length == 0) {
            msg.channel.send(`Please put in the channel in your command too like this: \`uwu welcome-msg #thechannelyouwant\``)
            return
        }
        else {
            channelID = args[1]
            console.log(channelID)
            msg.channel.send("Please key in your welcome message. Reply with yes or no, within 2 minutes.")
            const filter = m => m.author.id == msg.author.id;
            msg.channel.awaitMessages({filter, max: 1, time: 120000}).then(collected => {
                message = collected.first().content
                msg.channel.send("Welcome message confirmed!")
                console.log(message)
            }).catch(collected => {
                msg.channel.send('No reply after 2 minutes, please retry!');
                });
        }
    }
}