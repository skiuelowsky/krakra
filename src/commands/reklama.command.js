module.exports = {
    name: "reklama",
    description: "reklama serwera",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
    
      channel.send("``╔═════════════》Dream Discord《═════════════╗"+
      +"**AUTORSKI BOT NAPISANY POD TWÓJ SERWER ZA DARMO.**"
    
      +"Na serwerze DreamDiscord jest promocja. "+
      +"Wystarczy, że zaprosisz na serwer 2 osoby a będziesz mógł "+
      +"otrzymać autorskiego"+
      +"bota za darmo! Jak się zakwalifikować do promocji? Wszystkie s"+
      +"szczegóły można zobaczyć na serwerze"+
      +"Nasza strona: http://katosh.pl/"+
      +"Invitelink:  https://discord.gg/hsEHcZY"+
    +"╚═════════════》Dream Discord《═════════════╝``")



    },
}