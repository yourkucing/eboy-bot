const Discord = require('discord.js');
const ud = require('urban-dictionary');
const client = new Discord.Client();
const prefix = "uwu ";
const fs = require('fs');
const Enmap = require("enmap");

const config = require("./config.json");
client.config = config;


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });
 
client.on('guildMemberAdd', member => {
	client.channels.cache.get("714366752489865279").send(`Hey **${member.displayName}**, welcome to **World of Zodiac**!\n\nPlease head yourself to #elements-sorting to sort yourself into a certain house that you want to be in! And then don't forget to head yourself to #pronoun-roles as well! After that, you can go to #self-intro to introduce yourself, and have conversations with all people in this server on #stars-chat ! Just don't forget to read the rules in #rules though! It's necessary! :wink:\n\nHave fun, Stars! We hope you enjoy being in this server! :sparkles:`);
	member.roles.add(member.guild.roles.cache.find(x => x.id == "714374597914656810"), "");
})

client.on('message', msg => {
	
if (msg.author.bot) return

 if (msg.content.toLowerCase() === 'òwó') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('buzz buzz');
	 }
 }
 
 if (msg.content.toLowerCase() === 'uwu') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('OwO');
	 }
 }
 
 if (msg.content.toLowerCase() === 'owo') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('AwA');
	 }
 }
 
 if (msg.content.toLowerCase() === 'awa') {
	 if (msg.author.bot) return;
	 else {
		 msg.channel.send('UwU');
	 }
 }
 
var message = msg.content.toLowerCase()

 if (message.includes('hi eboy uwu')) {
 msg.channel.send('hi ' + msg.author.toString() +' uwu!');
 }
 
 if (message.includes('can i get a yee claw')) {
 msg.channel.send('yee claw!');
 }
 
 if (message.includes('goodmorning') || message.includes('good morning')) {
		 if (msg.author.bot) return;
		 else {
			msg.channel.send(`Goodmorning uwu! Have a great day!`);
		 }
 }
 
 if (message.includes('goodnight') || message.includes('good night') || message.includes('goodnights') || message.includes('nighty')) {
		 if (msg.author.bot) return;
		 else {
			msg.channel.send(`Goodnight uwu! Sleep well!`);
		 }
 }

});

client.login(process.env.token);