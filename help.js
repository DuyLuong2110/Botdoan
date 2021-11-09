const {Util, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    category: 'fun',
    aliases:['h','help'],
    run: (client ,  message ,  args) => {
        const help = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Duy lương')
        .setURL('https://www.facebook.com/ken.luong.3132021')
        .setAuthor('Hướng Dẫn','https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503','https://www.facebook.com/ken.luong.3132021')
        .setDescription('Liên hệ Dev qua lệnh ,r hoặc ,report')
        .setThumbnail('https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503')
        .addFields(
            { name: 'Thông báo ping',
             value: 'Sử dụng lệnh ,p hoặc ,ping để được thông báo ping' },
           // { name: '\u200B', value: '\u200B' },
            { name: 'Phóng to avatar', 
            value: 'Sử dụng lệnh ,avt hoặc ,avatar để phóng to ảnh đại diện'  },
            { name: 'Tìm instagram', 
            value: 'Sử dụng lệnh ,insta hoặc ,instagram để hiển thị instaram cần tìm'},
            { name: 'Kiểm tra cập nhật', 
            value: 'Sử dụng lệnh ,up hoặc ,update để kiểm tra phiên bản của bot nếu bot đang sài phiên bản cũ sẽ tự động cập nhật'},
            { name: 'Các lệnh thuộc Fun', 
            value: '`emoji` | `say` | `speak` | `Nhập lệnh ,helpinfo để xem cách sử dụng các lệnh còn lại`'},
            { name: 'Thông báo phiên bản hiện đang sử dụng',
             value: 'Thầy Bé đang được sử dụng ở phiên bản 2.0' },
        )
        //.addField('Inline field title', 'Some value here', true)
        .setImage('https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503')
        .setTimestamp()
        .setFooter('Các thắc mắc cứ liên hệ với Dev', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.6435-9/159384462_2910463732518948_1787921128032272587_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eS8QuykA2PgAX-JHgVd&tn=cLfRP71urOas43Ce&_nc_ht=scontent.fsgn5-1.fna&oh=157f783baf9fb68900c4620cc58a02ef&oe=61AA2503');
    
        message.channel.send({ embeds: [help] });
    message.channel.send('Đã được up lên phiên bản Thầy Bé V2.')
    }
}