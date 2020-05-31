module.exports = {
    name: "propozycja",
    description: "daje propozycje",
  
    run: async(msg, args)=> {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, } = msg
        
        let wiadom = msg.content.split(".propozycja ")

        if (!wiadom)
        {
            channel.send("Oj, tak to nie wolno ! :(")
            return
        }


        const embed = new RichEmbed()
        .setDescription(wiadom)
        const channel = guild.channels.find(channel => channel.id === "716438067895992422")

        let sendik = await msg.channel.send(embed)
        await sendik.react("✔")
        await sendik.react("❌")

    },
}
