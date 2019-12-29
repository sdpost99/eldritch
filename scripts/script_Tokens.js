function Tokens(object) {
  console.log('OUTPUT: Tokens -> args', object);

  let data = new args_Factory(object);
  let player = data.player;
  let action = data.action;
  let value = data.value;

  let sel_skill_value = newData[player].tokens[value];
  let sel_skill_value_top = gameProp[value];

  if (action == 'reduce') {
    if (sel_skill_value > 0) {
      newData[player].tokens[value] = sel_skill_value - 1;
    }
  }
  if (action == 'increase') {
    if (sel_skill_value < (sel_skill_value_top)) {
      newData[player].tokens[value] = sel_skill_value + 1;
    }
  }

  Printer(player, value, newData[player].tokens[value]);
  // console.log(newData[player].tokens);
}
