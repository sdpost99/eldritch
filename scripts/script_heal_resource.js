function heal_resource(args) {

    var data = new args_Factory(args);
    let player = data.player;
    let value = data.value;
    let action = data.action;
    let current_res = newData[player].tokens.resource;


    let sel_att_value = newData[player].actions.res_health[value];
    // let sel_att_value_top = newData[player].attributes[value + '_max'];


    // var player_sheet = 'p' + player.slice(6);
    // var sheet = document.getElementById(player_sheet);
    // let sel_opt_value = sheet.querySelector('#' + value).innerHTML;

    if (action == 'increase') {
        if (sel_att_value < sel_att_value_top) {
          newData[player].attributes[value] = sel_att_value + 1;
        }
      } else {
        if (sel_att_value > 0) {
          newData[player].attributes[value] = sel_att_value - 1;
        }
      }

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
}


function spend_rest_resource(args){
    var data = new args_Factory(args);
    let player = data.player;
    console.log("Output: functionspend_heal_resource -> player", player)
    let value = data.value;
    console.log("Output: functionspend_heal_resource -> value", value)
    let action = data.action;
    console.log("Output: functionspend_heal_resource -> action", action)
    // let current_res = newData[player].tokens.resource;
    // console.log("Output: functionspend_heal_resource -> current_res", current_res)

    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);
    let current_res_health = sheet.querySelector('#health_resource').innerHTML;
    console.log("Output: functionspend_heal_resource -> current_res_health", current_res_health)
    let current_res_sanity = sheet.querySelector('#sanity_resource').innerHTML;
    console.log("Output: functionspend_heal_resource -> current_res_sanity", current_res_sanity)

    if()
    
    args.value = 
    heal(args);

}