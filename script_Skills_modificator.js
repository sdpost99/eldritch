function Skills_modificator(data) {

	const sel_skill_value = newData[data.player].attributes.skills[data.sel_skill];
	const sel_skill_value_top = rawData.playersData[data.char].skills[data.sel_skill];

	if (data.sel_skill_action == '-') {
		if (sel_skill_value > (sel_skill_value_top - 2)) {
			newData[data.player].attributes.skills[data.sel_skill] = sel_skill_value - 1;
		}
	}
	if (data.sel_skill_action == '+') {
		if (sel_skill_value < (sel_skill_value_top + 2)) {
			newData[data.player].attributes.skills[data.sel_skill] = sel_skill_value + 1;
		}
	}

	const player_sheet = 'p' + data.player.slice(6);
	const sheet = document.getElementById(player_sheet);
	const toChange_span = sheet.querySelector('#' + data.sel_skill + '_number');
	toChange_span.innerHTML = newData[data.player].attributes.skills[data.sel_skill];
}