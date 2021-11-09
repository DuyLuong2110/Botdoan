const {Util, MessageEmbed } = require('discord.js');
const fs = require('fs'); //Dùng thư viện json

module.exports = {
    name: 'channel',
    category: 'fun',
    aliases:['c'],
    run: (client ,  message ,  args) => {
         server = message.guild.id; // ID of the guild the message was sent in
         channel = message.channel.id; // ID of the channel the message was sent in
         var rawdata = fs.readFileSync('../../group.json');
         var file = JSON.parse(rawdata);
       //add vao json
       var info = {
           "guild": server,
           "channel":channel
       }
       file.push(info);
       //Gui thong bao da them
       message.channel.send('Đã thêm vào danh sách update!.')
    }
}