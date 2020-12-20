'use strict'

//   Documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

//Beginning prompt to ordering coffee
robot.hear(/I'm tired/, function(res) {
  return res.send('You know what might help? Coffee!');
})

//Telling the coffeebot your order
robot.respond(/can I order a (.*)/, function(msg) {
  var order;
  order = msg.match[1];
  console.log(order);
  if (order == "coffee") {
    return msg.reply(`Sure! A ${order} is a great idea!`);
  } else if (order == "iced coffee") {
    return msg.reply(`Are you sure? It\'s a little cold for an ${order} but no judgement`);
  } else if (order == "latte") {
    return msg.reply(`Yummy and warming. A ${order} is a great idea!`);
  } else if (order == "tea") {
    return msg.reply(`Great choice. ${order} is my afternoon staple.`);
  } else {
    return msg.reply(`Sorry, we only have coffee, iced coffee, tea, and lattes at this time`);
  }
})

// Coffeebot recommendations depending on what you're feeling
robot.respond(/I'd like something (.*)/i, function(msg) {
  var feeling;
  feeling = msg.match[1];
  console.log(feeling);
  if (feeling == "cold") {
    return msg.send("You're in need of an iced coffee, for sure.");
  } else if (feeling == "milk based") {
    return msg.reply("Sounds like a latte is what you need");
  } else if (feeling == "floral") {
    return msg.reply("I'd recommend a hibiscus tea");
  } else if (feeling == "hot") {
    return msg.reply("Coffee. Definitely coffee.");
  } else {
    return msg.reply(`Feeling ${feeling}? When in doubt, drink seltzer.`)
  }
})


// Random task: having the bot randomly create a coffee order from the arrays below
const drinks = ['coffee', 'iced coffee', 'latte', 'cappuchino']
const sizes = ['large', 'medium', 'small']
const milks = ['almond milk', 'oat milk', 'whole milk', 'skim milk']

robot.hear(/Order something for me/, (res) => {
  res.send('You should get a ' + res.random(sizes) + ' ' + res.random(milks) + ' ' + res.random(drinks))
})

// Responding to the room if someone is tired
robot.hear(/I'm tired/i, function(res) {
  room = "the-official-hubot-testing-org-for-ga-jsr-121", "coffeebot-ordering";
  robot.messageRoom room, "If you're tired, why not order some coffee!";
})

//Responding to the tired person specifically
// robot.hear(/I seriously need coffee/i, function(res) {
//   room = "the-official-hubot-testing-org-for-ga-jsr-121", "coffeebot-ordering";
//   robot.messageRoom res.message.user.id, "I gotchu";
// })

}
