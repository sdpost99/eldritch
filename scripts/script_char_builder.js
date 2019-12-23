class DataFactory {
    constructor(args) {
        this.value = args.value;
        this.option = args.getAttribute('option');
        this.player = args.getAttribute('player');
        // var _Sel = {
        //     player: data.id,
        //     option: data.value,
        // }
        // att_builder(_Sel); //  attributes builder
        // char_sheet(_Sel); //  char sheet builder
    }
}


function char_sheet() {

    let data = DataFactory();

    let player = data.player;
    let option = data.option;

    var player_sheet = 'p' + player.slice(6);
    var player_att = rawData.playersData[option];
    var player_skills_list = Object.keys(rawData.playersData[option].skills);
    var tokens_list = rawData.tokens;
    var sheet = document.getElementById(player_sheet);

    //abilities
    var abilities_li = sheet.querySelectorAll('li');
    for (var i = 0; i < 2; i++) {
        abilities_li[i].innerHTML = player_att.abilities[i];
    }

    //health and sanity TOP
    var health_top_span = sheet.querySelector('#max-health');
    var sanity_top_span = sheet.querySelector('#max-sanity');
    var raw_health_top = player_att.health;
    var raw_sanity_top = player_att.sanity;
    health_top_span.innerHTML = raw_health_top;
    sanity_top_span.innerHTML = raw_sanity_top;

    //healt and sanity
    var health_td = sheet.querySelector('#health');
    var sanity_td = sheet.querySelector('#sanity');
    var health = newData[player].attributes.health;
    var sanity = newData[player].attributes.sanity;
    health_td.innerHTML = health;
    sanity_td.innerHTML = sanity;

    //skills builder
    player_skills_list.forEach(skills_builder);

    function skills_builder(item, index) {
        //top
        var skill_top_td = sheet.querySelector('#max-' + item);
        var skill_raw_top = player_att.skills[item];
        skill_top_td.innerHTML = skill_raw_top;

        //number
        var skill_span = sheet.querySelector('#' + item + '_number');
        var skill = newData[player].attributes.skills[item];
        skill_span.innerHTML = skill;
    }

    //tokens builder
    tokens_list.forEach(tokens_builder);

    function tokens_builder(item, index) {
        //number
        var token_span = sheet.querySelector('#' + item + '_number');
        var token = newData[player].tokens[item];
        token_span.innerHTML = token;
    }

    //location
    const current_location = newData[player].current_location
    const location_div = sheet.querySelector('#location');
    location_div.innerHTML = rawData_Locations[current_location].name;
}


//crea diccionario de cada jugador con personaje seleccionado
function NewData_builder(args) {

    var data = new DataFactory(args);
    let player = data.player;
    // let option = data.option;
    let value = data.value;

    newData[player] = {};
    newData[player].char = value;
    
    var player_att = rawData.playersData[value];
    
    newData[player].attributes = {};
    newData[player].attributes.health = player_att.health;
    newData[player].attributes.sanity = player_att.sanity;

    newData[player].abilities = player_att.abilities;
    newData[player].current_location = player_att.original_location;

    newData[player].skills = {};
    newData[player].skills.lore = player_att.skills.lore;
    newData[player].skills.inf = player_att.skills.inf;
    newData[player].skills.obs = player_att.skills.obs;
    newData[player].skills.str = player_att.skills.str;
    newData[player].skills.will = player_att.skills.will;

    newData[player].tokens = {};
    newData[player].tokens.focus = player_att.tokens.focus;
    newData[player].tokens.resource = player_att.tokens.resource;
    newData[player].tokens.ship = player_att.tokens.ship;
    newData[player].tokens.train = player_att.tokens.train;
    newData[player].tokens.clue = player_att.tokens.clue;
    newData[player].tokens.eldritch = player_att.tokens.eldritch;

    newData[player].cards = {};
    newData[player].cards.artifacts = player_att.artifacts;
    newData[player].cards.assets = player_att.assets;
    newData[player].cards.conditions = player_att.conditions;
    newData[player].cards.unique_assets = player_att.unique_assets;
    newData[player].cards.spells = player_att.spells;
    newData[player].cards.personal_story = player_att.personal_story;

    console.log(newData);

}