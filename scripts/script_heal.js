function heal(args) {

  var data = new args_Factory(args);
  let player = data.player;
  // let option = data.option;
  let value = data.value;
  let action = data.action;

  let sel_att_value = newData[player].attributes[value];
  let sel_att_value_top = newData[player].attributes[value + '_max'];

  if (action == 'increase') {
    if (sel_att_value < sel_att_value_top) {
      newData[player].attributes[value] = sel_att_value + 1;
    }
  } else {
    if (sel_att_value > 0) {
      newData[player].attributes[value] = sel_att_value - 1;
    }
  }
  Printer(player, value, newData[player].attributes[value]);

  console.log(newData[player].attributes);
}