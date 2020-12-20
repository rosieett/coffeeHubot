'use strict'

//   Documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  //Beginning prompt to ordering coffee
  robot.hear(/I'd like to order/, function(res) {
    return res.send('Great! What would you like to order?');
    console.log('working?')
  })

  //Telling the coffeebot your order step 1
  robot.respond(/Can I order a (.*)/, function(msg) {
    var order;
    order = msg.match[1];
    console.log(order);
    if (order == "coffee") {
        return msg.reply(`Sure! A ${order} is a great idea!`);
      }
      // else if (order == "iced coffee") {
      //   return msg.reply('Are you sure? It\'s a little cold for an ' + order ' but no judgement');
      // } else if (order == "latte") {
      //   return msg.reply('Yummy and warming. A ' + order 'is a great idea!');
      // } else {
      //   return msg.reply('Sorry, we only have coffee, iced coffee, and lattes at this time');
      // }
  })

  // Responding to the coffeebot's follow up questions in step 1
  robot.respond(/I'd like a (.*)/i, function(msg) {
    var size;
    size = msg.match[1];
    console.log(size);
    if (size == "large"){
      return msg.send("Great! I\'ll have your large" + order + " ready shortly");
    } else if (size == "medium") {
      return msg.reply("Great! I\'ll have your medium" + order + " ready shortly");
    } else if (size == "small") {
      return msg.reply("Great! I\'ll have your small" + order + " ready shortly");
    }
  })


  // Random task: having the bot randomly create a coffee order from the arrays below
  const drinks = ['coffee', 'iced coffee', 'latte', 'cappuchino']
  const sizes = ['large', 'medium', 'small']
  const milks = ['almond milk', 'oat milk', 'whole milk', 'skim milk']

  robot.hear(/Order something for me/, (res) => {
      res.send('You should get a ' + res.random(sizes) + ' ' + res.random(milks) +' ' + res.random(drinks))
    })

    //Responding to whoever wants coffee
    // robot.hear /tired/i, (res) => {
    //   room = "the-official-hubot-testing-org-for-ga-jsr-121"
    //   robot.messageRoom room, "If you're tired, why not order some coffee!"
    // }


}
