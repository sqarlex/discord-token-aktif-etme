const { Client, RichEmbed } = require("discord.js");

const Discord = require("discord.js");

const sqarlex1 = new Discord.Client();
const sqarlex2 = new Discord.Client();
const sqarlex3 = new Discord.Client();
const sqarlex4 = new Discord.Client();
const sqarlex5 = new Discord.Client();
const sqarlex6 = new Discord.Client();
const sqarlex7 = new Discord.Client(); 

// Aktif edilecek token sayısına göre arttırabilirsiniz. Eğer yukarıyı arttırırsanız aynı şekilde aşşağıyıda arttırmanız gerekir.
// Tokenleri tırnakların -> "" arasına yaz.

sqarlex1.login("sqarlex token 1");
sqarlex2.login("sqarlex token 2");
sqarlex3.login("sqarlex token 3");
sqarlex4.login("sqarlex token 4");
sqarlex5.login("sqarlex token 5");
sqarlex6.login("sqarlex token 6");
sqarlex7.login("sqarlex token 7");


/* 
setActivity kısmı size kalmış silebilirsiniz veya istediğiniz gibi değişebilirsiniz baştaki kısma ne yaptığının ismini (ör: Spotify) type kısmına aşağıda bıraktığım dördünden biri;

LISTENING = DİNLİYOR
PLAYING = OYNUYOR
WATCHING = İZLİYOR
STREAMING = YAYINDA*/
  
sqarlex1.on('ready', ()=>{
  sqarlex1.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex1.user.tag} 1 numaralı hesap aktif.`) 
  sqarlex1.user.setActivity('Spotify', {"type": "LISTENING"});
});

sqarlex2.on('ready', ()=>{
  sqarlex2.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex2.user.tag} 2 numaralı hesap aktif.`) 
  sqarlex2.user.setActivity('Euro Truck Simulator 2', {"type": "PLAYING"});
});

sqarlex3.on('ready', ()=>{
  sqarlex3.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex3.user.tag} 3 numaralı hesap aktif.`) 
  sqarlex3.user.setActivity('Rust', {"type": "PLAYING"});
});

sqarlex4.on('ready', ()=>{
  sqarlex4.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex4.user.tag} 4 numaralı hesap aktif.`) 
  sqarlex4.user.setActivity('P0rno', {"type": "WATCHING"});
});

sqarlex5.on('ready', ()=>{
  sqarlex5.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex5.user.tag} 5 numaralı hesap aktif.`) 
  sqarlex5.user.setActivity('Immortals Fenyx Rising', {"type": "PLAYING"});
});

sqarlex6.on('ready', ()=>{
  sqarlex6.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex6.user.tag} 6 numaralı hesap aktif.`) 
  sqarlex6.user.setActivity('Left 4 Dead 2', {"type": "PLAYING"});
});

sqarlex7.on('ready', ()=>{
  sqarlex7.channels.get('ses kanal id').join()
  console.log(`[Aktif] - ${sqarlex7.user.tag} 7 numaralı hesap aktif.`) 
  sqarlex7.user.setActivity('Twitch', {type: "STREAMING", url: "https://www.twitch.tv/sqarlex223334444555556666667777777"});
});
