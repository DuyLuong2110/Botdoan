
/*const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json");
const { paginationEmbed } = require("../../hotro" );
module.exports = {
    name: "helpinfo",
    category: "fun",
    aliases: ["helpinfo"],
    cooldown: 4,
    usage: "aliases",
    description: "Hiển thị tất cả các lệnh phụ có sẵn cho tất cả các Lệnh",
    run: async (client, message, args) => {
      try{
       
        //SONG CMD
        let string1 = `\`\`\`fix // còn chữ fix này để im cho tôi nhé
        ,ping -- thông báo ping discord 
        \`\`\``
        //QUEUE CMD
        let string2 = `\`\`\`fix
        ,emoji -- phóng to emoji người dùng 
        \`\`\``
        let string3 = `\`\`\`fix 
        ,instagram -- hiển thị instagram bạn cần tìm 
        \`\`\``     
        let string4 = `\`\`\`fix // còn chữ fix này để im cho tôi nhé
        ,help -- hiển thị bảng lệnh và thông báo 
        \`\`\``
        
        let string5 = `\`\`\`fix
        ,report -- gữi lỗi đến cho Dev để dev xử lý 
        \`\`\``
        let string6 = `\`\`\`fix 
        ,update -- cập nhật thông tin fix lỗi từ dev và thông báo phiên bản bot hiện tại 
        \`\`\``     
         
        let pages = [
          {"title": "PING COMMANDS - ALIASES", "msg": string1},
          {"title": "EMOJI COMMANDS - ALIASES", "msg": string2},
          {"title": "INSTGRAM COMMANDS - ALIASES", "msg": string3},
          {"title": "HELP COMMANDS- ALIASES", "msg": string4},
          {"title": "REPORT COMMANDS- ALIASES", "msg": string5},
          {"title": "UPDATE COMMANDS- ALIASES", "msg": string6},
        ]
        paginationEmbed(message, pages, ['⏪', '⏩', "⏹"], 60000)

    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`❌ Lỗi | Đã xảy ra lỗi`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}*/
const {Util, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'helpinfo',
    category: 'fun',
    aliases:['hifo','helpinfo'],
    run: (client ,  message ,  args) => {
        const help = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Duy lương')
        .setURL('https://www.facebook.com/ken.luong.3132021')
        .setAuthor('Hướng Dẫn','https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503','https://www.facebook.com/ken.luong.3132021')
        .setDescription('Liên hệ Dev qua lệnh ,r hoặc ,report')
        .setThumbnail('https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503')
        .addFields(
            { name: 'emoji',
             value: 'Sử dụng lệnh ,emo hoặc ,emoji + biểu tượng cảm xúc để phóng to cảm xúc' },
           // { name: '\u200B', value: '\u200B' },
            { name: 'say', 
            value: 'Sử dụng lệnh ,s hoặc ,say để giả thành bot để chat'  },
            { name: 'Speak', 
            value: 'Sử dụng lệnh ,talk , lệnh này sau khi discordJS up lên v13 đã thay đổi Dev còn đang phát triển'},
            { name: 'voice', 
            value: 'Sử dụng lệnh ,huuda , lệnh hiện tại bot chỉ join vào Voicechannel nhưng chưa phát ra tiếng Dev đang phát triển'},
            { name: 'Thông báo phiên bản hiện đang sử dụng',
             value: 'Thầy Bé đang được sử dụng ở phiên bản 2.0' },
             { name: 'Link mời bot',
             value: 'https://discord.com/api/oauth2/authorize?client_id=883720273466097755&permissions=8&scope=bot' },
        )
        //.addField('Inline field title', 'Some value here', true)
        .setImage('https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503')
        .setTimestamp()
        .setFooter('Các thắc mắc cứ liên hệ với Dev', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503');
    
        message.channel.send({ embeds: [help] });
    message.channel.send('Đã được up lên phiên bản Thầy Bé V3.')
    }
}