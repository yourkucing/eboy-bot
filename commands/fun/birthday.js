const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if (!args) {
        //show birthday details
    }
    else {
        const words = args.join('').toLowerCase();
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        if (date_regex.test(words)) {
            console.log("Date follows dd/mm/yy format")
        }
        else{
          console.log("Invalid.")
        }
    }
}