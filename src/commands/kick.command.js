module.exports = {
    name: "kick",
    description: "Wyrzuca danego użytkownika",
  
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
            .setTitle("Poprawne użycie to: .kick powód użytkownik")
            .setColor("RED")
            msg.channel.send(embed)
            return
          }
          if (!member)
          {
            const embed = new RichEmbed()
            .setTitle("Poprawne użycie to: .kick powód użytkownik")
            .setColor("RED")
            msg.channel.send(embed)
            return
          }
          
        
            member.kick("Do widzenia")
            const embed = new RichEmbed()
            .setTitle("Użytkownik został wyrzucony!")
            .setColor("RED")
            msg.channel.send(embed)

            const channel = guild.channels.find(channel => channel.id === "715134978068971559")



            const logi = new RichEmbed()
            .setTitle("Użytkownik został wyrzucony!")
            .addField("Użytkownik:",msg.author)
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