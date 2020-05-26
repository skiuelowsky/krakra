module.exports = {
    name: "pomoc",
    description: "komenda ktora pokazuje komendy itp",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg

        const embed = new RichEmbed()
        .setTitle("Kreatorzy serwerów")
        .setDescription("**Zamówienia**\n\nAby złożyć zamówienie udaj się na kanał <#714484679096533043> a następnie wpisz -zamowienie pakiet \n\nAby przyjąć zamówienie wpisz -przyjmij (musisz posiadać rangę kreator!)\n\n**Fun**\n\n-iq - pokaże twoje iq.\n-zart - opowie ci śmieszny żart. \nmoneta - bot rzuci monetą. \nknp - gra kamień, papier, nożyce.\n")
        .addField("Made by", "Skiuel", true)
        .addField("For", `You ${msg.author.username}❤`, true)

        .setColor("#4287f5")
        channel.send(embed)
    },
}