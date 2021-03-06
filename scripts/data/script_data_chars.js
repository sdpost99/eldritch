function players_RAW() {
  var data = {};

  var action_token_list = [
    'focus',
    'resource',
    'ship',
    'train',
  ];

  var token_list = [
    'clue',
    'eldritch'
  ];

  var action_list = {
    'move': false,
    'rest': false,
    'focus': false,
    'trade': false,
    'resource': false,
    'action': false,
    'acquire': false,
    'delayed': false,
    'train': false,
    'ship': false
  };

  var characters_list = {
    'Zoe Samaras': {
      'health': 5,
      'sanity': 7,
      'skills': {
        'lore': 3,
        'obs': 1,
        'str': 3,
        'will': 4,
        'inf': 2
      },
      'tokens': {
        'focus': 0,
        'resource': 0,
        'ship': 0,
        'train': 0,
        'clue': 0,
        'eldritch': 0
      },
      'artifacts': [],
      'assets': ['holy_cross'],
      'conditions': [],
      'spells': [],
      'unique_assets': [],
      'personal_story': '',
      'original_location': 'RM',
      'abilities': ['Action: If you have fewer than 2 Task Assets, gain 1 Task Unique Asset.', 'If you have not lost Sanity during a Combat Encounter, roll 2 additional dice when resolving the Strength test during that encounter.']
    },
    'Caroline Fern': {
      'health': 5,
      'sanity': 7,
      'skills': {
        'lore': 2,
        'inf': 3,
        'obs': 2,
        'str': 2,
        'will': 4
      },
      'tokens': {
        'focus': 0,
        'resource': 0,
        'ship': 0,
        'train': 0,
        'clue': 0,
        'eldritch': 0
      },
      'artifacts': [],
      'assets': ['dream_diary'],
      'conditions': [],
      'spells': [],
      'unique_assets': ['death_xiii'],
      'personal_story': '',
      'original_location': 'RM',
      'abilities': [
        'Action: You or another investigator on your space may discard 1 Madness Condition and/or perform a Rest Action',
        'When another investigator performs a Rest Action on your space, they may gain 1 additional Sanity.'
      ]
    },
    'Luke Robinson': {
      'health': 4,
      'sanity': 8,
      'skills': {
        'lore': 4,
        'inf': 2,
        'obs': 1,
        'str': 2,
        'will': 4
      },
      'tokens': {
        'focus': 0,
        'resource': 0,
        'ship': 0,
        'train': 0,
        'clue': 2,
        'eldritch': 0
      },
      'artifacts': [],
      'assets': [],
      'conditions': [],
      'spells': [],
      'unique_assets': [],
      'personal_story': '',
      'original_location': 'AR',
      'abilities': ['Action: Move to a space containing a Gate that corresponds to the current Omen.', 'During the Encounter Phase, you may spend 1 Focus or 1 Sanity to encounter a Gate on your space as if there are no Monsters on your space.']
    },
    'Vincent Lee': {
      'health': 6,
      'sanity': 6,
      'skills': {
        'lore': 1,
        'inf': 3,
        'obs': 3,
        'str': 2,
        'will': 4
      },
      'tokens': {
        'focus': 0,
        'resource': 0,
        'ship': 0,
        'train': 0,
        'clue': 1,
        'eldritch': 0
      },
      'artifacts': [],
      'assets': [],
      'conditions': [],
      'spells': [],
      'unique_assets': [],
      'personal_story': '',
      // 'original_location': 's17',
      'original_location': 'AN',
      'abilities': ['Action: You or another investigator on you space may discard 1 Injury or Illness Condition and/or perform a Rest action.', 'When you or another investigator on your space performs a Rest action, that investigator may recover 1 additional Health.']
    }
  };

  data.playersData = characters_list;
  data.action_tokens = action_token_list;
  data.tokens = token_list;

  return data;

}

function game_properties() {
  var data = {};
  data.focus = 2;
  data.train = 1;
  data.ship = 1;
  data.resource = 2;
  data.clue = 100;
  data.eldritch = 100;
  return data;
}