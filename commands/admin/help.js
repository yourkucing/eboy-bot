const { Client, Intents, MessageEmbed, Permissions, MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');

module.exports.run = async(client, msg, args) => {
    eboylog = client.channels.cache.get('867744429657292810')
	author = msg.author
    guild = client.guilds.cache.get(msg.guild.id)
    eboylog.send(`**${author.username}** [${author.id}] used the **help** command in **${guild}** [${msg.guild.id}].`)

    helparray = []

    const embed1 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Help Page`)
    .setDescription('Thank you for using Eboy bot uwu!\nMaryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her.')
    .addFields({name: `Website:`, value: `https://cookie-codes.tumblr.com/eboy`},
        {name: `Suggestions/Feedback:`, value: `https://cookie-codes.tumblr.com/eboy/askme`},
        {name: `Server Help:`, value: `https://discord.gg/jy7yx4UrAV`}
    )
    .setImage(`https://i.ibb.co/gVpNmkR/image.png`);
    
    helparray.push(embed1)

    const embed2 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Commands`)
    .setDescription('These are the main commands')
    .addFields(
        { name: 'main commands', value: '`uwu`, `owo`, `awa`, `òwó`, `hi eboy uwu`, `eboy, i love you`, `can i get a yee claw`' },
        { name: 'uwu <commands> @<username>', value: '`bite`, `boop`, `cling`, `console`, `defenestrate`, `delete`, `drag`, `hug`, `kick`, `kill`, `kiss`, `love`, `patpat`, `peck` (aka peck on the cheeks), `poke`, `punch`, `scold`, `shake`, `shoot`, `slap`, `snuggle`, `stab`, `summon`, `tackle`, `tonk`, `untonk`, `yeet`' },
        { name: 'uwu <commands>', value: '`angry`, `cheer`, `clap`, `confused`, `cry`, `dance`, `die`, `eat`, `hide`, `hydrate`, `jitter`, `laugh`, `party`, `peek`, `run`, `scream`, `sleep`, `spazz`, `tantrum`, `work`, `yoink`' },
        { name: 'uwu <commands> @<username> ONLY ALLOWED IN NSFW CHANNELS (also there are gay stuffs, so if youre not comfortable with it, dont use it.)', value: '`choke`, `fuck`, `smooch` (aka french kiss/steamy kiss)' });

    helparray.push(embed2)
    
    const embed3 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Money Commands`)
    .setDescription('These are the money commands. You can earn 2g for every message that you send in a channel, but you must enable it first.\n\nPETS: You can buy pets and pet food at the petstore. However, pets will run away if left hungry for more than 6 months.')
    .addFields(
        { name: 'Enable/disable money', value: '`uwu enable-money`, `uwu disable-money` [only admins can use this]' },
        { name: 'Give others money', value: '`uwu paypal <@username> <amount: eg "2g">`'},
        { name: 'Rob others', value: '`uwu rob` <@username>`'},
        { name: 'Withdraw/Deposit money', value: '`uwu withdraw` or `uwu deposit`'},
        { name: 'View Wallet', value: '`uwu wallet`'},
        { name: 'Pet Store', value: '`uwu petstore`'},
        { name: 'View pets', value: '`uwu pets`'},
        { name: 'Rename pets', value: '`uwu pets rename`'},
        { name: 'Feed pets', value: '`uwu pets feed`'},
        { name: 'Gift pet food to others', value: '`uwu gift <@username>`'});

    helparray.push(embed3)

        
    const embed4 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Decisions Commands`)
    .setDescription('These are commands to use if you have decisions, or are in a studying/sprinting mood.')
    .addFields(
        { name: 'Ask the 8ball-eboy a question', value: '`uwu 8ball your-question`' },
        { name: 'Let eboy decide an option for you', value: '`uwu choose [option1, option2, option3, ...]` Use the [] as well!'},
        { name: 'Roll the dice', value: '`uwu dice 2d6` (2d6 = 2 d6 dice)'},
        { name: 'Let eboy sort your choices randomly', value: '`uwu random [option1, option2, ...]`'},
        { name: 'Calculator', value: '`uwu math <add/subtract/divide/multiply> [number1, number2, number3, ...]`'},
        { name: 'Add in your word count', value: '`uwu writing, uwu writing <no. of words>`'},
        { name: 'Have a writing sprint', value: '`uwu sprint <time [eg: "2" for 2 minutes] Note that it can only be done for minutes>`'},
        { name: 'Todo list', value: '`uwu todo`, `uwu todo add <activity>`, `uwu todo delete <number>`, `uwu todo done <number>`, `uwu todo clear`'});

    helparray.push(embed4)


    const embed5 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Fun and Special Commands`)
    .setDescription('These are fun and special commands.')
    .addFields(
        { name: 'Turn your words into a banner', value: '`uwu banner words-here`' },
        { name: 'Give others a cookie', value: '`uwu cookie <@username>`'},
        { name: 'Duel with someone', value: '`uwu duel <@username>'},
        { name: 'F', value: '`uwu f, uwu f <words>, uwu f @<username>`'},
        { name: 'Talk to a random ghost summoned by eboy', value: '`uwu ghost` [BEWARE they are cranky and mean!]'},
        { name: 'Calculate your love', value: '`uwu match <@username1> <@username2>`'},
        { name: 'Uwuify your words', value: '`uwu uwu words-here`'},
        { name: 'Timeout someone', value: '`uwu timeout <@user> <eg: 1m/10s/24h>` [without the time, it will be for a default of 15 minutes.]\nYour bot role must be higher than the timeout role!'});

    helparray.push(embed5)


    const embed6 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Role Reactions`)
    .setDescription('These are for role reactions. [Only admins can use this role]. Note: Eboy\'s role MUST be higher than all the roles and he must have ADMIN role.')
    .addFields(
        { name: 'Create a react message', value: '`uwu react-settings #channel-that-react-message-will-be-in`' },
        { name: 'Edit a react message to put in new react', value: '`uwu react-edit #channel-that-react-message-is-in`'})
    .setImage('https://i.ibb.co/z6S2kpg/image.png');

    helparray.push(embed6)

    const embed7 = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Admin Commands`)
    .setDescription('Only admins can use this command. Eboy interaction includes him replying to a "good morning" or "goodnight".')
    .addFields(
        { name: 'Enable eboy interactions', value: '`uwu enable-interaction`' },
        { name: 'Disable eboy interactions', value: '`uwu disable-interaction`'});

    helparray.push(embed7)

    const button1 = new MessageButton()
    .setCustomId("previousbtn")
    .setLabel("Previous")
    .setStyle("DANGER");

    const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("Next")
        .setStyle("SUCCESS");


    const buttonList = [button1, button2];
    paginationEmbed(msg, birthdayarray, buttonList).catch(e => {console.log(e)})
    
}