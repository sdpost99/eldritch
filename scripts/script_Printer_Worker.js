function Printer(player, objectID, value) {
    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);
    let sel_opt_object = sheet.querySelector('#' + objectID);
    sel_opt_object.innerHTML = value;
}


function Printer_cards(player, objectID, value) {
    // console.log("Output: functionPrinter_cards -> player", player)
    // console.log("Output: functionPrinter_cards -> objectID", objectID)
    // console.log("Output: functionPrinter_cards -> value", value)


    let cardTypes = Object.keys(value);
    // console.log("Output: functionPrinter_cards -> cardTypes", cardTypes)

    let adder = ['name', 'tags', 'effect_text', 'action_text', 'skill_bonus_text', 'reroll_text', 'reckoning'];
    var results = [];

    cardTypes.forEach(cardType => {
        let item_value = newData[player].cards[cardType];
        if (item_value.length > 0) {
            // console.log("Output: functionPrinter_cards -> item_value", item_value)

            item_value.forEach(element => {
                var result_text = [];

                adder.forEach(card => {
                    let adder_temp = rawCardsData[cardType][element][card];
                    if (adder_temp != null) {
                        // console.log("Output: Cards -> adder_temp", adder_temp)
                        result_text.push(adder_temp);
                    }
                })
                // console.log('');
                results.push(result_text);
                console.log(cardType);
                // var temp = document.querySelectorAll()
                var player_sheet = 'p' + player.slice(6);
                var sheet = document.getElementById(player_sheet);
                let sel_opt_object = sheet.querySelector('#' + cardType);
                // console.log("Output: functionPrinter_cards -> sel_opt_object", sel_opt_object);
                let item_container = sel_opt_object.querySelector('.items-container2');
                console.log("Output: functionPrinter_cards -> item_container", item_container);
    
    
                let card_item = document.createElement('div');
                card_item.setAttribute('class', 'item');
                let card_item_header = document.createElement('h4');
                card_item_header.setAttribute('id', '_header');
                card_item_header.innerHTML = 'header'
                let card_item_text = document.createElement('div');
                card_item_text.setAttribute('id', '_text');
                card_item_text.innerHTML = 'text'
                
                card_item.appendChild(card_item_header);
                card_item.appendChild(card_item_text);
                item_container.appendChild(card_item);
            });
        }
    })


    // console.log("Output: Cards -> result_text", results);

    // var player_sheet = 'p' + player.slice(6);
    // var sheet = document.getElementById(player_sheet);
    // let sel_opt_object = sheet.querySelector('#' + objetcID);
    // sel_opt_object.innerHTML = value;
}