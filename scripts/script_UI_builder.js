// import * as myModule from 'data.js';

// import {players_RAW} from 'data';
// import * as name from 'players_RAW';

// import {dropdown_selection} from './script_drop_sel.js';


function UI_builder(players) {



  //  var nd_tbl = document.getElementById("main_table");
  var action_list = ['', 'move', 'rest', 'focus', 'trade', 'resource', 'action', 'acquire', 'delayed', 'train', 'ship'];
  var skills_list = ['lore', 'inf', 'obs', 'str', 'will'];
  var tokens_list = rawData.tokens;

  //  var rows = nd_tbl.rows.length;
  //  for (i = 1; i < rows; i++) {
  //    nd_tbl.deleteRow(1);
  //  }

  for (var row = 0; row < players.value; row++) {
    // console.log(players.value);
    //    var nd_tr = document.createElement("tr");
    //    nd_tbl.appendChild(nd_tr);

    char_sheet_builder()

    //characters dropdown builder
    var xx = document.getElementById('char_name' + row);
    xx.appendChild(Chars_builder());
  }


  function Actions_builder(n) {
    var nd_div = document.createElement('div');
    nd_div.setAttribute('class', 'action_drop_div');

    var nd_sel = document.createElement('select');
    nd_sel.setAttribute('id', 'player' + (row + 1));
    nd_sel.setAttribute('class', 'action_drop');
    nd_sel.setAttribute('onchange', 'dropdown_selection(this)');

    for (var i = 0; i < action_list.length; i++) {
      var nd_ele = document.createElement('option');
      nd_ele.setAttribute('class', 'action_drop_element');

      if (i === 0) {
        nd_ele.innerHTML = 'select action ' + n;
        nd_ele.setAttribute('value', 'start');
      } else {
        nd_ele.innerHTML = action_list[i];
        nd_ele.setAttribute('value', action_list[i]);
      }

      nd_sel.appendChild(nd_ele);
    }

    nd_div.appendChild(nd_sel);
    return nd_div;
  }


  function Chars_builder() {


    var char_list = Object.keys(rawData.playersData);
    // console.log(char_list);


    var nd_div = document.createElement('div');
    nd_div.setAttribute('class', 'char_drop_div');

    var nd_sel = document.createElement('select');
    nd_sel.setAttribute('id', 'player' + (row + 1));
    nd_sel.setAttribute('class', 'char_drop');
    nd_sel.setAttribute('onchange', 'char_builder(this)'); //for debugging
    // nd_sel.setAttribute('onfocus', 'dropdown_selection(this)'); //for debugging

    for (var i = 0; i < (char_list.length) + 1; i++) {
      var nd_ele = document.createElement('option');
      nd_ele.setAttribute('value', String(i));
      nd_ele.setAttribute('class', 'char_drop_element');

      if (i === 0) {
        var nd_ele_tx = document.createTextNode('Select Character');
        nd_ele.setAttribute('value', 'start');
      } else {
        var nd_ele_tx = document.createTextNode(char_list[i - 1]);
        nd_ele.setAttribute('value', char_list[i - 1]);
      }

      nd_ele.appendChild(nd_ele_tx);
      nd_sel.appendChild(nd_ele);
      // nd_sel.selectedIndex = 1; // opcion temporal solo para debugging
    }

    nd_div.appendChild(nd_sel);

    return nd_div;
  }


  function char_sheet_builder() {

    var newChar = document.getElementById('p' + (row + 1));

    //main char sheet builder
    var char_sheet_div = document.createElement('div');
    newChar.appendChild(char_sheet_div);
    char_sheet_div.setAttribute('class', 'chars_sheet');
    char_sheet_div.setAttribute('id', 'char_sheet' + (row + 1));

    //player number builder
    var player_div = document.createElement('div');
    player_div.setAttribute('id', 'player' + (row + 1));
    player_div.setAttribute('class', 'player');
    player_div.innerHTML = 'player' + (row + 1)
    char_sheet_div.appendChild(player_div);

    var char_name_div = document.createElement('div');
    char_name_div.setAttribute('id', 'char_name' + (row));
    char_sheet_div.appendChild(char_name_div);


    //abilities builder
    var abilities_div = document.createElement('div');
    abilities_div.setAttribute('id', 'abilities');
    var abilities_ul = document.createElement('ul');
    var abilities_il1 = document.createElement('li');
    var abilities_il2 = document.createElement('li');
    abilities_ul.appendChild(abilities_il1);
    abilities_ul.appendChild(abilities_il2);
    abilities_div.appendChild(abilities_ul);
    char_sheet_div.appendChild(abilities_div);

    //attributes builder
    var att_div = document.createElement('div');
    att_div.setAttribute('id', 'attributes');
    var att_table = document.createElement('table');
    att_div.appendChild(att_table);
    var att_tr = document.createElement('tr');
    att_tr.setAttribute('id', 'attributes-header');
    var att_tr2 = document.createElement('tr');
    att_tr2.setAttribute('id', 'attributes-numbers');
    att_table.appendChild(att_tr);
    att_table.appendChild(att_tr2);

    //health max
    var att_1_td = document.createElement('td');
    att_tr.appendChild(att_1_td);
    att_1_td.innerHTML = 'Max. Health: ';
    var att_2_span = document.createElement('span');
    att_2_span.setAttribute('id', 'max-health');
    att_2_span.innerHTML = 0;
    att_1_td.appendChild(att_2_span);

    //empty space
    var empty1 = document.createElement('td');
    att_tr.appendChild(empty1);

    //sanity max
    var att_2_td = document.createElement('td');
    att_tr.appendChild(att_2_td);
    att_2_td.innerHTML = 'Max. Sanity: ';
    var att_4_span = document.createElement('span');
    att_4_span.setAttribute('id', 'max-sanity');
    att_4_span.innerHTML = 0
    att_2_td.appendChild(att_4_span);

    //health
    var att_health_td = document.createElement('td');
    att_health_td.setAttribute('id', 'health-td');
    var att_health_plus = document.createElement('button');
    att_health_plus.setAttribute('id', 'player' + (row + 1));
    att_health_plus.setAttribute('class', 'health_drop');
    att_health_plus.setAttribute('value', '+');
    att_health_plus.setAttribute('onclick', 'dropdown_selection(this)');
    att_health_plus.innerHTML = '+'

    //health plus
    var att_health_minus = document.createElement('button');
    att_health_minus.setAttribute('id', 'player' + (row + 1));
    att_health_minus.setAttribute('class', 'health_drop');
    att_health_minus.setAttribute('value', '-');
    att_health_minus.setAttribute('onclick', 'dropdown_selection(this)');
    att_health_minus.innerHTML = '-'

    //health minus
    var att_health_number = document.createElement('span');
    att_health_number.setAttribute('id', 'health');
    att_health_number.innerHTML = 0;
    att_health_td.appendChild(att_health_minus);
    att_health_td.appendChild(att_health_number);
    att_health_td.appendChild(att_health_plus);

    att_tr2.appendChild(att_health_td);

    //empty space
    var empty = document.createElement('td');
    empty.setAttribute('id', 'empty');
    att_tr2.appendChild(empty);

    //sanity
    var att_sanity_td = document.createElement('td');
    att_sanity_td.setAttribute('id', 'sanity-td');

    var att_sanity_plus = document.createElement('button');
    att_sanity_plus.setAttribute('id', 'player' + (row + 1));
    att_sanity_plus.setAttribute('class', 'sanity_drop');
    att_sanity_plus.setAttribute('value', '+');
    att_sanity_plus.setAttribute('onclick', 'dropdown_selection(this)');
    att_sanity_plus.innerHTML = '+'

    var att_sanity_minus = document.createElement('button');
    att_sanity_minus.setAttribute('id', 'player' + (row + 1));
    att_sanity_minus.setAttribute('class', 'sanity_drop');
    att_sanity_minus.setAttribute('value', '-');
    att_sanity_minus.setAttribute('onclick', 'dropdown_selection(this)');
    att_sanity_minus.innerHTML = '-'

    var att_sanity_number = document.createElement('span');
    att_sanity_number.setAttribute('id', 'sanity');
    att_sanity_number.innerHTML = 0;

    att_sanity_td.appendChild(att_sanity_minus);
    att_sanity_td.appendChild(att_sanity_number);
    att_sanity_td.appendChild(att_sanity_plus);

    att_tr2.appendChild(att_sanity_td);
    char_sheet_div.appendChild(att_div);

    //skills
    var skills_div = document.createElement('div');
    skills_div.setAttribute('id', 'skills');
    var skills_table = document.createElement('table');
    skills_div.appendChild(skills_table);
    var skills_tr1 = document.createElement('tr');
    skills_tr1.setAttribute('id', 'skills-header');
    var skills_tr2 = document.createElement('tr');
    var skills_tr3 = document.createElement('tr');
    skills_tr3.setAttribute('id', 'skills-number');
    skills_table.appendChild(skills_tr1);
    skills_table.appendChild(skills_tr2);
    skills_table.appendChild(skills_tr3);

    skills_list.forEach(skills_fn);

    function skills_fn(item, index) {
      //skills header
      var skills_header_td = document.createElement('td');
      skills_header_td.setAttribute('id', item + '-bg');
      skills_header_td.innerHTML = item;
      skills_tr1.appendChild(skills_header_td);

      //skills max numbers
      var skills_top = document.createElement('td');
      skills_top.setAttribute('id', 'max-' + item);
      skills_top.innerHTML = 0;
      skills_tr2.appendChild(skills_top);

      //skills number
      var skills_td = document.createElement('td');
      var skills_minus_btn = document.createElement('button');
      skills_minus_btn.innerHTML = '-';
      skills_minus_btn.setAttribute('class', 'skills_drop');
      skills_minus_btn.setAttribute('id', 'player' + (row + 1));
      skills_minus_btn.setAttribute('value', '-' + item);
      skills_minus_btn.setAttribute('onclick', 'dropdown_selection(this)');

      var skills_number = document.createElement('span');
      skills_number.innerHTML = 0;
      skills_number.setAttribute('class', 'skills-number');
      skills_number.setAttribute('id', item + '_number');

      var skills_plus_btn = document.createElement('button');
      skills_plus_btn.innerHTML = '+';
      skills_plus_btn.setAttribute('class', 'skills_drop');
      skills_plus_btn.setAttribute('id', 'player' + (row + 1));
      skills_plus_btn.setAttribute('value', '+' + item);
      skills_plus_btn.setAttribute('onclick', 'dropdown_selection(this)');

      skills_td.appendChild(skills_minus_btn);
      skills_td.appendChild(skills_number);
      skills_td.appendChild(skills_plus_btn);

      skills_tr3.appendChild(skills_td);
    }
    char_sheet_div.appendChild(skills_div);

    //tokens builder
    var tokens_div = document.createElement('div');
    tokens_div.setAttribute('id', 'tokens');
    char_sheet_div.appendChild(tokens_div);
    var tokens_table = document.createElement('table');
    tokens_div.appendChild(tokens_table);
    var tokens_tr1 = document.createElement('tr');
    tokens_tr1.setAttribute('id', 'tokens-header');
    var tokens_tr2 = document.createElement('tr');
    tokens_tr2.setAttribute('id', 'tokens-number');
    tokens_table.appendChild(tokens_tr1);
    tokens_table.appendChild(tokens_tr2);


    //tokens
    tokens_list.forEach(tokens_builder);

    function tokens_builder(item, index) {
      //tokens header
      var tokens_header_td = document.createElement('td');
      tokens_header_td.innerHTML = item;
      tokens_tr1.appendChild(tokens_header_td);

      //tokens number
      // var tokens_number_td = document.createElement('td');
      // tokens_number_td.setAttribute('id', item);
      // tokens_number_td.innerHTML = 0;




      var tokens_number_td = document.createElement('td');

      var tokens_minus_btn = document.createElement('button');
      tokens_minus_btn.innerHTML = '-';
      tokens_minus_btn.setAttribute('class', 'tokens_drop');
      tokens_minus_btn.setAttribute('id', 'player' + (row + 1));
      tokens_minus_btn.setAttribute('value', '-' + item);
      tokens_minus_btn.setAttribute('onclick', 'dropdown_selection(this)');

      var tokens_number = document.createElement('span');
      tokens_number.innerHTML = 0;
      tokens_number.setAttribute('class', 'tokens-number');
      tokens_number.setAttribute('id', item + '_number');

      var tokens_plus_btn = document.createElement('button');
      tokens_plus_btn.innerHTML = '+';
      tokens_plus_btn.setAttribute('class', 'tokens_drop');
      tokens_plus_btn.setAttribute('id', 'player' + (row + 1));
      tokens_plus_btn.setAttribute('value', '+' + item);
      tokens_plus_btn.setAttribute('onclick', 'dropdown_selection(this)');

      tokens_number_td.appendChild(tokens_minus_btn);
      tokens_number_td.appendChild(tokens_number);
      tokens_number_td.appendChild(tokens_plus_btn);

      tokens_tr2.appendChild(tokens_number_td);





    }


    //locations
    var location_div = document.createElement('div');
    location_div.setAttribute('id', 'location');
    location_div.innerHTML = 'current location';
    char_sheet_div.appendChild(location_div);

    //actions
    var action_div = document.createElement('div');
    action_div.setAttribute('id', 'actions_dropdown');
    var action_table = document.createElement('table');
    action_div.appendChild(action_table);
    var action_tr = document.createElement('tr');
    action_table.appendChild(action_tr);

    for (var a = 0; a < 3; a++) {
      var action_td = document.createElement('td');
      action_td.setAttribute('id', 'action' + (a + 1));
      action_td.appendChild(Actions_builder(a + 1));
      action_tr.appendChild(action_td);
    }
    char_sheet_div.appendChild(action_div);



  }

}
