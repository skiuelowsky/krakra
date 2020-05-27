module.exports = {
    name: "wyczysc",
    description: "Czysci chat",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      if (msg.content.startsWith(".wyczysc"))
      {
        if (msg.member.hasPermission("MANAGE_MESSAGES"))
        {
        msg.delete()
        let ile = msg.content.slice(8)
        if(!ile)
        {
           const embed = new RichEmbed()
          .setTitle("Wpisz ile wiadomości chcesz usunąć!")
          .setColor("0xfb0b0b")
          channel.send(embed)
          return
        }
          if (ile < 101)
          {
            msg.channel.bulkDelete(ile)
            const embed = new RichEmbed()
            .setTitle("Usunięto " + ile + " wiadomości!")
            .setColor("0xfb0b0b")
            channel.send(embed)
            sleep(2000).then(() => {
              msg.channel.bulkDelete(1)
          });

          }
          else
          {
            const embed = new RichEmbed()
            .setTitle("Możesz usunąć maksymalnie 100 wadomości na raz!")
            .setColor("0xfb0b0b")
            channel.send(embed)
            return
          }
       
        }
        else
        {
          const nie = new RichEmbed()
          .setTitle("Nie masz wystarczających uprawnień!")
          .setColor("0xfb0b0b")
          return
        }
        
      }
    },
}