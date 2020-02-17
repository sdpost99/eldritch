function cards_Data() {
    let data = {};

    var artifacts = {
        'alien_device': {
            'name': 'Alien  Device',
            'cost': false,
            'tags': ['Item'],
            'effect': false,
            'action': false,
            'skill_bonus': 'Gain +3 Lore when resolving Spell effects.',
            'reroll': 'You may spend 1 Sanity to reroll any number of dice when resolving a Lore test as part of a Spell effect.',
            'additional_dice': false,
            'one_shot': false,
            'reckoning': false
        },

        'black_book': {
            'name': 'Black Book',
            'cost': false,
            'tags': ['Item', 'Tome'],
            'effect': false,
            'action': 'You may gain a Dark Pact to discard any number of other Conditions and all of your Eldritch Tokens.',
            'skill_bonus': 'Gain +2 to all skills if you have a Dark Pact Condition.',
            'reroll': false,
            'additional_dice': false,
            'one_shot': false,
            'reckoning': false
        }
    }

    var assets = {
        'dream_diary': {
            'name': 'Dream Diary',
            'cost': 'Cost: 1',
            'tags': ['Item', 'Tome'],
            'effect': 'When you perform a Rest action, spawn 1 Clue.',
            'action': false,
            'skill_bonus': 'Gain +1Lore during Other World Encounters.',
            'reroll': false,
            'additional_dice': false,
            'one_shot': false,
            'reckoning': false,
        },
        'charter_flight': {
            'name': 'Charter Flight',
            'cost': 'Cost: 1',
            'tags': ['Service'],
            'effect': 'When you gain this card, immediately move up to 2 spaces. Then discard this card.',
            'action': false,
            'skill_bonus': false,
            'reroll': false,
            'additional_dice': false,
            'one_shot': false,
            'reckoning': false,
        },
        'enchanted_dagger': {
            'name': 'Enchanted Dagger',
            'cost': 'Cost: 1',
            'tags': ['Item', 'Magical', 'Weapon'],
            'effect': 'Gain +2 Strength during Combat Encounters.',
            'action': false,
            'skill_bonus': false,
            'reroll': false,
            'additional_dice': false,
            'one_shot': false,
            'reckoning': false,
        },
        '_18_derringer': {
            'name': '.18 Derringer',
            'cost': 'Cost: 1',
            'tags': ['Trinket', 'Weapon'],
            'effect': 'You may add 1 to the result of 1 die when resolving a Strength test during a Combat Encounter.',
            'action': false,
            'skill_bonus': false,
            'reroll': false,
            'additional_dice': false,
            'one_shot': false,
            'reckoning': false
        }
    }

    var cardTypes = [
        'artifacts',
        'assets',
        'conditions',
        'spells',
        'unique_assets',
        'personal_story'
    ]
    var cardInfo = [
        'cost',
        'effect',
        'action',
        'skill_bonus',
        'reroll',
        'additional_dice',
        'one_shot',
        'reckoning'
    ]

    data.artifacts = artifacts;
    data.assets = assets;
    data.cardTypes = cardTypes;
    data.cardInfo = cardInfo;
    return data;
}