function Move(args) {

  var data = new args_Factory(args);
  let current_location = newData[data.player].current_location;
  let modal = document.querySelector(".modal-blocker");
  let modal_move = document.querySelector("#modal-move");

  modal.style.visibility = "visible";
  modal_move.style.visibility = "visible";

  reset_radios('move-normal-radio');
  reset_radios('move-ship-radio');
  reset_radios('move-train-radio');

  var current_location_span = document.getElementById('cl');
  current_location_span.innerHTML = rawData_Locations[current_location].name;
  current_location_span.value = current_location;
  current_location_conn_list = Object.keys(rawData_Locations[current_location].conn);
  var move_normal_radio_div = document.getElementById('move-normal-radio');

  Radio_builder(current_location_conn_list, move_normal_radio_div, 'normal', 'normal', args);
  var move_accept_btn = document.getElementById('move-accept-btn');
  move_accept_btn.setAttribute('value', current_location);
  var move_cancel_btn = document.getElementById('move-cancel-btn');

  move_accept_btn.onclick = function () {
    Move_accept(this);
  }

  move_cancel_btn.onclick = function () {
    modal.style.visibility = "hidden";
    modal_move.style.visibility = "hidden";
  }

  function Move_accept(btn) {

    const ticket_type = btn.getAttribute('tickettype');
    var newLocation = btn.value;
    let ticket_token_amnt = newData[data.player].tokens[ticket_type];

    if (ticket_type == 'ship') {
      if (ticket_token_amnt == 0) {
        alert('ship tokens 0');
      } else {
        newData[data.player].tokens[ticket_type] -= 1;
        Moving(newLocation, 'ship', data);
      }
    } else if (ticket_type == 'train') {
      if (ticket_token_amnt == 0) {
        alert('train token 0');
      } else {
        newData[data.player].tokens[ticket_type] -= 1;
        Moving(newLocation, 'train', data);
      }
    } else {
      Moving(newLocation, 'normal', data);
    }
  }

  function Moving(newLocation, type) {
    newData[data.player].current_location = newLocation;

    if (type != 'normal') {
      var new_ticket_token = newData[data.player].tokens[type];
      Printer(data.player, type, new_ticket_token);
    }
    Printer(data.player, 'location', rawData_Locations[newLocation].name);
    modal.style.visibility = "hidden";
    modal_move.style.visibility = "hidden";

  }

  console.log(newData[data.player].attributes);
}