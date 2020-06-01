module.exports = {
    name: "pomoc",
    description: "komenda ktora pokazuje komendy itp",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg

        const embed = new RichEmbed()
        .setTitle("Dream Discord")
        .setDescription("**Zamówienia**\n\nAby złożyć zamówienie udaj się na kanał <#715240756587266212> a następnie wpisz .zamow tresc \n\nAby przyjąć zamówienie wpisz .przyjmij (musisz posiadać rangę maker!)\n\n**Fun**\n\n.iq - pokaże twoje iq.\n.zart - opowie ci śmieszny żart. \n.moneta - bot rzuci monetą. \n.knp - gra kamień, papier, nożyce.\n.propozycja - możesz dać propozycje\n.gej - sprawdza czy dana osoba jest gejem. \n.8ball - odpowie na twoje pytanie.\n\n**Ekonomia**\n\n.money - pokazuje stan twojego konta\n.daily - dzienny bonus\n.praca - praca\n.kasyno - zaryzykujesz? \n.przekaz - przekazuje pieniądze")



        .setColor("#4287f5")
        channel.send(embed)
    },
}