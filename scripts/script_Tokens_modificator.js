function Tokens_modificator(data) {
  const sel_skill_value = newData[data.player].tokens[data.sel_skill];
  const sel_skill_value_top = gameProp[data.sel_skill];


  console.log(sel_skill_value);
  console.log(sel_skill_value_top);
  console.log(data.sel_skill);
  console.log(data);
  if (data.sel_skill_action == '-') {
    if (sel_skill_value > 0) {
      newData[data.player].tokens[data.sel_skill] = sel_skill_value - 1;
    }
  }
  if (data.sel_skill_action == '+') {
    if (sel_skill_value < (sel_skill_value_top)) {
      newData[data.player].tokens[data.sel_skill] = sel_skill_value + 1;
    }
  }
  const player_sheet = 'p' + data.player.slice(6);
  const sheet = document.getElementById(player_sheet);
  const toChange_span = sheet.querySelector('#' + data.sel_skill + '_number');
  toChange_span.innerHTML = newData[data.player].tokens[data.sel_skill];
  // console.log('Tokens_modificator');
}



function Action_Tokens_modificator(data) {
  const sel_action_value = newData[data.player].tokens[data.sel_action];
  const sel_action_value_top = gameProp[data.sel_action];


  console.log(sel_action_value);
  console.log(sel_action_value_top);
  console.log(data.sel_action);
  console.log(data);

    if (sel_action_value < (sel_action_value_top)) {
      newData[data.player].tokens[data.sel_action] = sel_action_value + 1;
    }

  const player_sheet = 'p' + data.player.slice(6);
  const sheet = document.getElementById(player_sheet);
  const toChange_span = sheet.querySelector('#' + data.sel_action + '_number');
  toChange_span.innerHTML = newData[data.player].tokens[data.sel_action];
  console.log('Action Tokens_modificator');
}
