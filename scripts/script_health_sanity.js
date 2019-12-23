function health_sanity(data) {
  if (data.dropdown == 'health_drop') {
    sel_att = 'health';
  }
  else if (data.dropdown == 'sanity_drop') {
    sel_att = 'sanity';
  }
  const sel_att_value = data.attributes[sel_att];
  const sel_att_value_top = rawData.playersData[data.char][sel_att];
  if (sel_att_value < sel_att_value_top || sel_att_value > 0) {
    if (data.sel_skill_action == '+') {
      if (sel_att_value < sel_att_value_top) {
        newData[data.player].attributes[sel_att] = sel_att_value + 1;
      }
    }
    else if (sel_att_value > 0) {
      newData[data.player].attributes[sel_att] = sel_att_value - 1;
    }
  }
  const player_sheet = 'p' + data.player.slice(6);
  const sheet = document.getElementById(player_sheet);
  const health_td = sheet.querySelector('#health');
  const sanity_td = sheet.querySelector('#sanity');
  const health = newData[data.player].attributes.health;
  const sanity = newData[data.player].attributes.sanity;
  health_td.innerHTML = health;
  sanity_td.innerHTML = sanity;
}
