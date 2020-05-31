module.exports = {
    name: "giveway",
    description: "no giveway",
  
    run: async(msg, args)=> {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
        
        let wiadom = await msg.channel.send("elo")
        await wiadom.react("💚")

    },
}
