function Cards(args) {



  var data = new args_Factory(args);
  // console.log("Output: Cards -> data", data)
  let player = data.player;
  // console.log("Output: Cards -> player", player)
  let option = data.option;
  // console.log("Output: Cards -> option", option)
  let value = data.value;
  // console.log("Output: Cards -> value", value)
  let action = data.action;
  // console.log("Output: Cards -> action", action)

  let sel_att_value = newData[player].cards[value];
  // console.log("Output: Cards -> sel_att_value", sel_att_value);
  // // console.log('');

  // let adder = ['name', 'tags', 'effect_text', 'action_text', 'skill_bonus_text', 'reroll_text', 'reckoning'];
  // var results = [];
  // sel_att_value.forEach(element => {
  //   var result_text = [];

  //   adder.forEach(att => {
  //     let adder_temp = rawCardsData[value][element][att];
  //     if (adder_temp != null) {
  //       // console.log("Output: Cards -> adder_temp", adder_temp)
  //       result_text.push(adder_temp);
  //     }
  //   })

  //   console.log('');
    
  //   results.push(result_text);


  // });
  // console.log("Output: Cards -> result_text", results);


  // let sel_att_value_top = newData[player].attributes[value + '_max'];

  // if (action == 'increase') {
  //   if (sel_att_value < sel_att_value_top) {
  //     newData[player].attributes[value] = sel_att_value + 1;
  //   }
  // } else {
  //   if (sel_att_value > 0) {
  //     newData[player].attributes[value] = sel_att_value - 1;
  //   }
  // }
  // Printer(player, value, newData[player].attributes[value]);

  // console.log(newData[player].attributes);
  //TODO
}