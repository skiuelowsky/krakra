module.exports = {
    name: "gej",
    description: "sprawdza czy ktos jest gejem",
  
    run(msg, args) {

        const user = msg.mentions.users.first()
        const member = msg.guild.member(user)
        if (!member)
        {
            const embed = new RichEmbed()
            .setTitle("Poprawne użycie to: .gej użytkownik")
            .setColor("RED")
            msg.channel.send(embed)
            return
        }
        let gej = 0;
        gej = (Math.round (Math.random () * 100))
        msg.channel.send(member + " jest gejem na "+gej+"%")

    },
}