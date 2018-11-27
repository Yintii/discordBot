const secrets = require('./secrets');
const Discord = require('discord.js');
const client = new Discord.Client();


function getRandint(max){
    return Math.floor(Math.random() * Math.floor(max));
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    
    if(message.content === '!coin'){
	var outcome = getRandint(2);
	if (outcome){
	    message.channel.send("Heads! :smile:");
	}else{
	    message.channel.send("Tails! :grin:");
	}
    }
});



client.login(KEY);
