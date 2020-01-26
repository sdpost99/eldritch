
//crea diccionario de cada jugador con personaje seleccionado
function NewData_Factory(args) {

    var data = new args_Factory(args);
    let player = data.player;
    let value = data.value;
    var player_att = rawData.playersData[value];

    newData[player] = {};
    newData[player].char = value;

    newData[player].attributes = {};
    newData[player].attributes.health = player_att.health;
    newData[player].attributes.health_max = player_att.health;
    newData[player].attributes.sanity = player_att.sanity;
    newData[player].attributes.sanity_max = player_att.sanity;

    newData[player].abilities = player_att.abilities;

    newData[player].current_location = player_att.original_location;
    let locationName = rawData_Locations[player_att.original_location].name;

    newData[player].skills = {};
    newData[player].skills.lore = player_att.skills.lore;
    newData[player].skills.lore_max = player_att.skills.lore;
    newData[player].skills.inf = player_att.skills.inf;
    newData[player].skills.inf_max = player_att.skills.inf;
    newData[player].skills.obs = player_att.skills.obs;
    newData[player].skills.obs_max = player_att.skills.obs;
    newData[player].skills.str = player_att.skills.str;
    newData[player].skills.str_max = player_att.skills.str;
    newData[player].skills.will = player_att.skills.will;
    newData[player].skills.will_max = player_att.skills.will;

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

    newData[player].actions = {};
    newData[player].actions.health_resource = 0;
    newData[player].actions.sanity_resource = 0;


    Printer(player, 'health', player_att.health);
    Printer(player, 'max-health', player_att.health);
    Printer(player, 'sanity', player_att.sanity);
    Printer(player, 'max-sanity', player_att.sanity);
    Printer(player, 'ability_01', player_att.abilities[0]);
    Printer(player, 'ability_02', player_att.abilities[1]);
    Printer(player, 'location', locationName);
    Printer(player, 'lore', player_att.skills.lore);
    Printer(player, 'max-lore', player_att.skills.lore);
    Printer(player, 'inf', player_att.skills.inf);
    Printer(player, 'max-inf', player_att.skills.inf);
    Printer(player, 'obs', player_att.skills.obs);
    Printer(player, 'max-obs', player_att.skills.obs);
    Printer(player, 'str', player_att.skills.str);
    Printer(player, 'max-str', player_att.skills.str);
    Printer(player, 'will', player_att.skills.will);
    Printer(player, 'max-will', player_att.skills.will);
    Printer(player, 'focus', player_att.tokens.focus);
    Printer(player, 'resource', player_att.tokens.resource);
    Printer(player, 'ship', player_att.tokens.ship);
    Printer(player, 'train', player_att.tokens.train);
    Printer(player, 'clue', player_att.tokens.clue);
    Printer(player, 'eldritch', player_att.tokens.eldritch);
    Printer_cards(player, 'cards', newData[player].cards);
    // AdquireCards(player, 'cards', newData[player].cards);


}