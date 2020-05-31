module.exports = {
    name: "8ball",
    description: "Odpowie na dane pytanie",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
        let ball = 0;
        ball = (Math.round (Math.random () * 1))
        const check = msg.content.slice(6)
        if (!check)
        {
            const embed = new RichEmbed()
            .setTitle("Poprawne użycie to: .8ball pytanie")
            .setColor("RED")
            msg.channel.send(embed)
            return
        }
        if (ball = 0 )
        {
            msg.channel.send("Tak")
        }
        else
        {
            msg.channel.send("Nie")
        }
    },
}