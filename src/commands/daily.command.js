module.exports = {
    name: "daily",
    description: "dzienny bonus",
  
     run: async(msg, args) => {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      var eco = require('discord-economy')
      var output = await eco.Daily(msg.author.id)


if (output.updated) {

  var profile = await eco.AddToBalance(msg.author.id, 100)
  const embed = new RichEmbed()
  .setDescription(`Odebrano dzienny bonus. Twój obecny stan konta to: ${profile.newbalance}$`)
  .setColor("#03fc94")
  channel.send(embed)

} else {
    const els = new RichEmbed()
    .setDescription(`Już odebrałeś swój dzienny bonus! Spróbuj ponownie za: ${output.timetowait}`)
    .setColor("#03fc94")
    channel.send(els)
}
     },
    }

