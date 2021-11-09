const {getAudioUrl } = require('google-tts-api');
const Voice = require('@discordjs/voice')
module.exports = {
    name: 'speak',
    category:'fun',
    aliases:['n', 'talk'],
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('Vui lòng nhập đề bot nói!');
        const string = args.join(' ');
        if(string.length > 200) return message.channel.send('Vui lòng nhập dưới 200 từ!');
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.reply('Bạn phải vào room voice để sử dụng bot!');
        const audioUrl = await  getAudioUrl(string,{
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 10000,
        });
        try {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(audioUrl);
                dispatcher.on('finish', ()  => {
                    voiceChannel.leave();
                });
            });
        }
        catch(e) {
            message.channel.send('Bot lỗi, vui lòng thử lại sao!');
            console.error(e);
        };
    },
};