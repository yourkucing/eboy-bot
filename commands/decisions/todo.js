const Discord = require('discord.js');
const todoModel = require(`../../models/todoSchema`)

module.exports.run = async(client, msg, args) => {
    author = msg.author.id
    todo = await todoModel.find({userID: author})
    if (!args || args.length == 0) {
        todolist = ""
        if (!todo || todo.length == 0) {
            msg.channel.send(`You have nothing on your todo list. You can start adding by typing \`uwu todo <whatever you want to put here>\``)
            return
        }
        n = 1
        todolist += `\`\`\`md\n# ${msg.guild.members.cache.get(author).displayName}'s Todo List\n`
        for (x in todo) {
            todolist += `${n}. ${todo[x].todo}\n`
            n += 1
        }
        todolist += `\`\`\``
        msg.channel.send(todolist)
    }
    else {
        if (args[0].toLowerCase() == "clear") {
            clear = await todoModel.deleteMany({userID: author})
            if (clear) {
                msg.channel.send("Todo list has been deleted")
            }
            else {
                msg.channel.send("Todo list has not been deleted. Please try again. If error persists, please contact Maryam#9206.")
            }
        }
        else if (args[0].toLowerCase() == "delete") {
            if (isNaN(args[1])) {
                msg.channel.send("You did not key in the number to delete. Please do it in this way: \`uwu todo delete [number to be deleted]\`")
                return
            }
            else {
                n = args[1] - 1
                if (!todo || todo.length == 0) {
                    msg.channel.send(`You have nothing on your todo list. You can start adding by typing \`uwu todo <whatever you want to put here>\``)
                    return
                }
                else {
                    deletion = await todoModel.findOneAndDelete({userID: author, todo: todo[n].todo})
                    if (deletion) {
                        msg.channel.send(`**[${args[1]}]** has been deleted.`)
                    }
                    else {
                        msg.channel.send(`**[${args[1]}]** has not been deleted. Please try again. If error persists, please contact Maryam#9206.`)
                    }
                }
            }
        }
        else {
            words = args.join(" ")
            todoModel.create({
                userID: author,
                todo: words
            }).then(r => {
                if (r) {
                    msg.react(`✅`)
                }
                else {
                    msg.channel.send(`\`Something went wrong. Please try again or contact Maryam#9206 if error persists.\``)
                }
            })
        }
    }
}