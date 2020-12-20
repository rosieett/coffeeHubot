'use strict'

//   Documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  //Beginning prompt to ordering coffee
  robot.hear(/I'd like to order/, function(res) {
    return res.send('Great! What would you like to order?');
  })

  //Telling the coffeebot your order step 1
  robot.respond(/Can I order a (.*)/, function(msg) {
    var order;
    order = msg.match[1];
    console.log(order);
    if (order == "coffee") {
        return msg.reply("Sure! What size?");
      } else if (order == "iced coffee") {
        return msg.reply("Sure! What size?");
      } else if (order == "latte") {
        return msg.reply("What kind of milk?");
      } else if (order == "cappuchino") {
        return msg.reply("What kind of milk?");
      }
  })

  // Responding to the coffeebot's follow up questions in step 1
  robot.respond(/I'd like a (.*)/i, function(msg) {
    var size;
    console.log(msg);
    size = msg.match[2];
    
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

    // //Responding to whoever wants coffee
    // robot.messageRoom(res.message.user.id, "I need coffee")

}
