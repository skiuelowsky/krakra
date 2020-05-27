module.exports = {
    name: "zweryfikuj",
    description: "weryfikuje uzytkownika",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content === ".zweryfikuj")
      {
        if (msg.channel.id === "715134978068971556")
        {
            msg.delete()
            const verifyrole = msg.guild.roles.find(r => r.id === "715134977859387438")
            msg.member.addRole(verifyrole)
            const verify = new RichEmbed()
            .setTitle("Zostałeś poprawnie zweryfikowany!")
            .setColor("GREEN")
            msg.author.send(verify)
        }
        else
        {
            const embed = new RichEmbed()
            .setTitle("Jesteś już zweryfikowany!")
            .setColor("RED")
            channel.send(embed)
        }
      }
    },
}