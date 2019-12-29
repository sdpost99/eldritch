function UI_builder(players) {

  var action_list = ['', 'move', 'rest', 'focus', 'trade', 'resource', 'action', 'acquire', 'delayed', 'train', 'ship'];
  var skills_list = ['lore', 'inf', 'obs', 'str', 'will'];
  var tokens_list = rawData.tokens;

  for (var row = 0; row < players.value; row++) {
    char_sheet_builder()
    var xx = document.getElementById('char_name' + row);
    xx.appendChild(Char_dropDwn_builder());
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


  function Char_dropDwn_builder() {
    var char_list = Object.keys(rawData.playersData);
    var nd_div = document.createElement('div');
    nd_div.setAttribute('class', 'char_drop_div');

    var nd_sel = document.createElement('select');
    nd_sel.setAttribute('onchange', 'Selector(this)');
    nd_sel.setAttribute('player', 'player' + (row + 1));
    nd_sel.setAttribute('option', 'character');

    for (var i = 0; i < (char_list.length) + 1; i++) {
      var nd_ele = document.createElement('option');
      nd_ele.setAttribute('value', String(i));
      if (i === 0) {
        nd_ele.innerHTML = ('Select Character');
        nd_ele.setAttribute('value', 'start');
      } else {
        nd_ele.innerHTML = (char_list[i - 1]);
        nd_ele.setAttribute('value', char_list[i - 1]);
      }
      nd_sel.appendChild(nd_ele);
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
    abilities_div.setAttribute('class', 'abilities');
    var abilities_ul = document.createElement('ul');
    var ability_01 = document.createElement('li');
    ability_01.setAttribute('id', 'ability_01')
    var ability_02 = document.createElement('li');
    ability_02.setAttribute('id', 'ability_02')
    abilities_ul.appendChild(ability_01);
    abilities_ul.appendChild(ability_02);
    abilities_div.appendChild(abilities_ul);
    char_sheet_div.appendChild(abilities_div);


    //new attributes test
    let att_main_div = document.createElement('div');
    att_main_div.setAttribute('class', 'att-container')
    char_sheet_div.appendChild(att_main_div);

    function Attributes_factory(type) {
      let att_container = document.createElement('div');
      att_container.setAttribute('class', 'att-HnS');

      // max header
      let att_max_container = document.createElement('div');
      att_max_container.setAttribute('class', 'att-max-container');

      let att_max_header = document.createElement('div');
      att_max_header.innerHTML = 'Max ' + (type.charAt(0).toUpperCase() + type.slice(1)) + ':';

      let att_max_number = document.createElement('div');
      att_max_number.setAttribute('id', 'max-' + type)
      att_max_number.innerHTML = '0'

      att_max_container.appendChild(att_max_header)
      att_max_container.appendChild(att_max_number)

      // attribute number
      let att_number_container = document.createElement('div');
      att_number_container.setAttribute('class', 'att-number-container');
      att_number_container.setAttribute('id', 'att-number-' + type);

      let heal_reduce_btn = new Buttons_Factory(type, 'heal', (row + 1), 'reduce', '-').button;
      let heal_increase_btn = new Buttons_Factory(type, 'heal', (row + 1), 'increase', '+').button;

      let att_number_btn = document.createElement('div');
      att_number_btn.setAttribute('id', type);
      att_number_btn.setAttribute('class', 'att-number');
      att_number_btn.innerHTML = 8;

      //appends
      att_number_container.appendChild(heal_reduce_btn);
      att_number_container.appendChild(att_number_btn);
      att_number_container.appendChild(heal_increase_btn);
      att_container.appendChild(att_max_container);
      att_container.appendChild(att_number_container);
      return att_container
    }

    // rest
    let att_rest_container = document.createElement('div');
    att_rest_container.setAttribute('class', 'att-rest-cont');

    //norma rest button
    let att_rest_btn = document.createElement('button');
    att_rest_btn.setAttribute('option', 'rest');
    att_rest_btn.setAttribute('player', 'player' + (row + 1));
    att_rest_btn.setAttribute('action', 'increase');
    att_rest_btn.setAttribute('onclick', 'Selector(this)');
    let att_rest_btn_container = document.createElement('div');
    att_rest_btn_container.setAttribute('class', 'att-rest-btn-cont');
    att_rest_btn_container.appendChild(att_rest_btn);
    att_rest_btn.innerHTML = 'Simple Rest';

    //spend resources labels
    let att_spend_res_label = document.createElement('button');
    att_spend_res_label.setAttribute('value', '');
    att_spend_res_label.setAttribute('option', 'spend_rest_resource');
    att_spend_res_label.setAttribute('player', 'player' + (row + 1));
    att_spend_res_label.setAttribute('action', 'increase');
    att_spend_res_label.setAttribute('onclick', 'Selector(this)');
    att_spend_res_label.innerHTML = 'Rest spending resources';

    let att_spend_res_health_label = document.createElement('label');
    att_spend_res_health_label.innerHTML = 'health';
    let att_spend_res_sanity_label = document.createElement('label');
    att_spend_res_sanity_label.innerHTML = 'sanity';

    //spend resources label containers
    let att_spend_res_label_container = document.createElement('div');
    att_spend_res_label_container.setAttribute('class', 'att-rest-label-cont');
    att_spend_res_label_container.appendChild(att_spend_res_label);

    let att_spend_res_health_label_container = document.createElement('div');
    att_spend_res_health_label_container.appendChild(att_spend_res_health_label);
    att_spend_res_health_label_container.setAttribute('class', 'att-rest-label-health-cont');
    let att_spend_res_sanity_label_container = document.createElement('div');
    att_spend_res_sanity_label_container.setAttribute('class', 'att-rest-label-sanity-cont');
    att_spend_res_sanity_label_container.appendChild(att_spend_res_sanity_label);

    let att_spend_res_type_label_container = document.createElement('div');
    att_spend_res_type_label_container.setAttribute('class', 'att-rest-label-type-cont');
    att_spend_res_type_label_container.appendChild(att_spend_res_health_label_container);
    att_spend_res_type_label_container.appendChild(att_spend_res_sanity_label_container);


    //spend resources buttons
    function Attributes_rest_btn_Factory(type) {

      let rest_spend_reduce_btn = new Buttons_Factory(type + '_resource',
        'rest_resource', (row + 1), 'reduce', '-').button;
      let rest_spend_increase_btn = new Buttons_Factory(type + '_resource',
        'rest_resource', (row + 1), 'increase', '+').button;

      let att_rest_res_health_number_btn = document.createElement('label');
      att_rest_res_health_number_btn.innerHTML = '0';
      att_rest_res_health_number_btn.setAttribute('id', type + '_resource')

      let att_rest_res_health_btn_container = document.createElement('div');
      att_rest_res_health_btn_container.appendChild(rest_spend_reduce_btn);
      att_rest_res_health_btn_container.appendChild(att_rest_res_health_number_btn);
      att_rest_res_health_btn_container.appendChild(rest_spend_increase_btn);

      return att_rest_res_health_btn_container
    }


    //spend resources buttons containers
    let att_rest_res_numbers_container = document.createElement('div');
    att_rest_res_numbers_container.setAttribute('class', 'att-rest-numbers-cont');
    att_rest_res_numbers_container.appendChild(Attributes_rest_btn_Factory('health'))
    att_rest_res_numbers_container.appendChild(Attributes_rest_btn_Factory('sanity'))


    att_rest_container.appendChild(att_rest_btn_container);
    att_rest_container.appendChild(att_spend_res_label_container);
    att_rest_container.appendChild(att_spend_res_type_label_container);
    att_rest_container.appendChild(att_rest_res_numbers_container);

    att_main_div.appendChild(Attributes_factory('health'));
    att_main_div.appendChild(att_rest_container);
    att_main_div.appendChild(Attributes_factory('sanity'));


    //skills
    var skills_div = document.createElement('div');
    skills_div.setAttribute('class', 'skills');
    var skills_table = document.createElement('table');
    skills_div.appendChild(skills_table);
    var skills_tr1 = document.createElement('tr');
    skills_tr1.setAttribute('class', 'skills-header');
    var skills_tr2 = document.createElement('tr');
    var skills_tr3 = document.createElement('tr');
    skills_tr3.setAttribute('class', 'skills-number');
    skills_table.appendChild(skills_tr1);
    skills_table.appendChild(skills_tr2);
    skills_table.appendChild(skills_tr3);

    skills_list.forEach(skills_fn);

    function skills_fn(item) {
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

      var skills_td = document.createElement('td');
      let skills_reduce_btn = new Buttons_Factory(item, 'skills', (row + 1), 'reduce', '-').button;
      let skills_increase_btn = new Buttons_Factory(item, 'skills', (row + 1), 'increase', '+').button;

      //skills number
      var skills_number = document.createElement('span');
      skills_number.innerHTML = 0;
      skills_number.setAttribute('id', item);

      skills_td.appendChild(skills_reduce_btn);
      skills_td.appendChild(skills_number);
      skills_td.appendChild(skills_increase_btn);
      skills_tr3.appendChild(skills_td);
    }
    char_sheet_div.appendChild(skills_div);

    //tokens builder
    var tokens_div = document.createElement('div');
    tokens_div.setAttribute('class', 'tokens');
    char_sheet_div.appendChild(tokens_div);
    var tokens_table = document.createElement('table');
    tokens_div.appendChild(tokens_table);
    var tokens_tr1 = document.createElement('tr');
    tokens_tr1.setAttribute('class', 'tokens-header');
    var tokens_tr2 = document.createElement('tr');
    tokens_tr2.setAttribute('class', 'tokens-number');
    tokens_table.appendChild(tokens_tr1);
    tokens_table.appendChild(tokens_tr2);


    //tokens
    tokens_list.forEach(tokens_builder);

    function tokens_builder(item) {
      //tokens header
      var tokens_header_td = document.createElement('td');
      tokens_header_td.innerHTML = item;
      tokens_tr1.appendChild(tokens_header_td);
      var tokens_number_td = document.createElement('td');
      let tokens_reduce_btn = new Buttons_Factory(item, 'tokens', (row + 1), 'reduce', '-').button;
      let tokens_increase_btn = new Buttons_Factory(item, 'tokens', (row + 1), 'increase', '+').button;
      var tokens_number = document.createElement('span');
      tokens_number.innerHTML = 0;
      tokens_number.setAttribute('id', item);

      // tokens_number_td.appendChild(tokens_minus_btn);
      tokens_number_td.appendChild(tokens_reduce_btn);
      tokens_number_td.appendChild(tokens_number);
      tokens_number_td.appendChild(tokens_increase_btn);
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