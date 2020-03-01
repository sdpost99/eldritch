function Actions_show(sheet, action) {
    let toShow = sheet.querySelector('#av-' + action);
    toShow.style.display = 'block';
}

function Actions_hide(sheet, action) {
    let toShow = sheet.querySelector('#av-' + action);
    toShow.style.display = 'none';
}


function Actions(player) {
    
    let player_sheet = 'p' + player.slice(6);
    let sheet = document.getElementById(player_sheet);

    var data = newData[player].available_actions;
    let playerLocation = newData[player].current_location;
    let playerName = newData[player].char;
    let locationEnemies = rawData_Locations[playerLocation].content.enemies;
    let locationPlayers = rawData_Locations[playerLocation].content.players;

    locationPlayers.push(playerName);
    rawData_Locations[playerLocation].content.players = locationPlayers;
    
    console.log("Output: Actions -> playerName", playerName);
    console.log("Output: Actions -> locationPlayers", locationPlayers);

    //move 
    if (data.delayed != true) {
        newData[player].available_actions.move = true;
        Actions_show(sheet, 'Move');
    } else {
        Actions_hide(sheet, 'Move');
    }

    //rest
    if (data.delayed != true) {

        if (locationEnemies.length == 0) {
            newData[player].available_actions.rest = true;
            Actions_show(sheet, 'Rest');
        } else {
            Actions_hide(sheet, 'Rest');
        }
    } else {
        Actions_hide(sheet, 'Rest');
    }

    //adquire
    if (data.delayed != true) {
        let playerLocation = newData[player].current_location;
        let locationType = rawData_Locations[playerLocation].type;
        let locationEnemies = rawData_Locations[playerLocation].content.enemies;

        if (locationType == 'city') {
            if (locationEnemies.length == 0) {
                newData[player].available_actions.adquire = true;
                Actions_show(sheet, 'Adquire')
            } else {
                newData[player].available_actions.adquire = false;
                Actions_hide(sheet, 'Adquire')
            }
        } else {
            Actions_hide(sheet, 'Adquire')
            newData[player].available_actions.adquire = false;
        }
    } else {
        Actions_hide(sheet, 'Adquire')
    }

    //trade
    if (data.delayed != true) {
        newData[player].available_actions.trade = true;
    }

    //component action
    if (data.delayed != true) {
        newData[player].available_actions.action = true;
    }

    //local action
    if (data.delayed != true) {
        newData[player].available_actions.local_action = true;
    }

    //focus
    if (data.delayed != true) {
        newData[player].available_actions.focus = true;
    }

    //gather resources
    if (data.delayed != true) {
        newData[player].available_actions.resource = true;
    }

    //train ticket
    if (data.delayed != true) {
        newData[player].available_actions.train = true;
    }

    //ship ticket
    if (data.delayed != true) {
        newData[player].available_actions.ship = true;
    }

    //delayed
    if (data.delayed != true) {
        newData[player].available_actions.delayed = false;
    }

    //detained
    if (data.delayed != true) {
        newData[player].available_actions.detained = true;
    }

    //lost in time and space
    if (data.delayed != true) {
        newData[player].available_actions.lost = true;
    }
}