module.exports = {
    name: "iq",
    description: "pokazuje iq użytkownika",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content===".iq")
  {
    let iq = 0;
    iq = (Math.round (Math.random () * 180));
    const embed = new RichEmbed()
  
    .setTitle(`Masz ` + iq + ` iq!`)
  
    .setColor(0xff00e7)
  
    channel.send(embed);
  
  }
    },
}