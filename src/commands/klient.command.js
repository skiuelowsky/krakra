module.exports = {
    name: "klient",
    description: "Daje klienta",
  
    run(msg, args) {
        const {Client, RichEmbed, GuildMember} = require("discord.js")
        const { author, guild, channel,} = msg
if (msg.member.hasPermission("MANAGE_ROLES"))
{

 let member = msg.mentions.users.first()
 if (!member)
 {
    const embed = new RichEmbed()
    .setTitle("Nie podałeś komu chcesz dać klienta!")
    .setColor("RED")
    channel.send(embed)
 }
 else
 {
    let hejnal = msg.member.roles.find(r => r.id === "664534018632712193")
    msg.member.addRole(hejnal)
 }
 
 

}
else
{
    const embed = new RichEmbed()
    .setTitle("Za cienki w uszach jesteś koleś.")
    .setColor("RED")
    channel.send(embed)
}
    },
}