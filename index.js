const { Client, Intents, Collection, Guild, DiscordAPIError,MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const {token} = require('./config.json');
client.on("ready" , () => {
    console.log(`${client.user.username}  đã sẵn sàng hoạt động!`);

 client.user.setPresence({
     activities: {
         name: "Đang đi qua thung lũng!",
         type: 'PLAYING'
     },
     status: 'online'
 })
})
    client.commands =  new Collection();
    client.aliase = new Collection();


    ["command"].forEach(handler => {
        require(`./handlers/${handler}`)(client);
    });
    
    client.on("messageCreate", async message => {
        if(message.author.bot) return;
        const prefix = ','
        if(!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);   
        const cmd = args.shift().toLowerCase();
        if(cmd.length === 0 ) return;
        let command = client.commands.get(cmd);
        if(!command) command = client.commands.get(client.aliase.get(cmd));
        if(command) command.run(client ,message, args);

})

client.on('guildCreate', guild => {
    guild.systemChannel.send(`Hello! Cảm ơn bạn đã mời Con Ghệ Sexy này vào ${guild.name}!,
    \nSử dụng lệnh ,help để xem tính năng và lệnh, \nLiên hệ qua [facebook Dev] (https://www.facebook.com/ken.luong.3132021)!`)
  });
/*client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send({embed: [new MessageEmbed() 
        .setColor("WHITE")
        .setAuthor(`Hello! Cảm ơn bạn đã mời Con Ghệ Sexy này vào ${guild.name}!`)
        .setDescription("Prefix is `.` btw!")
        .addField("Sử dụng lệnh ,help để xem tính năng và lệnh", "Liên hệ qua [facebook Dev] (https://www.facebook.com/ken.luong.3132021)!")
    ]});
})*/
client.login(token)
