function Printer(player, objectID, value) {
    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);
    let sel_opt_object = sheet.querySelector('#' + objectID);
    sel_opt_object.innerHTML = value;
}



function AdquireCards(player, data) {
    // console.log("Output: AdquireCards -> data", data)

    // let cardTypes = rawCardsData.cardTypes;
    var result_adder = {}
    var result = {}

    for (let [cardType] of Object.entries(data)) {
        if (data[cardType].length > 0) {
            result_adder[cardType] = data[cardType];
        }
    }


    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);

    for (let [key, value] of Object.entries(result_adder)) {
        // console.log(key, value);
        let sel_opt_object = sheet.querySelector('#' + key);
        // console.log("Output: functionPrinter_cards -> sel_opt_object", sel_opt_object)
        let item_container = sel_opt_object.querySelector('.items-container2');
        var temp = item_container.childElementCount;
        // console.log("Output: functionPrinter_cards -> temp", temp);
        // console.log("Output: functionPrinter_cards -> item_container", item_container);

        if (temp == 0) {
            result[key] = value;
        }
    }

    // console.log(result)
    return result;
}

function Printer_cards(player, objectID, value) {
    // console.log("Output: functionPrinter_cards -> player", player)
    // console.log("Output: functionPrinter_cards -> objectID", objectID)
    // console.log("Output: functionPrinter_cards -> value", value)
    let playerCards = AdquireCards(player, value)
    console.log("Output: functionPrinter_cards -> playerCards", playerCards)


    // let cardTypes = Object.keys(value);
    // let cardTypes = Object.keys(playerCards);
    // console.log("Output: functionPrinter_cards -> cardTypes", cardTypes)






    let adder = ['name', 'tags', 'effect_text', 'action_text', 'skill_bonus_text', 'reroll_text', 'reckoning'];
    var results = [];

    for (let [key, value] of Object.entries(playerCards)) {

        let item_value = value;
        item_value.forEach(element => {

            // var result_text = [];
            // adder.forEach(card => {
            //     let adder_temp = rawCardsData[cardType][element][card];
            //     if (adder_temp != null) {
            //         result_text.push(adder_temp);
            //     }
            // })
            // results.push(result_text);

            var player_sheet = 'p' + player.slice(6);
            var sheet = document.getElementById(player_sheet);
            let sel_opt_object = sheet.querySelector('#' + key);
            let item_container = sel_opt_object.querySelector('.items-container2');
            let card_item = document.createElement('div');
            card_item.setAttribute('class', 'item');
            card_item.setAttribute('id', 'temp-item-name')
            let card_item_header = document.createElement('h4');
            card_item_header.innerHTML = 'header'
            let card_item_text = document.createElement('div');
            card_item_text.innerHTML = 'text'
            card_item.appendChild(card_item_header);
            card_item.appendChild(card_item_text);
            item_container.appendChild(card_item);
        });
    }


    // cardTypes.forEach(cardType => {
    //     let item_value = newData[player].cards[cardType];
    //     if (item_value.length > 0) {
    //         // console.log(cardType);
    //         // console.log("Output: functionPrinter_cards -> item_value", item_value)

    //         item_value.forEach(element => {
    //             // console.log("Output: functionPrinter_cards -> element", element);

    //             var result_text = [];

    //             adder.forEach(card => {
    //                 let adder_temp = rawCardsData[cardType][element][card];
    //                 if (adder_temp != null) {
    //                     result_text.push(adder_temp);
    //                 }
    //             })
    //             results.push(result_text);
    //             var player_sheet = 'p' + player.slice(6);
    //             var sheet = document.getElementById(player_sheet);
    //             let sel_opt_object = sheet.querySelector('#' + cardType);
    //             let item_container = sel_opt_object.querySelector('.items-container2');
    //             // console.log("Output: functionPrinter_cards -> item_container", item_container);


    //             let card_item = document.createElement('div');
    //             card_item.setAttribute('class', 'item');
    //             card_item.setAttribute('id', 'temp-item-name')
    //             let card_item_header = document.createElement('h4');
    //             // card_item_header.setAttribute('id', '_header');
    //             card_item_header.innerHTML = 'header'
    //             let card_item_text = document.createElement('div');
    //             // card_item_text.setAttribute('id', 'text');
    //             card_item_text.innerHTML = 'text'

    //             card_item.appendChild(card_item_header);
    //             card_item.appendChild(card_item_text);
    //             item_container.appendChild(card_item);
    //         });
    //         // console.log('')
    //     }
    // })


    // console.log("Output: Cards -> result_text", results);




    // var player_sheet = 'p' + player.slice(6);
    // var sheet = document.getElementById(player_sheet);
    // let sel_opt_object = sheet.querySelector('#' + objetcID);
    // sel_opt_object.innerHTML = value;
}