function Selector(args) {
    let sel_opt = args.getAttribute('option');

    switch (sel_opt) {
        case 'character':
            NewData_Factory(args);
            break;
        case 'heal':
            heal(args);
            break;
        case 'rest':
            args.setAttribute('value', 'sanity');
            heal(args);
            args.setAttribute('value', 'health');
            heal(args);
            break;
        case 'rest_resource':
            // health_sanity_resource(args);
            // console.log("OUTPUT: args", args);
            heal_resource(args);
            break;
        case 'skills':
            Skills(args);
            break;
        case 'tokens':
            Tokens(args);
            break;
    }
}


class args_Factory {
    constructor(args) {
        this.player = args.getAttribute('player');
        this.option = args.getAttribute('option');
        this.action = args.getAttribute('action');
        this.value = args.value;
    }
}