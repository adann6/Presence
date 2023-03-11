//made by son1x#7744 and Molux Team
//Community: https://discord.gg/hfac6StA49
//Don't Remove Credits

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - molux rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('')
    .setType('PLAYING') // LISTENING, WATCHING, STREAMING
    .setURL('https://discord.gg/hfac6StA49')
    .setState('text')
  
    .setName('text')
    .setDetails('text')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('img')
    .setAssetsLargeText('text')
    .setAssetsSmallImage('img')
    .setAssetsSmallText('text')
    .addButton('Name', 'URL')
    .addButton('Name', 'URL')
     client.user.setActivity(r);
     client.user.setPresence({ status: "online" });
})

client.login(process.env.MOLUX_TOKEN)

//made by son1x#7744 and Molux Team
//Community: https://discord.gg/hfac6StA49
//Don't Remove Credits
