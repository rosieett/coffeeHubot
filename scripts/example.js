'use strict'

//   Documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  //Respond to I'd like to figure out my coffee

  robot.hear(/I'd like to order/, function(res) {
    return res.send('Great! What would you like to order?');
  })


  robot.hear(/Can I order a (.*)/i, function(msg) {
    var coffee;
    coffee = msg.match[1];
      if (coffee == "coffee"){
          return msg.send("Sure! What size?");
      } else if (coffee == "iced coffee") {
          return msg.send("Sure! What size?");
      } else {
        return msg.reply("I\'m sorry, you can only order a coffee, latte, iced coffee, or cappuchino at this time.");
      }

  })

  robot.hear(/Can I order a (.*)/i, function(msg) {
    var withMilk;
    withMilk = msg.match[1];
      if (withMilk == "latte") {
        return msg.send("What kind of milk?");
      } else if (withMilk == "cappuchino") {
          return msg.send("What kind of milk?");
      } else {
        return msg.reply("I\'m sorry, you can only order a coffee, latte, iced coffee, or cappuchino at this time.");
      }

  })

  robot.hear(/milk (.*)/, function(msg) {
    var milk;
    milk = msg.match[1];
    console.log(milk);
    switch (milk) {
      case "whole milk":
        return msg.reply("whole milk, got it!");
        break;
      case "oat milk":
        return msg.reply("oat milk, got it!");
        break;
      case "almond milk":
        return msg.reply("almond milk, got it!");
        break;
      case "skim milk":
          return msg.reply("skim milk, got it!");
          break;
      default:
        return msg.reply("We have whole, skim, almond, or oat milk.");
    }
  })
  // 
  // robot.hear(/milk/, function(res) {
  //   var milk;
  //   milk = msg.match[1];
  //   if (order == "whole milk") {
  //     return msg.send("Great I\'ll have your " + withMilk + "with " + milk);
  //   }
  // })

  // robot.hear(/whole milk/, function(res) {
  //   return res.send("Great I\'ll have your " + withMilk + "with ");
  // })

  robot.hear(/Coffee Order Help/, function(res) {
    return res.send('You should go to somewhere else');
  })



}
