function Tokens(args) {

  let data = new args_Factory(args);
  let player = data.player;
  let option = data.option;
  let action = data.action;

  let sel_skill_value = newData[player].tokens[option];
  let sel_skill_value_top = gameProp[option];

  if (action == 'reduce') {
    if (sel_skill_value > 0) {
      newData[player].tokens[option] = sel_skill_value - 1;
    }
  }
  if (action == 'increase') {
    if (sel_skill_value < (sel_skill_value_top)) {
      newData[player].tokens[option] = sel_skill_value + 1;
    }
  }

  Printer(player, option, newData[player].tokens[option]);

  console.log(newData[player].tokens);

}



// function Action_Tokens_modificator(data) {
//   const sel_action_value = newData[data.player].tokens[data.sel_action];
//   const sel_action_value_top = gameProp[data.sel_action];


//   console.log(sel_action_value);
//   console.log(sel_action_value_top);
//   console.log(data.sel_action);
//   console.log(data);

//     if (sel_action_value < (sel_action_value_top)) {
//       newData[data.player].tokens[data.sel_action] = sel_action_value + 1;
//     }

//   const player_sheet = 'p' + data.player.slice(6);
//   const sheet = document.getElementById(player_sheet);
//   const toChange_span = sheet.querySelector('#' + data.sel_action + '_number');
//   toChange_span.innerHTML = newData[data.player].tokens[data.sel_action];
//   console.log('Action Tokens_modificator');
// }
