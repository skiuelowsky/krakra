module.exports = {
    name: "praca",
    description: "Praca",
  
     run: async(msg, args) => {
      const {Client, RichEmbed, GuildMember} = require("discord.js")
      const { author, guild, channel,} = msg
      var eco = require('discord-economy')
      var output = await eco.Work(msg.author.id)

      //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
      const praca = (Math.round (Math.random () * 9));
      let pracownik = 0
      if (praca === 0) pracownik = "Sprzątacz"
      if (praca === 1) pracownik = "Kasjer"
      if (praca === 2) pracownik = "Bramkarz"
      if (praca === 3) pracownik = "Roznosiciel ulotek"
      if (praca === 4) pracownik = "Szeryf"
      if (praca === 5) pracownik = "Programista"
      if (praca === 6) pracownik = "Fryzjer"
      if (praca === 7) pracownik = "Policjant"
      if (praca === 8) pracownik = "Hydraulik"
      if (praca === 9) pracownik = "Bezdomny"



        const pracanieudana = new RichEmbed()
        .setDescription("Pracowałeś mało efektywnie przez co nic nie zarobiłeś!")
        .setColor("#03fc94")
        const pracaudana = new RichEmbed()
        .setDescription(`${msg.author.username} Pracowałeś jako \` ${pracownik} \` i zarobiłeś :money_with_wings: ${output.earned}$ twój obecny stan konta: :money_with_wings: ${output.balance}$`)
        .setColor("#03fc94")

      if (output.earned == 0) return channel.send(pracanieudana)
      channel.send(pracaudana)
   
   
      var output = await eco.Work(msg.author.id, {
        failurerate: 10,
        money: Math.floor(Math.random() * 500),
        jobs: ['roznosiciel gazet','bramkarz','kasjer']
      })
      //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.

   
     },
    }