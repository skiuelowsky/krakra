module.exports = {
    name: "money",
    description: "Pokazuje stan konta",
  
     run: async(msg, args) => {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      var eco = require('discord-economy')

      var stan = await eco.FetchBalance(msg.author.id)

      const embed = new RichEmbed()
      .setDescription("Twój obecny stan konta to: "+stan.balance+"$")
      .setColor("#03fc94")
      channel.send(embed)
      return


    },
}