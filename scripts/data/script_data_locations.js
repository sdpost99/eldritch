function Locations_RAW() {

  var locations = {};
  locations.s1 = {
    'name': "Alaska, USA (sp.1)",
    'conn': {
      'SF': 'ship',
      's4': 'uncharted',
      's19': 'ship'
    },
    'type': 'city',
    'portal': false,
    'rumor': false,
    'mystery': false,
    'clues': 0,
    'enemy': false,
    'expedition': false,
    'mystic': false,
    'eldritch': false,
    'adventure': false,
    'devastated': false
  };
  locations.s2 = {
    'name': "Hawaii, USA (sp.2)",
    'conn': {
      'SF': 'ship',
      'TK': 'ship'
    },
    'type': 'sea'
  };
  locations.s3 = {
    'name': "Oceanic Pole (sp.3",
    'conn': {
      'BA': 'ship',
      'SY': 'ship'
    },
    'type': 'sea'
  };
  locations.s4 = {
    'name': "Providence, Canada (sp.4)",
    'conn': {
      's1': 'uncharted',
      's5': 'uncharted'
    },
    'type': 'wild'
  };
  locations.s5 = {
    'name': "Chicago, USA (sp.5)",
    'conn': {
      'SF': 'train',
      'AR': 'train',
      's4': 'uncharted'
    },
    'type': 'city'
  };
  locations.s6 = {
    'name': "Texas, USA (sp.6)",
    'conn': {
      'SF': 'train',
      'AR': 'train',
      's7': 'train'
    },
    'type': 'city'
  };
  locations.s7 = {
    'name': "Panama (sp.7)",
    'conn': {
      'SF': 'ship',
      'AM': 'uncharted',
      'BA': 'ship',
      's6': 'train',
      's8': 'ship'
    },
    'type': 'city'
  };
  locations.s8 = {
    'name': "Bermuda Triangle (sp.8)",
    'conn': {
      'AR': 'ship',
      'BA': 'ship',
      's7': 'ship',
      's10': 'ship'
    },
    'type': 'sea'
  };
  locations.s9 = {
    'name': "Greenland (sp.9)",
    'conn': {
      'AR': 'ship'
    },
    'type': 'wild'
  };
  locations.s10 = {
    'name': "Dakar, Senegal (sp.10)",
    'conn': {
      'RM': 'ship',
      'PY': 'uncharted',
      's8': 'ship',
      's15': 'ship'
    },
    'type': 'wild'
  };
  locations.s11 = {
    'name': "Tristan de Cunha (sp.11",
    'conn': {
      'BA': 'ship',
      's15': 'ship'
    },
    'type': 'sea'
  };
  locations.s12 = {
    'name': "Sandwich Island (sp.12)",
    'conn': {
      'BA': 'ship',
      'AN': 'ship'
    },
    'type': 'sea'
  };
  locations.s13 = {
    'name': "Artic Circle (sp.13)",
    'conn': {
      'LN': 'ship'
    },
    'type': 'sea'
  };
  locations.s14 = {
    'name': "Helsinski, Finland (sp.14)",
    'conn': {
      'RM': 'train',
      's16': 'train'
    },
    'type': 'city'
  };
  locations.s15 = {
    'name': "Cape Town, S. Africa (sp.15)",
    'conn': {
      'HA': 'uncharted',
      's10': 'ship',
      's11': 'ship',
      's17': 'ship',
      's18': 'ship'
    },
    'type': 'city'
  };
  locations.s16 = {
    'name': "Krasnoyark, Rusia (sp.16)",
    'conn': {
      'IS': 'train',
      'TG': 'train',
      's14': 'train'
    },
    'type': 'city'
  };
  locations.s17 = {
    'name': "Bombay, India (sp.17)",
    'conn': {
      'IS': 'train',
      'HM': 'uncharted',
      'SH': 'train',
      's15': 'ship',
      's20': 'ship'
    },
    'type': 'city',
    'content': {
      'focus': 0,
      'clues': 0,
      'eldritch': 0,
      'enemies' : [],
      'players': [],
      'gate': [],
      'rumors': [],
      'expedition': false,
      'mystic': false,
      'adventure': false,
      'dream': false,
      'devastation': false
    }
  };
  locations.s18 = {
    'name': "Antartic Lands (sp.18)",
    'conn': {
      'SY': 'ship',
      's15': 'ship'
    },
    'type': 'sea'
  };
  locations.s19 = {
    'name': "Beringovsky, Rusia (sp.19)",
    'conn': {
      'TG': 'train',
      'SH': 'train',
      'TK': 'ship',
      's1': 'ship'
    },
    'type': 'wild'
  };
  locations.s20 = {
    'name': "Makassar, Indonesia (sp.20)",
    'conn': {
      'SH': 'ship',
      'TK': 'ship',
      'SY': 'ship',
      's17': 'ship'
    },
    'type': 'city'
  };
  locations.s21 = {
    'name': "Uluru, Australia (sp.21)",
    'conn': {
      'SY': 'uncharted'
    },
    'type': 'wild'
  };
  locations.AM = {
    'name': "The Amazon, Brazil",
    'conn': {
      'BA': 'uncharted',
      's7': 'uncharted'
    },
    'type': 'wild'
  };
  locations.PY = {
    'name': 'The Pyramids, Egypt',
    'conn': {
      'IS': 'train',
      'RM': 'ship',
      'HA': 'uncharted',
      's10': 'uncharted'
    },
    'type': 'wild'
  };
  locations.HA = {
    'name': 'The Heart of Africa, Congo',
    'conn': {
      'PY': 'uncharted',
      's15': 'uncharted'
    },
    'type': 'wild'
  };
  locations.HM = {
    'name': 'The Himalayas, China',
    'conn': {
      'SH': 'uncharted',
      's17': 'uncharted'
    },
    'type': 'wild'
  };
  locations.TG = {
    'name': 'Tunguska, Rusia',
    'conn': {
      's16': 'train',
      's19': 'train'
    },
    'type': 'wild'
  };
  locations.AN = {
    'name': 'Antarctica',
    'conn': {
      'SY': 'ship',
      's12': 'ship'
    },
    'type': 'sea',
    'content': {
      'focus': 0,
      'clues': 0,
      'eldritch': 0,
      'enemies' : [],
      'players': [],
      'gate': [],
      'rumors': [],
      'expedition': false,
      'mystic': false,
      'adventure': false,
      'dream': false,
      'devastation': false
    }
  };
  locations.SF = {
    'name': 'San Francisco, USA',
    'conn': {
      's1': 'ship',
      's2': 'ship',
      's5': 'train',
      's6': 'train',
      's7': 'ship'
    },
    'type': 'city'
  };
  locations.AR = {
    'name': 'Arkham, USA',
    'conn': {
      's5': 'train',
      's6': 'train',
      's8': 'ship',
      's9': 'ship',
      'LN': 'ship'
    },
    'type': 'city',
    'content': {
      'focus': 0,
      'clues': 0,
      'eldritch': 0,
      'enemies' : [],
      'players': [],
      'gate': [],
      'rumors': [],
      'expedition': false,
      'mystic': false,
      'adventure': false,
      'dream': false,
      'devastation': false
    }
  };
  locations.BA = {
    'name': 'Buenos Aires, Argentina',
    'conn': {
      's3': 'ship',
      's7': 'ship',
      'AM': 'uncharted',
      's8': 'ship',
      's11': 'ship',
      's12': 'ship'
    },
    'type': 'city'
  };
  locations.LN = {
    'name': 'London, England',
    'conn': {
      's13': 'ship',
      'AR': 'ship',
      'RM': 'ship'
    },
    'type': 'city'
  };
  locations.RM = {
    'name': 'Rome, Italy',
    'conn': {
      'LN': 'ship',
      's10': 'ship',
      'PY': 'ship',
      'IS': 'train',
      's14': 'train'
    },
    'type': 'city',
    'content': {
      'focus': 0,
      'clues': 0,
      'eldritch': 0,
      'enemies' : ['mostro'],
      'players': [],
      'gate': [],
      'rumors': [],
      'expedition': false,
      'mystic': false,
      'adventure': false,
      'dream': false,
      'devastation': false
    }
  }
  locations.IS = {
    'name': 'Istanbul, Turkey',
    'conn': {
      's16': 'train',
      's17': 'train',
      'RM': 'train',
      'PY': 'train'
    },
    'type': 'city'
  };
  locations.TK = {
    'name': 'Tokyo, Japan',
    'conn': {
      's19': 'ship',
      'SH': 'ship',
      's2': 'ship',
      's20': 'ship'
    },
    'type': 'city'
  };
  locations.SH = {
    'name': 'Shanghai, China',
    'conn': {
      's20': 'ship',
      'TK': 'ship',
      's17': 'train',
      's19': 'train',
      'HM': 'uncharted'
    },
    'type': 'city'
  };
  locations.SY = {
    'name': 'Sydney, Australia',
    'conn': {
      'AN': 'ship',
      's3': 'ship',
      's18': 'ship',
      's20': 'ship',
      's21': 'uncharted'
    },
    'type': 'city'
  };
  return locations;
}