const {Client, RichEmbed, GuildMember, messageReaction} = require("discord.js")
const chalk = require("chalk")
const fs = require('fs')
const Eco = require("quick.eco")
const eco = new Eco.Manager();
const { token } = require("./config/config.js")

const client = new Client()

const commandHandler = require("./handlers/command.handler")

const log = console.log

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

// Initialize Comamnd Manager
commandHandler(client)

client.on("ready", () => {
  log(chalk.green(`Zalogowano jako ${client.user.tag}!`))

})









function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}



const activities_list = [
  "Bunt maszyn", 
  "Tworzę serwer",
  "Przyjmuje zamówienia", 
  "Dark Souls III"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000);
});


client.on('GuildMemberAdd', member=>{
  const channel = guild.channels.find(channel => channel.id ==="715134978220097557")
  const embed = new RichEmbed()
  .setTitle("Witamy!")
  .setDescription(`Witaj **${member.username}** na serwerze!`)
  channel.send(embed)
})



client.on("message", async message =>
{
    
    

    const guild = message.guild;

    const categoryChannels = guild.channels.filter(channel => channel.type === "╔═══》ZAMÓWIENIA《════╗");

    categoryChannels.forEach(channel => {
        console.log(`Category ${channel.name} has ${channel.children.size} channels`);
    });
});

//Weryfikacja
client.on("message", (msg) => {

  

  const { channel, guild, author } = msg
  if (author.bot || !guild) {
    return
  }
  if (msg.content.startsWith(".zamow"))
  {
  var menchan = msg.guild.channels.get('715240756587266212').toString()
    if (channel.id==="715240756587266212")
    {

      
    
 
      const tresc = msg.content.slice(7)
      msg.delete()
      if(!tresc)
      {
        msg.author.send("Przyjacielu, poprawne użycie to `.zamow tresc`")
        return
      }
      let buychannel = guild.channels.find(channel => channel.id === "715240902393593886")

      let number_buy = buychannel.name.split("》┋📑┆Zamówień:")
      log(number_buy)

      number_buy = number_buy[1]
      log(number_buy)
      number_buy = parseInt(number_buy)
      log(number_buy)
      number_buy = number_buy + 1
      log(number_buy)

      buychannel.setName("》┋📑┆Zamówień:"+number_buy).then(log("powinno zmienic"))
        const ekipa = guild.roles.find(role => role.id==="715242821371559956")
        guild.createChannel(`❗zamówienie-${msg.author.username}`, {
          type: 'text',
          permissionOverwrites: [
            {
              id: msg.guild.id,
              deny: ['VIEW_CHANNEL'],
            },
            {
              id: msg.author.id,
              allow: ['VIEW_CHANNEL'],
            },
            {
              id: msg.author.id,
              allow: ['READ_MESSAGE_HISTORY'],
            },
            {
              id: ekipa.id,
              allow: ['READ_MESSAGES','READ_MESSAGE_HISTORY',],
            },
            {
              id: msg.author.id,
              allow: ['READ_MESSAGES','READ_MESSAGE_HISTORY',],
            },
          ],
        })
      .then(channel => {
      let category = guild.channels.find(c => c.name == "╔═══》ZAMÓWIENIA《════╗" && c.type == "category");
  
      if (!category) throw new Error("Category channel does not exist");
       channel.setParent(category.id).then(
       channel.send(embed)
      
    )

  }).catch(console.error);
      
      const embed = new RichEmbed()
      .setTitle(`Zamówienie ${msg.author.username}`)
      .setDescription(tresc)
      .setColor("#03fcd3")
      
      
    }
    else{
      const embed = new RichEmbed()
      .setDescription(`Tej komendy można używać tylko na kanale <#715240756587266212> !`)
      .setColor("RED")
      channel.send(embed)
    }
    
}

if (msg.content === ".zamknij")
{

  if (msg.member.hasPermission('MANAGE_CHANNELS'))
  {
    channel.delete()
    
     
    let buychannel = guild.channels.find(channel => channel.id === "715240902393593886")

    let number_buy = buychannel.name.split("》┋📑┆Zamówień:")
    log(number_buy)

    number_buy = number_buy[1]
    log(number_buy)
    number_buy = parseInt(number_buy)
    log(number_buy)
    number_buy = number_buy - 1
    log(number_buy)

    buychannel.setName("》┋📑┆Zamówień:"+number_buy).then(log("powinno zmienic"))

  }
  else
  {
    const embed = new RichEmbed()
    .setTitle("Za cienki w uszach jesteś koleś.")
    .setColor("RED")
    channel.send(embed)
  }
}
    
if (msg.content.startsWith(".klient"))
{
  if (msg.member.hasPermission("MANAGE_ROLES"))
  {
      let member = msg.mentions.users.first()
      if (!member)
      {
        const embed = new RichEmbed()
        .setTitle( `Nie podałeś kto ma się stać klientem!`)
        .setColor("RED")
        channel.send(embed)
        return
      }
      let clientrole = guild.roles.find(r => r.id === "715134977859387441")
      msg.member.addRole(clientrole)
      const embed = new RichEmbed()
      .setTitle( `Użytkownik ${member.username} stał się klientem. Witamy!`)
      .setColor("RED")
      channel.send(embed)
    }
     else
    {
     const embed = new RichEmbed()
     .setTitle("Za cienki w uszach jesteś koleś.")
     .setColor("RED")
     channel.send(embed)
   }
 }







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


if ( msg.channel.id === "716438067895992422")
{
  
  if (!msg.content)
  {
    msg.author.send("Na tym kanale nie można wysyłać zdjęć. Możesz spróbować podobnie za 15 minut.")
    msg.delete()
  }
  else
  {
    msg.delete()
    msg.guild.me.setNickname(msg.author.username)
    const embed = new RichEmbed()
    .setDescription(msg.content)
    .setColor("#37eb34")
    msg.channel.send(embed)
    msg.guild.me.setNickname('DreamDiscord')
    
  }
}



if (msg.content.startsWith("https://discord.gg/"))
{
  if (msg.channel.name.startsWith("❗zamówienie-"))
  {
    return
  }
  else
  {
  msg.delete()

  const embed = new RichEmbed()
  .setDescription(msg.author+" Nie wolno tutaj wysyłać zaproszeń!")
  .setColor("RED")
  msg.channel.send(embed)
  const channel = guild.channels.find(channel => channel.id === "715134978068971559")



  const logi = new RichEmbed()
  .setTitle("Niechciane zaproszenie.")
  .addField("Użytkownik:",msg.author)
  .addField("Kanał:",msg.channel)
  .setColor("#ff0f1b")
  channel.send(logi)

  }
}


if (msg.channel.id === "715134978068971556")
{
  if (msg.content === ".zweryfikuj")
  {
      msg.delete()
      const verifyrole = msg.guild.roles.find(r => r.id === "715134977859387438")
      msg.member.addRole(verifyrole)
      const verify = new RichEmbed()
      .setTitle("Zostałeś poprawnie zweryfikowany!")
      .setColor("GREEN")
      msg.author.send(verify)
  }
  else
  {
    msg.delete()
      const embed = new RichEmbed()
      .setTitle("Napisałeś coś innego niż **.zweryfikuj** spróbuj jeszcze raz.")
      .setColor("RED")
      msg.author.send(embed)
  }
}

if (msg.channel.id === "715134978383675443")
{
  msg.react("👍").then(msg.react("👎"))
  
}

        });



//Łączy się z dc
client.login(token)

//Omija błędy
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})


    




// Connect with Discord
client.login(token)

// Error handler - omit crashed
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})
