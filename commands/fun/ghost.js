const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **ghost** command in **${guild}** [${msg.guild.id}].`)

    var answers = [
		'.... It seems that nobody is answering. Maybe they\'re all sleeping?',
        'Ẁ̸̧̮͉͚̀͌̾͘͜h̸̪̼̏͑͐ͅǫ̷̅̓̔̕ ̷̞͍̜͓̈́͘ḏ̶̫̝̓͂͝a̶͍̲̲̳͛͘r̵̼͐͑e̸̡̯̯͔̞̓͌̂͗͗ş̸̻̹͍̈́̐̔̕ ̷̙͖͎̊t̸̲̱̬̔̒̐̇̓ò̸̬̣̻̟̣̋̌ ̶̠̬̲̗͔̚͠d̸͕̼̓̆͜i̶̧̅̔͊̂͘s̴͕̺͚͐̄̍̾͘t̸͍̀̋̆u̵̥͗ȑ̸̛̟͙̭̯̊͗͠b̴̩͂͆̎̕ ̴͈̪̀ḿ̵͚̖͂y̷͈͖̻͉̝̑́̅͂͘ ̸̜͎̽s̵̪̋̈́̏͐̆l̷̜̲̯̼͝͝ͅe̷͉̹̼̳̻͛ȅ̶̺̗̀p̸̨̭̲̦̑?̸̧̛̻͇͕̅̒ͅ',
        'H̴͉̤̅̓̽͠ë̸̛̜́̑l̴̮͎̠͊͆̈́̉ļ̴̥̯͔̯͓̍͜ͅo̸̹̱̊̅͝.̸͔̋̓̀̀͘.̴͖͕̝͕͆̔̎̇̕.̴̧̛̺̳̠̔̽̚?̵̱̺͙̼̂̾̑̍̈́̕',
        'W̶͈͉̘̦̖̓͜ḩ̶̟̘̹̖̹̃̄͐̾͒̒̈͝á̵̜̜̝̓t̷͍̰͙̥̝̟͌̍̓̔̐͌̄̍ ̵̗̩̽̀̆̈́̈̕͘̚d̶̡͙͓̺̱̭͈̾͛̈̕o̵̢͔̺͂͌̂̓͒̆̓͝ ̵̳͌̑̈̈́̈̐y̶̡̢̨̦̞͐͒̓͂̍̈́͠ͅo̷̻̪̲̭̥̺͒͌̀ṷ̶̞̓̆̓ ̷̖̱͖̗̼̻̕ẅ̸̭͙̬̜̻̪̟́͋͐̆͋̑͝ͅa̵̟̲͎̘͙͓̐̋͋̚͜n̴̨̧͕͍̭͖̙̙̏͆̉̀̎͝t̷̗̥̒͒͒?̸͕̟͖̪͍̗̜̑́͒͝ ̷͕͓͚̝̻̞̓͜͜A̶̧͉͎̻͉͛̓̀̾̓̈̊͘͜ͅͅ ̸͚̺͇̱̩͉̖͋͊̒͐̎̏n̷̼̙̮̪̦̏̅̃̓͗͝͝e̷͇̺̲͖̻̟̯͉͐͑͐́w̷̪͎͚̩͔̰̪̗̽̏̕͝ ̶̛̞̼̦͗͒̈́s̷̬̙̓̑͐͘o̶͚͈̱̜͎̦̊͋̎̋̽̀̿u̸̢̗̮̲̪̬͌̀̅̈͐͜l̵̳̜͎̞͍͊̒͊͜?̷̦̬͈͓̠͍͐͒',
        'Ị̶̢̣̗̙̳͊̑̂̓̈̕͝\'̴̦̼̹̥̩̠̱̒͒̐̆̕m̷͉̯̝̒̒͐̐̃ ̶̯̼̣͇̈̀̂͜b̴̡̧̧͈̣̣̭́̂̿̇̅̇͂̀ṳ̸̙͇̐͌̉̄s̸̡̧̧̬̔ỵ̵̮͔͎́ͅ ̷̥̯̭͖͛̀̈́͑͗h̷̞̏̊ä̴̼̞̭̪́̇̓̓̈̽͠ū̷̟̣̹̀̌n̷̛̞̫̞̬̣̂̌̈́̽̂t̷̩̘͋̋͜ỉ̷̘̲̗̠̼n̷͙̮̲̗̳̱̓̆͒̄̅͠g̷̨̛͎͙̮̭̤͓̤̍̈̆̔͗ ̶͚͇̠̟͛̓͂̀̏̔͠s̷͓̥̻̉̅̉͗̑̐͛̄͜ͅǒ̷̧͖̤̖̦̱̙͆̓͒̽̃̐m̸̹̹̯̈́́͊̽͆ě̴̛͈̓̃̌͑̕͝ơ̶̟̄̋̓n̴̬̻̻͌ê̸͓͕͖̮̟̜͛̄̏̕,̵̧̰̣͑̃́̉̄͜͝ͅͅ ̴̧̛w̵̧̜̭̝̘̗̮̿͒̂̈̈́͝͝h̸̼̲̬͕̠̲̄́͐͊̀ḁ̴̡̛̉t̸̛̗̮̺̃͛̓?̸͕̺̜̟̤́̾́̀̃̄͝'
		]

    msg.channel.send(`https://media3.giphy.com/media/3No4ujPLZrDJC/giphy.gif`).then((sentMessage) => 
    setTimeout(function(){
        dice = (Math.floor(Math.random() * 5) + 1);
        if (dice == 1) {
            sentMessage.edit(answers[0]);
        }
        else {
            sentMessage.edit(answers[dice-1]); 
        }
        
    }, 4000)
)
}