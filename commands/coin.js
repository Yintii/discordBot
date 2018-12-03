module.exports = {
	name: 'coin',
	description: "Flip a coin, it's 50/50!",
	execute(message, args){
		flip = function getRandint(){
                        return Math.floor(Math.random() * Math.floor(2));
                     }
		outcome = flip()
		if(outcome == 1){
			message.channel.send("Heads! :smile:")
		}else if(outcome == 0){
			message.channel.send("Tails! :grin:")
		}
	},
};
