function Actions(player){
    console.log('actions factory');
    var data = newData[player].available_actions;
    // console.log("Output: Actions -> data", data)
    newAction_list = [];
    
    //move 
    if(data.delayed != true){
        newData[player].available_actions.move = true;
    }
    //rest
    if(data.delayed != true){
        newData[player].available_actions.rest = true;
    }
    //adquire
    if(data.delayed != true){
        let playerLocation = newData[player].current_location;
        let locationType = rawData_Locations[playerLocation].type;
        let locationEnemies = rawData_Locations[playerLocation].content.enemies;
        
        console.log(playerLocation);
        // console.log(rawData_Locations[playerLocation]);
        console.log("Output: Actions -> locationType", locationType)
        console.log("Output: Actions -> locationEnemies", locationEnemies);
        
        if(locationType == 'city'){
            if(locationEnemies.length == 0){
                newData[player].available_actions.adquire = true;
            } else {
                newData[player].available_actions.adquire = false;
            }
        }
    }
    //trade
    if(data.delayed != true){
        newData[player].available_actions.trade = true;
    }
    //component action
    if(data.delayed != true){
        newData[player].available_actions.action = true;
    }
    //local action
    if(data.delayed != true){
        newData[player].available_actions.local_action = true;
    }
    //focus
    if(data.delayed != true){
        newData[player].available_actions.focus = true;
    }
    //gather resources
    if(data.delayed != true){
        newData[player].available_actions.resource = true;
    }
    //train ticket
    if(data.delayed != true){
        newData[player].available_actions.train = true;
    }
    //ship ticket
    if(data.delayed != true){
        newData[player].available_actions.ship = true;
    }
    //delayed
    if(data.delayed != true){
        newData[player].available_actions.delayed = true;
    }
    //detained
    if(data.delayed != true){
        newData[player].available_actions.delayed = true;
    }
    //lost in time and space
    if(data.delayed != true){
        newData[player].available_actions.delayed = true;
    }
}