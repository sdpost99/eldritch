function heal_resource(args) {

    var data = new args_Factory(args);
    let player = data.player;
    let value = data.value;
    let action = data.action;
    let current_res = newData[player].tokens.resource;

    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);
    let sel_opt_value = sheet.querySelector('#' + value).innerHTML;

    if (action == 'reduce') {
        if (sel_opt_value > 0) {
            sel_opt_value--;
        }
    }
    if (action == 'increase') {
        if (sel_opt_value < current_res) {
            sel_opt_value++;
        }
    }
    Printer(player, value, sel_opt_value);
    console.log(newData[player].attributes);
    // * important: dsdsdsdds
    // ! deprecated
    // ? hshould
    // TODO sdsds sd sdsd s 
    // @param


}