function cards_Data() {
    let data = {};

    var artifacts = {
        'alien_device': {
            'name': 'Alien  Device',

            'tags': ['Item'],

            'effect': true,
            'effect_text': null,

            'action': false,
            'action_text': null,

            'skill_bonus': true,
            'skill_bonus_text': 'Gain +3 Lore when resolving Spell effects.',

            'reroll': true,
            'reroll_text': 'You may spend 1 Sanity to reroll any number of dice when resolving a Lore test as part of a Spell effect.',

            'additional_dice': false,

            'reckoning': false,
        },

        'black_book': {
            'name': 'Black Book',

            'tags': ['Item','Tome'],

            'effect': true,
            'effect_text': null,

            'action': true,
            'action_text': 'You may gain a Dark Pact to discard any number of other Conditions and all of your Eldritch Tokens.',

            'skill_bonus': true,
            'skill_bonus_text': 'Gain +2 to all skills if you have a Dark Pact Condition.',

            'reroll': false,
            'reroll_text': null,

            'additional_dice': false,
            
            'reckoning': false,
        }
    }

    var assets = {
        'dream_diary': {
            'name': 'Dream Diary',

            'cost': 1,

            'tags': ['Item','Tome'],

            'effect': true,
            'effect_text': 'When you perform a Rest action, spawn 1 Clue.',

            'action': false,
            'action_text': null,

            'skill_bonus': true,
            'skill_bonus_text': 'Gain +1Lore during Other World Encounters.',

            'reroll': false,
            'reroll_text': null,

            'additional_dice': false,
            
            'reckoning': false,
        }
    }

    data.artifacts = artifacts;
    data.assets = assets;
    return data;
}