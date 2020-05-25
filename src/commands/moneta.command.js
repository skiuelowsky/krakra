module.exports = {
    name: "moneta",
    description: "Losuje reszke albo orla albo kradziez monety",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg

    let rzuc_moneta = 0;
    rzuc_moneta = (Math.round (Math.random () * 6));
    if (rzuc_moneta === 0)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Orzeł`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/F7SMw6e.png")
    
      channel.send(embed);
    }
    if (rzuc_moneta === 1)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Reszka`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/RPCk93y.png")
    
      channel.send(embed);
    }
    if (rzuc_moneta === 2)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Orzeł`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/F7SMw6e.png")
    
      channel.send(embed);
    }
    if (rzuc_moneta === 3)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Reszka`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/RPCk93y.png")
    
      channel.send(embed);
    }
    if (rzuc_moneta === 4)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Orzeł`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/F7SMw6e.png")
    
      channel.send(embed);
    }
    if (rzuc_moneta === 5)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Reszka`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/RPCk93y.png")
    
      channel.send(embed);
    }
    if (rzuc_moneta === 6)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Skiuel ukradł złotówkę!`)
    
      .setColor(0xff00e7)
  
      .setImage("https://i.imgur.com/j9HVgDO.png")
    
      channel.send(embed);
    }
  
    },
}