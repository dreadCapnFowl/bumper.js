
const Discord = require('discord.js');
const client = new Discord.Client();

var channels = [
  "",
]
function doBump(client, channel) {

  var chan = client.channels.get(channel);
  console.log(`Bumping \`${chan.guild.name}\` in #${chan.name} in `)

  chan.startTyping();
  setTimeout(function() {
    chan.stopTyping(true);
    chan.send('!d bump')
  }, 6000)
}
function bumpEachChannel(channels) {
  channels.forEach(c => {
    doBump(client, c)
  })
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log(`Set to post in ${channels.length} channels`)
  channels.forEach(c => {
    var chan = client.channels.get(c);
    console.log(`#${chan.name} in \`${chan.guild.name}\``)
  })

  bumpEachChannel(channels);
  setInterval(function() {
    bumpEachChannel(channels);
  }, 1000 * 60 * 60 *  2 + (1000 * 60 * 5))
});
/*
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
*/
client.login();
