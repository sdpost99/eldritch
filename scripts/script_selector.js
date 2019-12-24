function Selector(args) {
    let sel_opt = args.getAttribute('option');

    if (sel_opt == 'character') {
        NewData_Factory(args)
    }
}


class args_Factory {
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