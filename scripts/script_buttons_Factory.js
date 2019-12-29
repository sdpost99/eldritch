function Buttons_Factory(value, option, player, action, text) {
    this.button = document.createElement('button');
    this.button.setAttribute('value', value);
    this.button.setAttribute('option', option);
    this.button.setAttribute('player', 'player' + player);
    this.button.setAttribute('action', action);
    this.button.setAttribute('onclick', 'Selector(this)');
    this.button.innerHTML = text;
}
