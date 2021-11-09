const {Util, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'update',
    category: 'fun',
    aliases:['up','update'],
    run: (client ,  message ,  args) => {
        //Setup một cái embed chứa report
        const update = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Update')
        .setDescription('Dev thông báo đã cập nhật')
        .addFields(
            { name: 'Thông báo update',
             value: 'Đã fix các lỗi về bot join , bot không chạy nhạc và bot chạy chậm' },
           // { name: '\u200B', value: '\u200B' },
            { name: 'Update mới và hướng dẫn đã có trong Helpinfo', 
            value: 'Sử dụng lệnh ,hpin hoặc ,helpinfo để xem hướng dẫn các lệnh mới và lệnh đã FIX'  },
            { name: 'Kiểm tra cập nhật', 
            value: 'Sử dụng lệnh ,up hoặc ,update để kiểm tra phiên bản của bot nếu bot đang sài phiên bản cũ sẽ tự động cập nhật'},
            { name: 'Thông báo phiên bản hiện đang sử dụng',
             value: 'Thầy Bé đang được sử dụng ở phiên bản 3.0' },
        )
        .setTimestamp()
        //Gửi embed cho sever fix loi , auto cap nhat 
         message.channel.send({ embeds: [update] });
         message.channel.send('Đã được tự động update lên phiên bản Thầy Bé V4.')

            }


      //  lệnh update
          //  if message.author.id == id của m:
        //Mở json
        //Lấy danh sách channel
       // channels = dispatchEvent;
        //if channels.isEmpty:
        //    message.channel.send('Hong co channel de gui het')
        //for c in channels:
          //  let guild = get c['guild']
            //let channel = get(guild.channels, id= c['channel'])  
            //channel.send('')


       //Cấu trúc file json
       //Gồm 1 danh sách  
      // [{"guild":21753123731,
       //"channel":51237683123},
       //{"guild":21753123731,
       //"channel":51237683123},
       //{"guild":21753123731,
       //"channel":51237683123}]


       //trong lệnh link
       //Lay thong tin channel dang ky thong bao
       //guild_id = message.guild.id
       //channel_id = message.channel.id
       //Mở file json, luu thong tin vao file
       //Lưu vào file json
       //Gui thong bao da dang ky
       //

}