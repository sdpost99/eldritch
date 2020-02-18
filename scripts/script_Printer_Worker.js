function Printer(player, objectID, value) {
    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);
    let sel_opt_object = sheet.querySelector('#' + objectID);
    sel_opt_object.innerHTML = value;
}


function Printer_cards(player, value) {
    //este loop filtra el diccionario value con solo keys no vacios
    let current_playerCards = {}
    for (let [cardType] of Object.entries(value)) {
        if (value[cardType].length > 0) {
            current_playerCards[cardType] = value[cardType];
        }
    }

    let adder_text = rawCardsData.cardInfo;
    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);

    for (let [cardType, value] of Object.entries(current_playerCards)) {

        let sel_opt_object = sheet.querySelector('#' + cardType);
        let item_container = sel_opt_object.querySelector('.items-container2');

        let itemList = value;
        var results = {};
        itemList.forEach(item => {

            let card_item = document.createElement('div');
            card_item.setAttribute('class', 'item');
            card_item.setAttribute('id', item)
            let card_item_title = document.createElement('p');
            let card_item_tags = document.createElement('p');

            let card = rawCardsData[cardType][item];

            card_item_title.innerHTML = card.name;
            card_item_title.setAttribute('class', 'item-header');
            card_item_tags.innerHTML = card.tags;
            card_item_tags.setAttribute('class', 'item-tags')

            card_item.appendChild(card_item_title);
            card_item.appendChild(card_item_tags);

            adder_text.forEach(text => {
                adder_temp = card[text];
                if (adder_temp != false) {
                    let cardText_newDiv = document.createElement('p');
                    cardText_newDiv.innerHTML = adder_temp
                    results[text] = adder_temp;
                    card_item.appendChild(cardText_newDiv);
                }
            })
            item_container.appendChild(card_item);
        });
    }
}