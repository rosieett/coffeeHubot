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

  robot.respond(/I'd like a (.*)/i, function(msg) {
    var size;
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


  const drinks = ['coffee', 'iced coffee', 'latte', 'cappuchino']
  const sizes = ['large', 'medium', 'small']
  const milks = ['almond milk', 'oat milk', 'whole milk', 'skim milk']

  robot.hear(/Coffee Order Help/, function(res) {
    res.send(res.random(sizes + milks + drinks));
  })



}
