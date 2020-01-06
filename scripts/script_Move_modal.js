function Radio_builder(list, div, radioType, ticketType) {

    list.forEach(function (item) {
        var name = rawData_Locations[item].name;
        var move_radio = document.createElement('input');
        move_radio.setAttribute('type', 'radio');
        move_radio.setAttribute('name', radioType);
        move_radio.setAttribute('value', item);
        move_radio.setAttribute('radiotype', radioType);
        move_radio.setAttribute('tickettype', ticketType);
        move_radio.setAttribute('onclick', 'Radio_clicked(this)');
        var move_radio_label = document.createElement('span');
        move_radio_label.innerHTML = name;
        const radio_wraper = document.createElement('label');
        radio_wraper.appendChild(move_radio);
        radio_wraper.appendChild(move_radio_label);

        const newRow_div = document.createElement('div');
        newRow_div.setAttribute('class', 'flex-div-btn');
        newRow_div.setAttribute('name', 'move-flex-div');
        div.appendChild(newRow_div);
        newRow_div.appendChild(radio_wraper);
    });
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

function Radio_clicked(data) {

    if (data.getAttribute('radioType') == 'normal') {
        Extra_move(data)
    }
    var move_accept_btn = document.getElementById('move-accept-btn');
    move_accept_btn.setAttribute('value', data.value);
    move_accept_btn.setAttribute('radiotype', data.getAttribute('radiotype'));
    move_accept_btn.setAttribute('tickettype', data.getAttribute('tickettype'));
}

function Extra_move(data) {
    var clicked_location = data.value;
    const current_location = document.getElementById('cl').value;
    extra_move_conn_list = Object.keys(rawData_Locations[data.value].conn);

    var ship_move_list = [];
    var train_move_list = [];
    var uncharted_move_list = [];
    extra_move_conn_list.forEach(function (item) {
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
    });

    var adder = [];
    adder.push(ship_move_list);
    adder.push(train_move_list);
    adder2 = ['ship', 'train'];
    let move_ship_radio_div = document.getElementById('move-ship-radio');
    let move_train_radio_div = document.getElementById('move-train-radio');

    reset_radios('move-ship-radio');
    reset_radios('move-train-radio');

    Radio_builder(train_move_list, move_train_radio_div, 'extra', 'train')
    Radio_builder(ship_move_list, move_ship_radio_div, 'extra', 'ship')

    // styling_modal(0, 'move');
}


function styling_modal(i, modal) {
    var test = document.getElementsByName(modal);
    var test2 = test[i].querySelectorAll('[name=' + modal + '-flex-div]');
    test2.forEach(function (item) {
        const isChecked = item.querySelectorAll('input')[0];
        if (isChecked.checked) {
            item.setAttribute('class', 'flex-div-clicked');
        } else {
            item.setAttribute('class', 'flex-div-btn');
        }
    })
}