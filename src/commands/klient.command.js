module.exports = {
    name: "klient",
    description: "daje klienta",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg

      if (msg.content.startsWith("-klient"))
      {
        if (msg.member.hasPermission("MANAGE_ROLES"))
        {
         let member = msg.mentions.users.first()
         let clientrole = msg.member.roles.find(r => r.id === "664534018632712193")
          msg.member.addRole(clientrole)
          const embed = new RichEmbed()
           .setTitle( `Użytkownik ${member} stał się klientem. Witamy!`)
          .setColor("RED")
              channel.send(embed)
          }
           else
          {
             const embed = new RichEmbed()
             .setTitle("Za cienki w uszach jesteś koleś.")
           .setColor("RED")
           channel.send(embed)
         }
    }
      
    },
}
