function dropdown_selection(data) {
  var new_charData = newData[data.id];
  new_charData.dropdown = data.className;
  new_charData.player = data.id;
  new_charData.sel_skill = data.value.slice(1);
  new_charData.sel_action = data.value;
  new_charData.sel_skill_action = data.value.slice(0, 1);
  new_charData.current_resources = newData[data.id].tokens.resource;
  new_charData.health_top = rawData.playersData[new_charData.char].health;
  new_charData.sanity_top = rawData.playersData[new_charData.char].sanity;

  // dropdown de acciones
  if (data.className == 'action_drop') {
    Action(new_charData);
  }

  // //dropdown de health and sanity **DONE**
  // if (data.className == 'health_drop' || data.className == 'sanity_drop') {
  //   health_sanity(new_charData);
  // }

  // //dropdown de skills  **DONE**
  // if (data.className == 'skills_drop') {
  //   Skills_modificator(new_charData);
  // }

  // //dropdown de tokens **DONE**
  // if (data.className == 'tokens_drop') {
  //   Tokens_modificator(new_charData);
  // }
}


// function Action_sheet_modificator(data) {
//   const player_sheet = 'p' + data.player.slice(6);
//   const sheet = document.getElementById(player_sheet);
//   const toChange_span = sheet.querySelector('#' + data.option + '_number');
//   toChange_span.innerHTML = newData[data.player].tokens[data.option];
// }

// function Action_rest_modificator(data) {
//   console.log(data);
//   const player = data.player;
//   var health = data.attributes.health;
//   var health_top = data.health_top;
//   var sanity = newData[player].attributes.sanity;
//   var sanity_top = rawData.playersData[data.char].sanity;
//   if (data.current_resources > 0) {
//     if ((health + 1) < health_top || (sanity + 1) < sanity_top) {
//       Rest_modal(data);
//     } else {
//       Rest(1, 1, data);
//     }
//   } else {
//     Rest(1, 1, data);
//   }
// }

// function Rest_modal(data) {
//   const player = data.player;
//   let modal = document.querySelector(".modal-blocker");
//   let modal_rest = document.querySelector("#modal-rest");
//   var resource_av = document.getElementById('av_res');
//   var rest_health_btn = document.getElementById('rest_health_btn');
//   var rest_sanity_btn = document.getElementById('rest_sanity_btn');
//   var rest_cancel_btn = document.getElementById('rest_cancel_btn');
//   var current_resources = newData[player].tokens.resource;
//   var rest_radio_div = document.getElementById('rest_radio');
//   modal.style.visibility = "visible";
//   modal_rest.style.visibility = "visible";

//   //removing radios if already exists in the modal rest window
//   var remove_radios = rest_radio_div.firstChild;
//   if (remove_radios !== null) {
//     while (rest_radio_div.firstChild) {
//       rest_radio_div.removeChild(rest_radio_div.firstChild);
//     }
//   }

//   resource_av.innerHTML = current_resources;

//   for (var i = 0; i < current_resources; i++) {
//     var rest_radio = document.createElement('input');
//     rest_radio.setAttribute('type', 'radio');
//     rest_radio.setAttribute('name', 'res_radio');
//     rest_radio.setAttribute('value', (i + 1));
//     rest_radio.setAttribute('onclick', 'Accept_btn(this.value)');

//     rest_health_btn.setAttribute('value', 0); //resetea valor de boton
//     rest_sanity_btn.setAttribute('value', 0); //resetea valor de boton

//     var rest_radio_label = document.createElement('span');
//     rest_radio_label.innerHTML = 'Use ' + Number(i + 1) + ' resource';

//     const radio_wraper = document.createElement('label');
//     radio_wraper.appendChild(rest_radio);
//     radio_wraper.appendChild(rest_radio_label);

//     newRow_div = document.createElement('div');
//     newRow_div.setAttribute('class', 'flex-div-btn');
//     newRow_div.setAttribute('name', 'rest-flex-div');

//     newRow_div.appendChild(radio_wraper);
//     rest_radio_div.appendChild(newRow_div);
//   }

//   rest_sanity_btn.onclick = function () {
//     rest_Modal(this, data);
//   };
//   rest_health_btn.onclick = function () {
//     rest_Modal(this, data);
//   };
//   rest_cancel_btn.onclick = function () {
//     modal.style.visibility = "hidden";
//     modal_rest.style.visibility = "hidden";
//   }

//   function rest_Modal(clicked, data) {
//     var health_or_sanity = clicked.innerHTML.slice(8).toLowerCase();
//     const result_top = rawData.playersData[data.char][health_or_sanity];
//     const result_current = newData[data.player].attributes[health_or_sanity];
//     var result = Number(clicked.value);
//     if (result > 0) {
//       if ((result + 1 + result_current) > result_top) {
//         alert('Selecciona una cantidad de recursos que de como resultado\nun numero \bNO mayor al maximo de vida de tu personaje.\nMax. ' + health_or_sanity + ': ' + result_top);
//       } else {
//         modal.style.visibility = "hidden";
//         modal_rest.style.visibility = "hidden";
//         var health_newAmt = 0;
//         var sanity_newAmt = 0;
//         if (health_or_sanity == 'health') {
//           health_newAmt = result + 1;
//           sanity_newAmt = 1;
//         } else {
//           health_newAmt = 1;
//           sanity_newAmt = result + 1;
//         }
//         // console.log('health_newAmt ' + health_newAmt);
//         // console.log('sanity_newAmt ' + sanity_newAmt);
//         newData[data.player].tokens.resource = data.current_resources - result;
//         Rest(health_newAmt, sanity_newAmt, data);
//       }

//     } else {
//       alert('Select resource amount to spend');
//     }
//   }
// }

// function Accept_btn(data) {
//   var rest_health_btn = document.getElementById('rest_health_btn');
//   var rest_sanity_btn = document.getElementById('rest_sanity_btn');
//   rest_health_btn.setAttribute('value', data);
//   rest_sanity_btn.setAttribute('value', data);
//   styling_modal(0, 'rest');
// }

// function Rest(health_newAmt, sanity_newAmt, data) {
//   if (data.attributes.health < data.health_top) {
//     newData[data.player].attributes.health = data.attributes.health + health_newAmt;
//   }
//   // var temp_health = newData[data.player].attributes.health;
//   // console.log('health: ' + temp_health + ' health_top: ' + data.health_top);

//   if (data.attributes.sanity < data.sanity_top) {
//     newData[data.player].attributes.sanity = data.attributes.sanity + sanity_newAmt;
//   }
//   // var temp_sanity = newData[data.player].attributes.sanity;
//   // console.log('sanity: ' + temp_sanity + ' sanity_top: ' + data.sanity_top);

//   const player_sheet = 'p' + data.player.slice(6);
//   const sheet = document.getElementById(player_sheet);
//   const health_td = sheet.querySelector('#health');
//   const sanity_td = sheet.querySelector('#sanity');
//   const resource_td = sheet.querySelector('#resource_number');
//   health_td.innerHTML = newData[data.player].attributes.health;
//   sanity_td.innerHTML = newData[data.player].attributes.sanity;
//   resource_td.innerHTML = newData[data.player].tokens.resource;
// }

function Action_move(data) {
  // console.log('move action');
  // const player = data.player;
  // console.log(data);
  const current_location = newData[data.player].current_location;
  // console.log(current_location);
  let modal = document.querySelector(".modal-blocker");
  let modal_move = document.querySelector("#modal-move");
  var current_location_span = document.getElementById('cl');
  var move_accept_btn = document.getElementById('move-accept-btn');
  move_accept_btn.setAttribute('value', current_location);
  var move_cancel_btn = document.getElementById('move-cancel-btn');
  var move_normal_radio_div = document.getElementById('move-normal-radio');

  // modal.style.display = "block";
  // modal_move.style.display = "block";
  modal.style.visibility = "visible";
  modal_move.style.visibility = "visible";

  //removing radios if already exists in the modal rest window
  reset_radios('move-normal-radio');
  reset_radios('move-ship-radio');
  reset_radios('move-train-radio');



  current_location_span.innerHTML = rawData_Locations[current_location].name;
  current_location_span.value = current_location;
  // console.log(rawData_Locations[current_location].conn);
  current_location_conn_list = Object.keys(rawData_Locations[current_location].conn);
  // var current_location_conn_newList = [];

  // console.log(current_location_conn_list);
  current_location_conn_list.forEach(radio_builder);

  function radio_builder(item, index) {
    var name = rawData_Locations[item].name;
    var move_radio = document.createElement('input');
    move_radio.setAttribute('type', 'radio');
    move_radio.setAttribute('name', 'move_radio');
    move_radio.setAttribute('value', item);
    move_radio.setAttribute('onclick', 'Extra_move(this.value)');
    var move_radio_label = document.createElement('span');
    move_radio_label.innerHTML = name;
    const radio_wraper = document.createElement('label');
    // radio_wraper.setAttribute('class', 'test');
    radio_wraper.appendChild(move_radio);
    radio_wraper.appendChild(move_radio_label);

    const newRow_div = document.createElement('div');
    newRow_div.setAttribute('class', 'flex-div-btn');
    newRow_div.setAttribute('name', 'move-flex-div');
    move_normal_radio_div.appendChild(newRow_div);
    newRow_div.appendChild(radio_wraper);
    // newRow_div.appendChild(move_radio_label);
  }

  move_accept_btn.onclick = function () {
    var result = this.value.split(',');
    // console.log('current location accept btn: ' + this.value);
    // console.log('current location on data: ' + newData[data.player].current_location);
    // console.log(result[1]);
    const ticket_token = data.tokens[result[1]];
    var newLocation = result[0];
    // console.log(result[1]);
    // console.log(ticket_token);
    // console.log(newLocation);

    if (result[1] == 'ship') {
      // console.log('ship tokens: ' + ticket_token);
      if (ticket_token == 0) {
        alert('ship tokens 0');
      } else {
        newData[data.player].tokens[result[1]] -= 1;
        Moving(newLocation, 'ship');
        // console.log(newData[data.player].tokens[result[1]]);
      }
    } else if (result[1] == 'train') {
      if (ticket_token == 0) {
        alert('train token 0');
      } else {
        newData[data.player].tokens[result[1]] -= 1;
        Moving(newLocation, 'train');
      }
    } else {
      // console.log('normal movements');
      Moving(newLocation, 'normal');
    }
  };

  function Moving(newLocation, type) {
    // console.log(type);
    // console.log(newLocation);
    newData[data.player].current_location = newLocation;
    var player_sheet = 'p' + data.player.slice(6);
    var sheet = document.getElementById(player_sheet);
    const location_div = sheet.querySelector('#location');
    location_div.innerHTML = rawData_Locations[newLocation].name;

    if (type != 'normal') {
      var new_ticket_token = newData[data.player].tokens[type];
      const ticket_div = sheet.querySelector('#' + type + '_number');
      ticket_div.innerHTML = new_ticket_token;
    }
    // console.log(variable);
    modal.style.visibility = "hidden";
    modal_move.style.visibility = "hidden";

  }

  move_cancel_btn.onclick = function () {
    // modal.style.display = "none";
    // modal_move.style.display = "none";
    modal.style.visibility = "hidden";
    modal_move.style.visibility = "hidden";
  }
}


function reset_radios(id) {
  var radio_div = document.getElementById(id);
  var remove_radios = radio_div.firstChild;
  if (remove_radios !== null) {
    while (radio_div.firstChild) {
      radio_div.removeChild(radio_div.firstChild);
    }
  }
}


function Extra_Move_Accept_btn(data, type) {
  var move_accept_btn = document.getElementById('move-accept-btn');
  // console.log('accept btn value: ' + move_accept_btn.value);
  // console.log('extra move data: ' + data);
  // console.log('clicked: ' + data.value);
  // console.log('type: ' + type);
  result = []
  if (type == 'ship') {
    result = [data.value, 'ship'];
    // styling_modal(1);
  } else if (type == 'train') {
    // styling_modal(2);
    result = [data.value, 'train'];
  }
  move_accept_btn.setAttribute('value', result);
  // console.log('xxxx: ' + result);
  styling_modal(1, 'move');
  styling_modal(2, 'move');
}

function styling_modal(i, modal) {
  console.log(i);
  console.log(modal);
  var test = document.getElementsByName(modal);
  var test2 = test[i].querySelectorAll('[name=' + modal + '-flex-div]');
  console.log(test2);
  test2.forEach(function (item) {
    // console.log(item);
    const isChecked = item.querySelectorAll('input')[0];
    if (isChecked.checked) {
      // console.log(isChecked.checked + isChecked.value);
      // console.log(item);
      item.setAttribute('class', 'flex-div-clicked');
    } else {
      // console.log(isChecked.checked + isChecked.value);
      item.setAttribute('class', 'flex-div-btn');
    }
  })
}


function Extra_move(data) {
  // console.log(document.getElementsByClassName('column'));
  var move_accept_btn = document.getElementById('move-accept-btn');
  move_accept_btn.setAttribute('value', [data, 'normal']);
  // console.log('accept btn value: ' + move_accept_btn.value);
  var clicked_location = data;
  // console.log('clicked: ' + clicked_location);
  const current_location = document.getElementById('cl').value;
  // console.log('origin: ' + current_location);
  extra_move_conn_list = Object.keys(rawData_Locations[data].conn);
  // console.log('move normal');

  var ship_move_list = [];
  var train_move_list = [];
  var uncharted_move_list = [];
  extra_move_conn_list.forEach(conn_newList);

  function conn_newList(item, index) {
    if (item != current_location) {
      var type = rawData_Locations[clicked_location].conn[item];
      if (type == 'ship') {
        ship_move_list.push(item);
      } else if (type == 'train') {
        train_move_list.push(item);
      } else {
        uncharted_move_list.push(item);
      }
    }
  }
  var adder = [];
  adder.push(ship_move_list);
  adder.push(train_move_list);
  adder2 = ['ship', 'train'];

  reset_radios('move-ship-radio');
  reset_radios('move-train-radio');

  ship_move_list.forEach(function (item) {
    let move_ship_radio = document.createElement('input');
    move_ship_radio.setAttribute('onclick', 'Extra_Move_Accept_btn(this, "ship")');
    radio_builder(item, 'ship', move_ship_radio)
  });
  train_move_list.forEach(function (item) {
    let move_train_radio = document.createElement('input');
    move_train_radio.setAttribute('onclick', 'Extra_Move_Accept_btn(this, "train")');
    radio_builder(item, 'train', move_train_radio)
  });

  function radio_builder(item, ticket, move_radio) {
    console.log('item: ' + item);
    name = rawData_Locations[item].name;
    move_radio_div = document.getElementById('move-' + ticket + '-radio');
    move_radio.setAttribute('type', 'radio');
    move_radio.setAttribute('name', 'move_extra_radio');
    move_radio.setAttribute('value', item);
    move_radio_label = document.createElement('span');
    move_radio_label.innerHTML = name;
    const radio_wraper = document.createElement('label');
    radio_wraper.appendChild(move_radio);
    radio_wraper.appendChild(move_radio_label);
    newRow_div = document.createElement('div');
    newRow_div.setAttribute('class', 'flex-div-btn');
    newRow_div.setAttribute('name', 'move-flex-div');
    move_radio_div.appendChild(newRow_div);
    newRow_div.appendChild(radio_wraper);
  }
  styling_modal(0, 'move');
}


function Action(data) {
  newData[data.player].actions[data.sel_option] = true;
  newData[data.player].activated = true;
  if (data.sel_action == 'focus' ||
    data.sel_action == 'ship' ||
    data.sel_action == 'train' ||
    data.sel_action == 'resource') {
    Action_Tokens_modificator(data);
  }
  if (data.sel_action == 'rest') {
    Action_rest_modificator(data);
    console.log('xxxxx');
  }
  if (data.sel_action == 'move') {
    Action_move(data);
  }
}