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
            // console.log(args);
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