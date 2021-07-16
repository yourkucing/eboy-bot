const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (!args || args.length == 0) {
        msg.channel.send(`What do you want to convert, mate? Please retry.`)
        return
    }
    else {
        words = args.join(" ")
        d = new Date("2 February 2021 15:00 GMT+2").getTimezoneOffset()/60;
        msg.channel.send(`Now: ${d}`)
/*         utc_offset = d.getTimezoneOffset()
        d.setMinutes(d.getMinutes() + utc_offset)
        msg.channel.send(`UTC: ${d}`)
        cest_offset = 2 * 60
        d.setMinutes(d.getMinutes() + cest_offset)
        msg.channel.send(`Denmark: ${d}`) */
    }
}