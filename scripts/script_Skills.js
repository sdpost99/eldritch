function Skills(args) {

	let data = new args_Factory(args);
	let player = data.player;
	// let option = data.option;
	let action = data.action;
	let value = data.value;

	const sel_skill_value = newData[player].skills[value];
	const sel_skill_value_top = newData[player].skills[value + '_max'];

	if (action == 'reduce') {
		if (sel_skill_value > (sel_skill_value_top - 2) && sel_skill_value > 0) {
			newData[player].skills[value] = sel_skill_value - 1;
		}
	}
	if (action == 'increase') {
		if (sel_skill_value < (sel_skill_value_top + 2)) {
			newData[player].skills[value] = sel_skill_value + 1;
		}
	}
	Printer(player, value, newData[player].skills[value]);
	console.log(newData[player].skills);
}