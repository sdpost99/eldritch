
function AddCard(player, data) {
  var cardType = Object.keys(data)[0]
  var item = data[cardType][0];
  var currentItems = newData[player].cards[cardType]
  var result = currentItems.includes(item);

  if (!result) {
      console.log('agregando new item', item);
      currentItems.push(item);
      Printer_cards(player, data)
  } else {
      console.log(item + ' ya existe, no ha sido agregado')
  }
}


function RemoveCard(player, data) {
  var cardType = Object.keys(data)[0]
  var item = data[cardType][0];
  var currentItems = newData[player].cards[cardType]
  var result = currentItems.includes(item);
  if (result) {
      var newList = currentItems.filter(function (value, index, arr) {
          if (value !== item) {
              return value
          }
      });
      newData[player].cards[cardType] = newList;
      let player_sheet = 'p' + player.slice(6);
      let sheet = document.getElementById(player_sheet);
      let tab_container = sheet.querySelector('.tab-container');
      let item_container = tab_container.querySelector('#' + cardType);
      let item_container2 = item_container.querySelector('.items-container2');
      let item_div = item_container2.querySelector('#' + item);
      item_container2.removeChild(item_div)

      console.log('borrando item: ', item)
  } else {
      console.log('item no existe, no item ha sido borrado')
  }
}

//funcion para desplegar tipos de cartas segun seleccion
function showCards(args) {
    let player = args.getAttribute('player');
    let cardType = args.getAttribute('cardType');
    var player_sheet = 'p' + player.slice(6);
    var sheet = document.getElementById(player_sheet);

    var i, tabcontent;
    tabcontent = sheet.querySelectorAll('.tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    sheet.querySelector('#' + cardType).style.display = "block";
  }

