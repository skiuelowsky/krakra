module.exports = {
    name: "removerole",
    description: "Usuwa dana role danemu uzytkownikowi",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content.startsWith(".removerole"))
      {
        if (msg.member.hasPermission("MANAGE_ROLES"))
        {
        msg.delete()
        let member = msg.mentions.users.first()
        let hejnal2 = msg.mentions.roles.first()
        
        msg.member.removeRole(hejnal2)
        const nie = new RichEmbed()
        .setTitle("Użytkownikowi "+member.username+" usnięto rolę "+hejnal2.name+"!")
        .setColor("#02e63f")
        channel.send(nie)
        }
        else
        {
          const nie = new RichEmbed()
          .setTitle("Nie masz wystarczających uprawnień!")
          .setColor("0xfb0b0b")
          channel.send(nie)
          return
        }
      }
    },
}
