function Printer(player, objetcID, value) {
    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);
    let sel_opt_object = sheet.querySelector('#' + objetcID);
    sel_opt_object.innerHTML = value;
}
