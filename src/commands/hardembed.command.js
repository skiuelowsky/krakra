module.exports = {
  name: "hardembed",
  description: "Wysyła embed",

  run(msg, args) {
    const {Client, RichEmbed, GuildMember} = require("discord.js")
    const { author, guild, channel,} = msg
    if (msg.author.username==="Skiuel")
    {
      let sprawdzanie = msg.content.slice(11)
      if(!sprawdzanie)
      {
        const embed = new RichEmbed()
        .setTitle("Poprawne użycie : -hardembed |kolor|tytul|obrazek|opis")
        .setColor("#fc0303")
        .setDescription("Jeśli chcesz aby dane pole było puste zrób tak: | |")
        channel.send(embed)
        return
      }
      else
      {
        msg.delete()
        let pominecie = msg.content.split("|")
        let kolor = pominecie[1]
        let tytul = pominecie[2]
        let obrazek = pominecie[3]
        let opis = pominecie[4]
  
        const embed = new RichEmbed()
        .setTitle(tytul)
        .setColor(kolor)
        .setDescription(opis)
        .setImage(obrazek)
        channel.send(embed)
        return
      }
    }
    else
    {
      const embed = new RichEmbed()
      .setTitle("Brak uprawnień!")
      .setColor("0xe80909")
      channel.send(embed)
    }
  },
}
