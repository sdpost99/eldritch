function Controller(args) {
    let sel_opt = args.getAttribute('option');

    switch (sel_opt) {
        case 'character':
            NewData_Factory(args);
            break;
        case 'heal':
            Heal(args);
            break;
        case 'rest':
            args.setAttribute('value', 'sanity');
            Heal(args);
            args.setAttribute('value', 'health');
            Heal(args);
            break;
        case 'rest_resource':
            Heal_resource(args);
            break;
        case 'spend_rest_resource':
            Spend_rest_resource(args);
            break;
        case 'skills':
            Skills(args);
            break;
        case 'tokens':
            Tokens(args);
            break;
        case 'move':
            Move(args);
            break;
        case 'cards':
            Cards(args);
    }
}


class args_Factory {
    constructor(object) {
        this.player = object.getAttribute('player');
        this.option = object.getAttribute('option');
        this.action = object.getAttribute('action');
        this.value = object.value;
    }
}