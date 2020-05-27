module.exports = {
    name: "partnerstwo",
    description: "Partnerstwo",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content.startsWith(".partnerstwo")) //.partnerstwo <serwer> <partner> <ping> <opis>
      {
        if (msg.member.hasPermission("MANAGE_MESSAGES"))
        { 
        msg.delete()
        let check_partnerstwo = msg.content.slice(13)
        if(!check_partnerstwo)
        {
          const perm = new RichEmbed()
          .setTitle("Poprawne użycie: .partnerstwo | serwer | @partner | ping | opis")
          .setColor("fb0d0d")
          channel.send(perm)
        }
        else
          {
          let wiadom = msg.content.split("|")
      
          let serwer = wiadom[1]
          const member = msg.mentions.users.first()
          let ping = wiadom[3]
          let opis = wiadom[4]
          if (ping==="everyone")
          {
            
            const embed = new RichEmbed()
            .setTitle(serwer)
            .setDescription(opis)
            .setColor("0x00fd2a")
            .setFooter("┆🤝┆Partner: "+member.username+"\n┆📢┆Ping: ")
            const channel = client.channels.find(channel => channel.id ==="715134978563899528")
            channel.send(embed)
            channel.send(pingus)
          }
          else
          {
            const embed = new RichEmbed()
            .setTitle(serwer)
            .setDescription(opis)
            .setColor("0x00fd2a")
            .setFooter("┆🤝┆Partner: "+member.username+"\n┆📢┆Ping: "+ping)
            const channel = client.channels.find(channel => channel.id ==="715134978563899528")
            channel.send(embed)
          }
          }
        }
        else
        {
          const perm = new RichEmbed()
          .setTitle("Brak uprawnień!")
          .setColor("fb0d0d")
          channel.send(perm)
        }
      }
    },
}