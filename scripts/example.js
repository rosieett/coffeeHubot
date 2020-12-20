'use strict'

//   Documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  //Respond to I'd like to figure out my coffee

  robot.hear(/I'd like to order/, function(res) {
    return res.send('Great! What would you like to order?');
  })

    robot.respond(/Can I order a (.*)/, function(msg) {
      var order;
      order = msg.match[1];
      console.log(order);
      switch (order) {
        case "coffee":
          return msg.reply("Sure! What size?");
          break;
        case "iced coffee":
          return msg.reply("Sure! What size?");
          break;
        case "latte":
          return msg.reply("What kind of milk?");
          break;
        case "cappuchino":
          return msg.reply("What kind of milk?");
          break;
        default:
          return msg.reply("I\'m sorry, you can only order a coffee, latte, iced coffee, or cappuchino at this time.");
      }
    })

    robot.respond(/I'd like a (.*)/i, function(msg) {
      var size;
      size = msg.match[1];
      if (size == "large"){
        return msg.send("Great! I\'ll have your large" + order + " ready shortly");
      } else if (size == "medium") {
        return msg.reply("Great! I\'ll have your medium" + order + " ready shortly");
      } else if (size == "small") {
        return msg.reply("Great! I\'ll have your small" + order + " ready shortly");
      }
    })

    // robot.respond(/large/, function(res) {
    //   return msg.reply("Great! I\'ll have your large" + order + " ready shortly");
    // })

  // robot.hear(/milk (.*)/, function(msg) {
  //   var milk;
  //   milk = msg.match[1];
  //   console.log(milk);
  //   switch (milk) {
  //     case "whole milk":
  //       return msg.reply("whole milk, got it!");
  //       break;
  //     case "oat milk":
  //       return msg.reply("oat milk, got it!");
  //       break;
  //     case "almond milk":
  //       return msg.reply("almond milk, got it!");
  //       break;
  //     case "skim milk":
  //         return msg.reply("skim milk, got it!");
  //         break;
  //     default:
  //       return msg.reply("We have whole, skim, almond, or oat milk.");
  //   }
  // })
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
