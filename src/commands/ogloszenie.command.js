module.exports = {
    name: "ogloszenie",
    description: "Dodaje ogloszenie na kanal z ogloszeniami",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content.startsWith(".ogloszenie"))
      {
        if (msg.member.hasPermission("MANAGE_MESSAGES"))
        {
        msg.delete()
        let wiadom = msg.content.slice(11)
      
        const embed = new RichEmbed()
        .setTitle("Ogłoszenie")
        .setDescription(wiadom)
        .setColor("0x00fff9")
        const channel = client.channels.find(channel => channel.id ==="715134978220097563")
        channel.send(embed)
        }
        else
        {
          const perm = new RichEmbed()
          .setTitle("Nie masz uprawnień!")
          .setColor("fb0d0d")
          channel.send(perm)
        }
      }
    },
}