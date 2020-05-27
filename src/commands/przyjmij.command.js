module.exports = {
    name: "przyjmij",
    description: "Losuje reszke albo orla albo kradziez monety",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
if (msg.content===".przyjmij")
{
  if (msg.member.roles.find(r => r.id === "715242821371559956"))
  {
    if (msg.channel.name.startsWith("❗zamówienie-"))
    {
      const name = msg.channel.name.split("❗zamówienie-")
      msg.channel.setName(`💚${name}-przyjęte`)
      
      const embed = new RichEmbed()
      .setTitle("Przyjęto zamówienie! Miłej współpracy!")
      .setColor("GREEN")
      channel.send(embed)
    }
    else
    {
      const embed = new RichEmbed()
      .setTitle("Ejejej, ten kanał wcale nie jest związany z zamówieniem!")
      .setColor("RED")
      channel.send(embed)
    }

  }
  else
  {
    const embed = new RichEmbed()
    .setTitle("Za cienki w uszach jesteś koleś.")
    .setColor("RED")
    channel.send(embed)
  }
}
    },
}