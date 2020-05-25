module.exports = {
    name: "zart",
    description: "Wysyła na chat żart",
  
    run(msg, args) {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      if (msg.content === "-zart")
  {
    let zart = 0;
    zart = (Math.round (Math.random () * 59 ))
    if(zart === 0)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("- Kochanie co byś zrobiła, gdybym wygrał w lotto? \n Wzięłabym połowę i cię zostawiła! \n OK, trafiłem trojkę, masz tu 8 złotych i wypierdalaj!!")
    
      channel.send(embed);
    }
    if(zart === 1)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Rozmawiają dwie przyjaciółki:\n Wiesz, mój Romek prawie mi się wczoraj oświadczył\n Jak to prawie? \n No tak na 50%\n Czemu na 50 %?\n Zapytał: Wyjdziesz?")
    
      channel.send(embed);
    }
    if(zart === 2)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("- Kochanie co byś zrobiła, gdybym wygrał w lotto? \n Wzięłabym połowę i cię zostawiła! \n OK, trafiłem trojkę, masz tu 8 złotych i wypierdalaj!!")
    
      channel.send(embed);
    }
    if(zart === 3)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Rok 1497. Płynie sobie statek piracki straszliwego kapitana Rudobrodego. Nagle na horyzoncie pojawia się statek towarowy. Majtek z bocianiego gniazda woła: \n Kapitanie statek towarowy na horyzoncie!\n Dobra jest! Podajcie moją czerwoną koszulę! Kapitan założył koszulę, dokonali abordażu, straszliwej rzezi i statek był ich. Płyną dalej. Nagle na horyzoncie pojawia się drugi statek towarowy. Majtek z bocianiego gniazda woła:\n Kapitanie statek towarowy na horyzoncie!\n Dobra jest! Podajcie moją czerwoną koszulą!Znów założył koszulę, dokonali abordażu, straszliwej rzezi i statek był ich. Po kilku takich akcjach, jeden z marynarzy pyta:\n Kapitanie! Dlaczego na akcje zawsze zakłada pan czerwoną koszulę?\n Bo jak napadamy na statek, to mogą mnie przecież ranić, a na czerwonej koszuli nie widać plam krwi. A gdy nie widać, że kapitan jest ranny, to duch załogi nie upada i wszyscy walczą jak lwy!W tym momencie majtek z bocianiego gniazda woła:\n Kapitanie 12 brytyjskich statków wojennych!\n Dobra jest! Podajcie moje brązowe spodnie.")
    
      channel.send(embed);
    }
    if(zart === 4)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Rodzice i ich dziecko niemowa jedzą obiad.Nagle dziecko mówi:\nA gdzie kompot?Na to zdezorientowana matka:\nSynku! Przez całe życie nic nie powiedziałeś, czemu?!\nBo zawsze był kompot.")
    
      channel.send(embed);
    }
    if(zart === 5)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("po co jest przegroda w nosie ?\n żeby nie kusiło!")
    
      channel.send(embed);
    }
    if(zart === 6)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Rzecz się dzieje w przedszkolu:Jasiu siedzi na nocniku z powiększonymi oczami i płacze-przechodzi jakiś rodzic i pyta \n :czego Jasiu płaczesz-bo pani powiedziała,że jak zrobimy kupki to pójdziemy na spacer \ni co nie możesz biedny zrobić \nzrobiłem tylko Kaziu mi ukradł")
    
      channel.send(embed);
    }
    if(zart === 7)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Ile żyje dżdżownica złapana przez wędkarza?\n Dwa dni z hakiem.")
    
      channel.send(embed);
    }
    if(zart === 8)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Mam dla pana dwie wiadomości, dobrą i złą.\n Niech pan zacznie od dobrej, doktorze.\n Kredytu można już nie spłacać.")
    
      channel.send(embed);
    }
    if(zart === 9)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setDescription("Jak wygląda francuska flaga bojowa?\n Biały krzyż na białym tle.")
    
      channel.send(embed);
    }
    if (zart>9)
    {
      const embed = new RichEmbed()
  
      .setTitle(`**Żart**`)
    
      .setColor(0xff00e7)
  
      .setImage("http://katosh.pl/zarty/"+zart+".PNG")
    
      channel.send(embed);
    }
  }
    },
}