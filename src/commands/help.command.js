module.exports = {
    name: "przyjmij",
    description: "Losuje reszke albo orla albo kradziez monety",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg

        const embed = new RichEmbed()
        .setTitle("Kreatorzy serwerów")
        .setDescription("Aby złożyć zamówienie udaj się na kanał <#714484679096533043> a następnie wpisz -zamowienie pakiet \nAby przyjąć zamówienie wpisz -przyjmij (musisz posiadać rangę kreator!)")
        .addField("Made by Skiuel")
        channel.send(embed)
    },
}