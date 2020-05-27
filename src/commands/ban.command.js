module.exports = {
    name: "ban",
    description: "banuje użytkownika",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content.startsWith('.ban')) {
        if (msg.member.hasPermission("BAN_MEMBERS")){
        const user = msg.mentions.users.first();
      
        if (user) {
      
          const member = msg.guild.member(user);
      
          if (member) {
      
            member
              .ban({
                reason: 'Nie ma co plakać',
              })
              .then(() => {
      
                const embed = new RichEmbed()
      
                .setTitle(`${user.tag} został zbanowany!`)
          
          
                .setColor(0xfb0b0b)
                
                channel.send(embed);
              })
              .catch(err => {
      
                const embed = new RichEmbed()
      
                .setTitle(`Nie mogę go zbanować!`)
          
          
                .setColor(0xfb0b0b)
                
                channel.send(embed);
      
                console.error(err);
              });
          } else {
      
            const embed = new RichEmbed()
      
            .setTitle(`Tego użytkownika nie ma na tym chacie!`)
      
      
            .setColor(0xfb0b0b)
            
            channel.send(embed);
          }
        } else {
      
          const embed = new RichEmbed()
      
          .setTitle(`To się robi tak: .ban @nazwa`)
      
      
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