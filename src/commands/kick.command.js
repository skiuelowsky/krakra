module.exports = {
    name: "kick",
    description: "Wyrzuca danego użytkownika",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content.startsWith('.kick')) {
        if (msg.member.hasPermission("KICK_MEMBERS")) {
        const user = msg.mentions.users.first();
    
        if (user) {
    
          const member = msg.guild.member(user);
    
          if (member) {
    
    
            member
              .kick('No frajerem był to go wyjebałem')
              .then(() => {
                
                const embed = new RichEmbed()
    
                .setTitle(`${user.tag} został wyrzucony!`)
    
                .setColor(0xfb0b0b)
                
                channel.send(embed);
    
              })
              .catch(err => {
    
                const embed = new RichEmbed()
    
                .setTitle(`Nie mogę go wyrzucić!`)
    
                .setColor(0xfb0b0b)
                
                channel.send(embed);
              });
          } else {
    
                const embed = new RichEmbed()
    
                .setTitle(`Tego użytkownika nie ma na tym chacie!`)
    
                .setColor(0xfb0b0b)
                
                channel.send(embed);
          }
    
        } else {
          
                const embed = new RichEmbed()
    
                .setTitle(`To sie robi tak: .kick @nazwa`)
    
                .setColor(0xfb0b0b)
                
                channel.send(embed);
                 
        }
        
        }
        else
        {
          const embed = new RichEmbed()
    
          .setTitle(`Za cienki w uszach jesteś`)
    
    
          .setColor(0xfb0b0b)
          
          channel.send(embed);
        }
      }
    },
}