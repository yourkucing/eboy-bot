const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const ghostModel = require('../../models/ghostSchema');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **ghost** command in **${guild}** [${msg.guild.id}].`)

    var answers = [
		'.... It seems that nobody is answering. Maybe they\'re all sleeping?',
        '𝖂𝖍𝖔 𝖉𝖆𝖗𝖊𝖘 𝖙𝖔 𝖉𝖎𝖘𝖙𝖚𝖗𝖇 𝖒𝖞 𝖘𝖑𝖊𝖊𝖕?',
        '𝕳𝖊𝖑𝖑𝖔....?',
        '𝖂𝖍𝖆𝖙 𝖉𝖔 𝖞𝖔𝖚 𝖜𝖆𝖓𝖙? 𝕬 𝖓𝖊𝖜 𝖘𝖔𝖚𝖑?',
        '𝖂𝖍𝖆𝖙? 𝕴\'𝖒 𝖇𝖚𝖘𝖞 𝖍𝖆𝖚𝖓𝖙𝖎𝖓𝖌 𝖘𝖔𝖒𝖊𝖔𝖓𝖊. 𝕸𝖆𝖐𝖊 𝖎𝖙 𝖋𝖆𝖘𝖙, 𝖈𝖍𝖎𝖓𝖈𝖍𝖎𝖑𝖑𝖆.̜̟̤'
		]

    try {
        ans = 0

        msg.channel.send(`https://media3.giphy.com/media/3No4ujPLZrDJC/giphy.gif`).then((sentMessage) => {
    
            setTimeout(function(){
                dice = (Math.floor(Math.random() * 5) + 1);
                if (dice == 1) {
                    sentMessage.edit(answers[0]);
                }
                else {
                    sentMessage.edit(answers[dice-1])
                    ghostModel.create({
                        serverID: msg.guild.id,
                        userID: msg.author.id,
                        channelID: msg.channel.id,
                        createdon: Date.now()
                    })
                }
                
            }, 4000)
    
        })
    } catch {e => {
        console.log(e)
    }}

}