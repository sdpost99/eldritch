function health_sanity(args) {

  var data = new args_Factory(args);
  let player = data.player;
  let option = data.option;
  // let value = data.value;
  let action = data.action;

  let sel_att_value = newData[player].attributes[option];
  let sel_att_value_top = newData[player].attributes[option + '_max'];

  if (action == 'increase') {
    if (sel_att_value < sel_att_value_top) {
      newData[player].attributes[option] = sel_att_value + 1;
    }
  } else {
    if (sel_att_value > 0) {
      newData[player].attributes[option] = sel_att_value - 1;
    }
  }
  console.log(newData[player].attributes);
  Printer(player, option, newData[player].attributes[option]);

}