module.exports = {
    name: "przekaz",
    description: "przekazuje pieniadze",
  
     run: async(msg, args) => {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      var eco = require('discord-economy')
        const brakuser = new RichEmbed()
        .setDescription("Napisz komu chcesz przesłać pieniądze!")
        .setColor("#03fc94")
        const brakamount = new RichEmbed()
        .setDescription("Napisz ile chcesz wysłać pieniędzy!")
        .setColor("#03fc94")
        const zamalo = new RichEmbed()
        .setDescription("Nie masz tyle pieniędzy!")
        .setColor("#03fc94")

      var user = msg.mentions.users.first()
    var amount = args[1]

    if (!user) return channel.send(brakuser)
    if (!amount) return channel.send(brakamount)

    var output = await eco.FetchBalance(msg.author.id)
    if (output.balance < amount) return channel.send(zamalo)

    var transfer = await eco.Transfer(msg.author.id, user.id, amount)
    const udany = new RichEmbed()
    .setDescription("Transfer udany!")
    .setColor("#03fc94")
    channel.send(udany)
     },
    }
