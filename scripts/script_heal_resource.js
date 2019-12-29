function Heal_resource(args) {

  var data = new args_Factory(args);
  let player = data.player;
  let value = data.value;
  let action = data.action;

  let sel_att_value = newData[player].actions[value];
  let sel_att_value_top = newData[player].attributes[(value.slice(0, 6)) + '_max'];
  let sel_att_value_current = newData[player].attributes[(value.slice(0, 6))];
  let current_resource_tokens = newData[player].tokens.resource;

  if (action == 'increase') {
    if (sel_att_value < current_resource_tokens) {
      if (sel_att_value < (sel_att_value_top - sel_att_value_current - 1)) {
        newData[player].actions[value] = sel_att_value + 1;
      }
    }
  } else {
    if (sel_att_value > 0) {
      newData[player].actions[value] = sel_att_value - 1;
    }
  }

  if (value == 'sanity_resource') {
    newData[player].actions['health_resource'] = 0;
  } else {
    newData[player].actions['sanity_resource'] = 0;
  }

  Printer(player, 'health_resource', newData[player].actions['health_resource']);
  Printer(player, 'sanity_resource', newData[player].actions['sanity_resource']);
  console.log(newData[player].actions);
}


function Spend_rest_resource(args) {
  var data = new args_Factory(args);
  let player = data.player;

  let health_value = newData[player].actions.health_resource;
  let sanity_value = newData[player].actions.sanity_resource;

  args.value = 'health'
  args.setAttribute('action', 'increase');
  for (let i = 0; i < health_value + 1; i++) {
    Heal(args);
  }
  args.value = 'sanity'
  for (let i = 0; i < sanity_value + 1; i++) {
    Heal(args)
  }

  args.value = 'resource';
  args.setAttribute('action', 'reduce');
  for (let i = 0; i < health_value; i++) {
    Tokens(args);
  }
  for (let i = 0; i < sanity_value; i++) {
    Tokens(args);
  }

  newData[player].actions['health_resource'] = 0;
  newData[player].actions['sanity_resource'] = 0;

  Printer(player, 'health_resource', newData[player].actions['health_resource']);
  Printer(player, 'sanity_resource', newData[player].actions['sanity_resource']);

  console.log(newData[player].actions);
}