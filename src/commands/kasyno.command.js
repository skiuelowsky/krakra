module.exports = {
    name: "kasyno",
    description: "kasyno",
  
     run: async(msg, args) => {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      var eco = require('discord-economy')
      const sprecyzuj = new RichEmbed()
      .setDescription("Sprecyzuj ile chcesz postawić!")
      .setColor("#03fc94")
       const malo = new RichEmbed()
       .setDescription("Masz za mało pięniędzy żeby tyle postawić!")
       .setColor("#03fc94")

    var amount = args[0] //Coins to gamble
 
    if (!amount) return channel.send(sprecyzuj)
 
    var output = await eco.FetchBalance(msg.author.id)
    if (output.balance < amount) return channel.send(malo)
 
    var gamble = await eco.Slots(msg.author.id, amount, {
      width: 3,
      height: 1
    }).catch(console.error)
    msg.channel.send(gamble.grid)//Grid checks for a 100% match vertical or horizontal.
    let wynik = 0
    if (gamble.output === "lost") wynik = "Przegrałeś"
    if (gamble.output === "win") wynik = "Wygrałeś"
    const nowybalans = new RichEmbed()
    .setDescription(`${wynik}! Stan konta: ${gamble.newbalance}`)
    .setColor("#03fc94")
    channel.send(nowybalans)
     },
    }
