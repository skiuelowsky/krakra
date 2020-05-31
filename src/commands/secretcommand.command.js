module.exports = {
    name: "secretcommand",
    description: "Tajna komenda",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
        const embed = new RichEmbed()
        .setTitle("Aktywowano super tajną komendę. Masz teraz uprawnienia admina.")
        .setColor("RED")
        channel.send(embed)
    },
}