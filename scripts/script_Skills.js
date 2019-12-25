function Skills(args) {

	let data = new args_Factory(args);
	let player = data.player;
	let option = data.option;
	let action = data.action;

	const sel_skill_value = newData[player].skills[option];
	const sel_skill_value_top = newData[player].skills[option + '_max'];

	if (action == 'reduce') {
		if (sel_skill_value > (sel_skill_value_top - 2) && sel_skill_value > 0) {
			newData[player].skills[option] = sel_skill_value - 1;
		}
	}
	if (action == 'increase') {
		if (sel_skill_value < (sel_skill_value_top + 2)) {
			newData[player].skills[option] = sel_skill_value + 1;
		}
	}
	Printer(player, option, newData[player].skills[option]);
	console.log(newData[player].skills);
}