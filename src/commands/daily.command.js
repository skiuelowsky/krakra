module.exports = {
    name: "daily",
    description: "sprawdza czy ktos jest gejem",
  
    run: async(msg, args)=> {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
        const Eco = require("quick.eco")
        const eco = new Eco.Manager();



        let add = eco.daily(message.author.id, 500)
        const embed = new RichEmbed()
        .setDescription(`Odebrałeś już swój bonus! Spróbuj ponownie za ${add.time.hours}:${add.time.minutes}:${add.time.seconds}`)
        .setColor("#03fcb6")
        if (add.onCooldown) return channel.send(embed)
    },
}