/*BASE 𒆜☠︎︎ 𝙈𝙍 𝖊𝖒𝖒𝖖𝖓𝖚𝖊𝖑 𝖘𝖎𝖆 ☠︎︎𒆜⁩
RECODE BY : 𒆜☠︎︎ 𝙈𝙍 𝖊𝖒𝖒𝖖𝖓𝖚𝖊𝖑 𝖘𝖎𝖆 ☠︎︎𒆜⁩
Buy panel ? Chat wa.me/24107573817
Jangan Di Hapus Credit Gw
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '24102781929'
global.nomerowner = ["24102781929"]

//watermark 
global.packname = '𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑'
global.author = 'BSH-MD'
global.foter1 = '𝚂𝚒𝚖𝚙𝚕𝚎 𝙱𝚘𝚝 𝙱𝚢 TECH BSH DEV'
global.foter2 = 'Created By TECH BSH DEV'
global.foter3 = 'BSH-MD'
global.foter4 = 'TECH BSH DEV'
global.idcennel = 'https://whatsapp.com/channel/0029VbA2c1L84Om2ePrKij1x'
global.thumb = 'https://files.catbox.moe/jrln9h.jpg'
global.url = 'https://whatsapp.com/channel/0029VbA2c1L84Om2ePrKij1x'
//database 
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

//mess
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})