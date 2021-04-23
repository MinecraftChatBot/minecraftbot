const mineflayer = require('mineflayer');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const ChatMessage = require('prismarine-chat')('1.16')
const tpsPlugin = require('mineflayer-tps')(mineflayer)
const faq = require('data-store')({ path: process.cwd() + '/faq.json' });


const msg = new ChatMessage({"text":"Example chat mesasge"})
console.log(msg.toString())



const bot=mineflayer.createBot({
  host: process.env.host,             // minecraft server ip
  username: process.env.username, // minecraft username
  password: process.env.password,          // minecraft password, comment out if you want to log into online-mode=false servers
  port: process.env.port,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
});

let blacklist = ['D_0k', 'Hell0HD', 'Rumpilton',]


bot.loadPlugin(tpsPlugin)

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 25565, firstPerson: false }) // port is the minecraft server port, if first person is false, you get a bird's-eye view
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message == '!help'){
  bot.chat("/w " + username + " https://bot.willmoto.com/commands/ (I am a bot run by MotoMC#9161 and Torvalds#6319)")
}
  else return
})

bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (message === 'tps') {
      bot.chat('Current tps: ' + bot.getTps())
    }
  })
  //broken :(
   


bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message == '!hitlist'){
  bot.chat('/w ' + username + " My hit list!!!!")
  bot.chat('/w ' + username + " D_0k")
  bot.chat('/w ' + username + " gameguideguy")
  bot.chat('/w ' + username + " Rumpilton")
  bot.chat('/w ' + username + " AceOrCreeper")
  bot.chat('/w ' + username + ' LaggyNoob')
  bot.chat('/w ' + username + " ChillzyPillz")
  }
  else return
})

bot.on('whisper', (username, message, translate, jsonMsg, matches) => {
  console.log('jsonMsg intake '+ '<' + username + '>' + ' ' + jsonMsg)
  console.log('rawmsg intake (may be broken) '+ '<' + username + '>' + ' ' + jsonMsg)
})


bot.on('chat', (username, message) => {
  console.log('<' + username + '>' + ' ' + message)
  if (username === bot.username) return
  if (message == '!bestmod'){
  bot.chat('/w ' + username + " kiyuhl")
  }
  else return
})
bot.on('chat', (username, message) => {
  if (username === blacklist) return
  if (username === bot.username) return
  if (message == '!bestplayer'){
  bot.chat('/w ' + username + " kiyuhl")
  }
  else return
})
bot.on('chat', (username, message) => {
  if (username === blacklist) return
  if (username === bot.username) return
  if (message == '!lack'){
  let lackjokes = ["LackofBrain", "LackofGoodStreamer", "LackofSpelling", "LackofFunny", "LackofMeme", "LackofFun", "LackofLack"]
  let lackjoke = lackjokes[Math.floor(Math.random() * lackjokes.length)];
  bot.chat('/w ' + username + ' ' + lackjoke + " jokes by GameGuideGuy")
  }
  else return
})
bot.on('chat', (username, message) => {
  if (username === blacklist) return
  if (username === bot.username) return
  if (message == '!health'){
  bot.chat("/w " + username + " I am at " + bot.health + " health")
  }
  else return
})
bot.on('chat', (username, message) => {
  if (username === blacklist) return
  if (username === bot.username) return
  if (message == '!telljoke'){
    let jokes = ["I invented a new word! Plagiarism", 'Judge: I sentence you to the maximum punishment...nMe (thinking): Please be death, please be death...nJudge: Learn Java!nMe: Damn.', "Algorithm: A word used by programmers when they don't want to explain how their code works.", "I have a joke about trickle down economics, but 99% of you will never get it.", "My little daughter came to me all excited, saying Daddy! Daddy! Guess how old I'll be in June! Oh I don't know princess, why don't you tell me? I said. She gave me a huge smile and held up four fingers. It's now three hours later, police have joined in and she still won't say where she got them.", "Debugging: Removing the needles from the haystack.", "Four engineers get into a car. The car won't start.The Mechanical engineer says It's a broken starter.The Electrical engineer says Dead battery.The Chemical engineer says Impurities in the gasoline.The IT engineer says Hey guys, I have an idea: How about we all get out of the car and get back in.", "I have a fish that can breakdance! Only for 20 seconds though, and only once.", "Two C strings walk into a bar.The bartender asks What can I get ya?The first string says I'll have a gin and tonic.The second string thinks for a minute, then says I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@The first string apologizes, You'll have to excuse my friend, he's not null-terminated.", "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says Can't you see the warning on the cigarette pack? Smoking is hazardous to your health! to which the man replies, I am a programmer.  We don't worry about warnings; we only worry about errors.", "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.", "Never date a baker. They're too kneady.", "A neutron walks into a bar and asks for a price on a drink.The barkeeper says: For you... no charge!", "Knock, knock.Who's there?[very long pause]Java.", "My wife and I have reached the difficult decision that we do not want children.If anybody does, please just send me your contact details and we can drop them off tomorrow.", "Two fish in a tank. One turns to the other and says, Do you know how to drive this thing?",]
    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    bot.chat('/w ' + username + ' ' + joke
    )
  }
  else return
})

function lookat () {
  bot.chat(' ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

//bot.on('chat', (username, message) => {
//  if (username === blacklist) return
//  if (username === bot.username) return
//  if (message == '!faq'){
//    bot.chat('/w ' + username + ' FAQ 1: the world boarder is 5000 blocks out!')
//    bot.chat('/w ' + username + ' is this a anarchy server? No it is not its a SMP that allows raiding and Xray')
//  }
//  else return
//})

bot.on('chat', (username, message) => {
  if (username === blacklist) return
  if (username === bot.username) return
  if (message.includes('!addfaq')) {
    removedprefix = message.replace(/!addfaq/g, '');
    bot.chat('/w ' + username + ' added ' + (Math.random() * '885'))
  }
  else return
})



bot.on('chat', (username, message) => {
  if (username === blacklist) return
  if (username === bot.username) return
  if (message == '!worstbot'){
    bot.chat('/w ' + username + ' D_0k')
  }
  else return
})
bot.on('chat', (username, message) => {
    if (username === blacklist) return
    if (username === bot.username) return
    if (message == '!info'){
      console.log('/w ' + username + " The Server's Difficulty is set to " + bot.game.difficulty + ' The max amound of players on the server can be ' + bot.game.maxPlayers + ' The server is running ' + bot.game.serverBrand + ' Hope you enjoy this useless info')
    }
    else return
  })




// Log errors and kick reasons:
bot.on('kicked', console.log,)
bot.on('error', console.log)
bot.on('physicTick', lookat)
bot.on('error', console.log)
