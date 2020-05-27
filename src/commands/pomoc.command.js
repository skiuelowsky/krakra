module.exports = {
    name: "pomoc",
    description: "komenda ktora pokazuje komendy itp",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg

        const embed = new RichEmbed()
        .setTitle("Dream Discord")
        .setDescription("**Zamówienia**\n\nAby złożyć zamówienie udaj się na kanał <#715240756587266212> a następnie wpisz .zamow tresc \n\nAby przyjąć zamówienie wpisz .przyjmij (musisz posiadać rangę maker!)\n\n**Fun**\n\n.iq - pokaże twoje iq.\n.zart - opowie ci śmieszny żart. \n.moneta - bot rzuci monetą. \n.knp - gra kamień, papier, nożyce.\n")
        .addField("Made by", "Skiuel", true)
        .addField("For", `You ${msg.author.username}❤`, true)

        .setColor("#4287f5")
        channel.send(embed)
    },
}