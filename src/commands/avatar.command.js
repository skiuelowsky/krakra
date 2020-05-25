module.exports = {
    name: "avatar",
    description: "Pokazuje avatar danego uzytkownika",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content.startsWith(".avatar"))
      {
        let check
        member = msg.mentions.users.first()
        if (!member)
        {
        const embed = new RichEmbed()
        .setImage(msg.author.avatarURL)
        .setColor("RANDOM")
        .setFooter(msg.author.tag)
        channel.send(embed)
        }
        else
        {
          
          
          const embed = new RichEmbed()
          .setImage(member.avatarURL)
          .setColor("RANDOM")
          .setFooter("Avatar " + member.tag)
          channel.send(embed)
        }
      }
    },
}