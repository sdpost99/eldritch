function Selector(args) {
    let sel_opt = args.getAttribute('option');

    switch (sel_opt) {
        case 'character':
            NewData_Factory(args);
            break;
        case 'health':
            health_sanity(args);
            break;
        case 'sanity':
            health_sanity(args);
            break;
        case 'rest':
            args.setAttribute('option', 'sanity');
            health_sanity(args);
            args.setAttribute('option', 'health');
            health_sanity(args);
            args.setAttribute('option', 'rest');
            break;
        case 'lore':
            Skills(args);
            break;
        case 'inf':
            Skills(args);
            break;
        case 'obs':
            Skills(args);
            break;
        case 'str':
            Skills(args);
            break;
        case 'will':
            Skills(args);
            break;
        case 'focus':
            Tokens(args);
            break;
        case 'resource':
            Tokens(args);
            break;
        case 'ship':
            Tokens(args);
            break;
        case 'train':
            Tokens(args);
            break;
        case 'clue':
            Tokens(args);
            break;
        case 'eldritch':
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