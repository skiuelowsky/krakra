module.exports = {
  name: "ban",
  description: "Banuje danego użytkownika",

  run(msg, args) {
    const {Client, RichEmbed, GuildMember} = require("discord.js")
    const { author, guild, channel,} = msg
    if (msg.content.startsWith('.kick')) {
     if (msg.member.hasPermission("KICK_MEMBERS"))
     {
        const user = msg.mentions.users.first()
        const member = msg.guild.member(user)
        if (!powod)
        {
          const embed = new RichEmbed()
          .setTitle("Poprawne użycie to: .ban powód użytkownik")
          .setColor("RED")
          msg.channel.send(embed)
          return
        }
        if (!member)
        {
          const embed = new RichEmbed()
          .setTitle("Poprawne użycie to: .ban powód użytkownik")
          .setColor("RED")
          msg.channel.send(embed)
          return
        }
        
      
          member.ban(powod)
          const embed = new RichEmbed()
          .setTitle("Użytkownik został zbanowany!")
          .setColor("RED")
          msg.channel.send(embed)

          const channel = guild.channels.find(channel => channel.id === "715134978068971559")



          const logi = new RichEmbed()
          .setTitle("Użytkownik został zbanowany!")
          .addField("Użytkownik:",member)
          .addField("Przez:",msg.author)
          .addField("Kanał:",msg.channel)
          .setColor("#ff0f1b")
          channel.send(logi)
        
        
     }
     else
     {
       const embed = new RichEmbed()
       .setTitle("Za cienki w uszach jesteś koleś.")
       .setColor("RED")
       msg.channel.send(embed)
     }
    }
  },
}