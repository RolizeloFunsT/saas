const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = (client, message) => {
  
  const Embed = new Discord.MessageEmbed()

  
  .setColor("RANDOM")
  .setTitle("Prince")
  .setDescription(`
 Guard Bot v12 Yardım
Sunucunuz Her Daim Korumada :)
Genel Komutlar
<a:element:823589731291627520> **${ayarlar.prefix}antiraid aç**
<a:element:823589731291627520> **${ayarlar.prefix}capsengel aç**
<a:element:823589731291627520> **${ayarlar.prefix}emojikoruma aç**
<a:element:823589731291627520> **${ayarlar.prefix}everengel aç**
<a:element:823589731291627520> **${ayarlar.prefix}kanalkoruma aç**
<a:element:823589731291627520> **${ayarlar.prefix}küfürengel aç**
<a:element:823589731291627520> **${ayarlar.prefix}modlog #kanal**
<a:element:823589731291627520> **${ayarlar.prefix}reklamengel aç**
<a:element:823589731291627520> **${ayarlar.prefix}rolkoruma aç**
<a:element:823589731291627520> **${ayarlar.prefix}sohbet-aç**
<a:element:823589731291627520> **${ayarlar.prefix}sohbet-kapat**
<a:element:823589731291627520> **${ayarlar.prefix}sil-üye @üye miktar**
<a:element:823589731291627520> **${ayarlar.prefix}sil miktar**
<a:element:823589731291627520> **${ayarlar.prefix}yavaşmod süre**
<a:element:823589731291627520> **${ayarlar.prefix}ban @üye sebep**
<a:element:823589731291627520> **${ayarlar.prefix}kick @üye sebep**          


  **2020 © Prince | By FunsT**
» Prefixim: **${ayarlar.prefix}**
»[Botumuzu Ekleyin](https://discord.com/oauth2/authorize?client_id=787720135296679946&permissions=8&scope=bot)
»[Kod Sunucumuz](https://discord.gg/SQzAHHchgg)
`)  
  .setImage("https://cdn.discordapp.com/attachments/813812028183019590/826001512563867648/standard_6.gif")
  .setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embed)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["invite", "davet", "help", "yardım"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'medya', 
    description: 'The Help Command',
    usage: 'yardım'
};