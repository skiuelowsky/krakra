module.exports = {
    name: "knp",
    description: "Gra w kamień, papier, nożyce",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content === "-knp")
  {
    const embed = new RichEmbed()
  
    .setTitle(`Aby zagrac wpisz .knp kamien/papier/nozyce`)
  
    .setColor(0xff00e7)
  
    channel.send(embed);
    
  }
  
  if (msg.content === "-knp kamien")
  {
    let losowa_liczba = 0;
    losowa_liczba = losowa_liczba = (Math.round (Math.random () * 2))
  
    if (losowa_liczba ===0)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Kamień! Remis!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
  
    if (losowa_liczba === 1)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Papier! Przegrałeś!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
    if (losowa_liczba === 2)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Nożyce! Wygrałeś!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
  }
  
  if (msg.content === "-knp papier")
  {
    let losowa_liczba = 0;
    losowa_liczba = losowa_liczba = (Math.round (Math.random () * 2))
  
    if (losowa_liczba ===0)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Kamień! Wygrałes!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
  
    if (losowa_liczba === 1)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Papier! Remis!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
    if (losowa_liczba === 2)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Nożyce! Przegrałeś!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
  }
  
  if (msg.content === "-knp nozyce")
  {
    let losowa_liczba = 0;
    losowa_liczba = losowa_liczba = (Math.round (Math.random () * 2))
  
    if (losowa_liczba ===0)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Kamień! Przegrałes!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
  
    if (losowa_liczba === 1)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Papier! Wygrałeś!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
    if (losowa_liczba === 2)
    {
      const embed = new RichEmbed()
  
      .setTitle(`Nożyce! Remis!`)
  
      .setColor(0xff00e7)
    
      channel.send(embed);
  
    }
  }
  
    },
}