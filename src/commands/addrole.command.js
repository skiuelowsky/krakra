module.exports = {
    name: "addrole",
    description: "Dodaje dana role danemu uzytkownikowi",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      if (msg.content.startsWith("-addrole"))
      {
        if (msg.author.username==="Skiuel")
        {
        msg.delete()
        let member = msg.mentions.users.first()
        let hejnal2 = msg.mentions.roles.first()
 
        
        msg.member.addRole(hejnal2)
        const nie = new RichEmbed()
        .setTitle("Użytkownikowi "+member.username+" dodano rolę "+hejnal2.name+"!")
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