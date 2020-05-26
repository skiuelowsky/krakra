const {Client, RichEmbed, GuildMember, messageReaction} = require("discord.js")
const chalk = require("chalk")

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
  "By Skiuel", 
  "Dark Souls III"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000);
});

//Weryfikacja
client.on("message", (msg) => {

  

  const { channel, guild, author } = msg
  if (author.bot || !guild) {
    return
  }
  if (msg.content.startsWith("-zamowienie"))
  {
  var menchan = msg.guild.channels.get('714484679096533043').toString()
    if (channel.id==="714484679096533043")
    {

      const tresc = msg.content.slice(12)
      msg.delete()
      if(!tresc)
      {
        channel.send("Przyjacielu, poprawne użycie to `-zamowienie tresc`")
        return
      }
        const role = guild.roles.find(role => role.id==="664533954535358464")
        guild.createChannel(`❗|zamówienie-${msg.author.username}`, {
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
              id: role.id,
              allow: ['READ_MESSAGES','READ_MESSAGE_HISTORY',],
            },
            {
              id: msg.author.id,
              allow: ['READ_MESSAGES','READ_MESSAGE_HISTORY',],
            },
          ],
        })
      .then(channel => {
      let category = guild.channels.find(c => c.name == "┃KREATORZY : ZAMÓWIENIA┃" && c.type == "category");
  
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
      .setDescription(`Tej komendy można używać tylko na kanale <#714484679096533043> !`)
      .setColor("RED")
      channel.send(embed)
    }
    
}

if (msg.content==="-zamknij")
{
  if (msg.member.hasPermission('MANAGE_CHANNELS'))
  {
    channel.delete()

  }
  else
  {
    const embed = new RichEmbed()
    .setTitle("Za cienki w uszach jesteś koleś.")
    .setColor("RED")
    channel.send(embed)
  }
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
