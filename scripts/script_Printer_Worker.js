function Printer(player, option, value) {
    console.log("Output: Printer -> value", value)
    console.log("Output: Printer -> option", option)
    console.log("Output: Printer -> player", player)

    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);

    let sel_opt_object = sheet.querySelector('#' + option);
    sel_opt_object.innerHTML = value;

}