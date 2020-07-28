const { MessageCollector } = require('discord.js');

let msgCollectorFilter = (newMsg, originalMsg) => {
    let isSameAuthor = newMsg.author.id === originalMsg.author.id;
    let args = originalMsg.content.split(/,\s+/);
    console.log(args);
}

module.exports.run = {
    run: async(client, msg, args) => {
        if(args.split(/\s+/).length !== 1) {
            let msg1 = await msg.channel.send(`You only need to provide one message ID, ${msg.author}! What a dumdum.`);
            await msg1.delete({ timeout: 3500 }).catch(err => console.log(err));
        }
        else {
            try {
                let fetchedMessage = await msg.channel.messages.fetch(args);
                if(fetchedMessage) {
                    await msg.channel.send("Please provide all of the emoji names with the role name.\neg: emojiname, rolename");
                    let collector = new MessageCollector(msg.channel, msgCollectorFilter.bind(null, msg));
                    collector.on('collect', message => {
                        console.log(`${message.content} was collected.`);
                    });
                }
            }
            catch(err) {
                console.log(err);
                let msg1 =  await msg.channel.send(`Message ID was not even valid, dumdum D:`);
                await msg1.delete({ timeout: 3500 }).catch(err => console.log(err));
            }
        }
    }
}