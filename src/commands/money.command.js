module.exports = {
    name: "money",
    description: "stan konta",
  
    run: async(msg, args)=> {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
        const Eco = require("quick.eco")
        const eco = new Eco.Manager();

        const kasa = await fetchMoney(msg.author.id)
        const embed = new RichEmbed()
        .setDescription(`Twój stan konta wynosi:${kasa}`)
        .setColor("#03fcb6")

        

    },
}