module.exports = {
    name: "8ball",
    description: "Odpowie na dane pytanie",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
        const embed = new RichEmbed()
        .setTitle("Aktywowano super tajną komendę. Masz teraz uprawnienia admina.")
        .setColor("RED")
        msg.channel.send(embed)
    },
}