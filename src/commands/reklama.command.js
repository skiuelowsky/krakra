module.exports = {
    name: "reklama",
    description: "reklama serwera",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
    
      channel.send("``╔═════════════》Dream Discord《═════════════╗\n"+
      "**AUTORSKI BOT NAPISANY POD TWÓJ SERWER ZA DARMO.**\n"+
    
      "Na serwerze DreamDiscord jest promocja. \n"+
      "Wystarczy, że zaprosisz na serwer 2 osoby a będziesz mógł \n"+
      "otrzymać autorskiego\n"+
      "bota za darmo! Jak się zakwalifikować do promocji? Wszystkie s\n"+
      "szczegóły można zobaczyć na serwerze\n"+
      "Nasza strona: http://katosh.pl/\n"+
      "Invitelink:  https://discord.gg/hsEHcZY\n"+
      "╚═════════════》Dream Discord《═════════════╝``")



    },
}