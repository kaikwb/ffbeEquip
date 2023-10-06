const baseStats = ['hp','mp','atk','def','mag','spr'];
const elementList = ['fire','ice','lightning','water','wind','earth','light','dark'];
const ailmentList = ['poison','blind','sleep','silence','paralysis','confuse','disease','petrification','death', "charm", "stop"];
const ailmentListWithoutDeath = ['poison','blind','sleep','silence','paralysis','confuse','disease','petrification'];
const disablingAilmentList = ['sleep','paralysis','confuse','petrification'];
const killerList = ['aquatic','beast','bird','bug','demon','dragon','human','machine','plant','undead','stone','spirit'];
const racialMitigationList = ['aquatic','beast','bird','bug','demon','dragon','human','machine','plant','undead','stone','spirit'];
const typeList = ["dagger", "sword", "greatSword", "katana", "staff", "rod", "bow", "axe", "hammer", "spear", "harp", "whip", "throwing", "gun", "mace", "fist", "lightShield", "heavyShield", "hat", "helm", "clothes", "lightArmor", "heavyArmor", "robe",  "accessory", "materia", "visionCard"];
const typeListWithEsper = typeList.concat(["esper"]);
const weaponList = ["dagger", "sword", "greatSword", "katana", "staff", "rod", "bow", "axe", "hammer", "spear", "harp", "whip", "throwing", "gun", "mace", "fist"];
const shieldList = ["lightShield", "heavyShield"];
const headList = ["hat", "helm"];
const bodyList = ["clothes", "robe", "lightArmor", "heavyArmor"];
const accessList = ["shop","chest","quest","trial","chocobo","event","colosseum","key","TMR-1*","TMR-2*","TMR-3*","TMR-4*","TMR-5*", "STMR","recipe-shop","recipe-chest","recipe-quest","recipe-event","recipe-colosseum","recipe-key","trophy","recipe-trophy","premium","darkVision"];
const typeCategories = {"dagger":"Category:Daggers", "sword":"Category:Swords", "greatSword":"Category:Great_Swords", "katana":"Category:Katanas", "staff":"Category:", "rod":"Category:Rods", "bow":"Category:Bows", "axe":"Category:Axes", "hammer":"Category:Hammers", "spear":"Category:Spears", "harp":"Category:Harps", "whip":"Category:Whips", "throwing":"Category:Throwing_Weapons", "gun":"Category:Guns", "mace":"Category:Maces", "fist":"Category:Fists", "lightShield":"Category:Light_Shields", "heavyShield":"Category:Heavy_Shields", "hat":"Category:Hats", "helm":"Category:Helms", "clothes":"Category:Clothes", "lightArmor":"Category:Light_Armors", "heavyArmor":"Category:Heavy_Armors", "robe":"Category:Robes", "accessory":"Category:Accessories", "materia":"Ability_Materia", "visionCard":"Category:Vision_Cards"};
const percentValues = {
    "hp": "hp%",
    "mp": "mp%",
    "atk": "atk%",
    "def": "def%",
    "mag": "mag%",
    "spr": "spr%"
};
const series = {
	"FFI":["10001"],
	"FFII": ["10002"],
	"FFIII": ["10003"],
	"FFIV": ["10004"],
	"FFV": ["10005"],
	"FFVI": ["10006"],
	"FFVII": ["10007"],
    "FFVII AC": ["11009"],
	"FFVIII": ["10008"],
	"FFIX": ["10009"],
	"FFX": ["10010"],
    "FFX-2": ["11004"],
	"FFXI": ["10011"],
	"FFXII": ["10012"],
    "FFXIII": ["10013"],
    "FFXIII-2": ["11006"],
	"FFXIII LR": ["11007"],
	"FFXIV": ["10014"],
	"FFXV": ["10015"],
	"FFBE": ["11001"],
    "WOTV FFBE": ["11010"],
	"FFT": ["11002"],
	"FF TYPE-0": ["11003"],
	"FFRK":  ["11011"],
	"Brave Frontier": ["20003"],
	"Crystal Defenders": ["20004"],
	"Secret of Mana": ["20005"],
    "Trials of Mana": ["20012"],
	"Dragon Quest": ["20006"],
    "DRAGON QUEST XI S": ["20029"],
    "The Adventure of Dai": ["20037"],
	"NieR:Automata": ["20010"],
	"Star Ocean": ["20016","20017", "20018", "20019", "20020"],
	"VALKYRIE PROFILE -LENNETH-": ["20022"],
	"Xenogears": ["20024"],
	"Octopath Traveler": ["20025"],
	"Kingdom Hearts": ["20028"],
    "KHIII": ["20033"],
    "KHDR": ["20034"],
	"Fullmetal Alchemist": ["20032"],
	"Ariana Grande": ["90001"],
	"King's Knight": ["90002"],
	"Tomb Raider": ["90003", "90008"],
	"Just Cause 3": ["90004"],
	"Deus Ex: Mankind Divided": ["90005"],
	"Katy Perry": "90006"
}
const goalValuesCaract = {
    "physicalDamage":                   {"statsToMaximize":["atk"], "type": "physical"},
    "magicalDamage":                    {"statsToMaximize":["mag"], "type": "magical"},
    "hybridDamage":                     {"statsToMaximize":["atk","mag"], "type": "physical"},
    "jumpDamage":                       {"statsToMaximize":["atk"], "type": "physical"},
    "magDamageWithPhysicalMechanism":    {"statsToMaximize":["mag"], "type": "physical"},
    "sprDamageWithPhysicalMechanism":    {"statsToMaximize":["spr"], "type": "physical"},
    "defDamageWithPhysicalMechanism":    {"statsToMaximize":["def"], "type": "physical"},
    "atkDamageWithMagicalMechanism":     {"statsToMaximize":["atk"], "type": "magical"},
    "sprDamageWithMagicalMechanism":     {"statsToMaximize":["spr"], "type": "magical"},
    "atkDamageWithFixedMechanism":       {"statsToMaximize":["atk"], "type": "none"},
    "physicalDamageMultiCast":          {"statsToMaximize":["atk"], "type": "physical", "multicast":true},
    "magDamageWithPhysicalMechanismMultiCast":          {"statsToMaximize":["mag"], "type": "physical", "multicast":true},
    "sprDamageWithPhysicalMechanismMultiCast":          {"statsToMaximize":["spr"], "type": "physical", "multicast":true},
    "defDamageWithPhysicalMechanismMultiCast":          {"statsToMaximize":["def"], "type": "physical", "multicast":true},
    "atkDamageWithMagicalMechanismMultiCast":           {"statsToMaximize":["atk"], "type": "magical", "multicast":true},
    "fixedDamageWithPhysicalMechanism":  {"statsToMaximize":[], "type": "physical"},
    "summonerSkillMAG/SPRMechanism":                    {"statsToMaximize":["mag","spr"], "type": "none"},
    "summonerSkillMAGMechanism":                    {"statsToMaximize":["mag"], "type": "none"},
    "summonerSkillSPRMechanism":                    {"statsToMaximize":["spr"], "type": "none"},
    "mpMagPhysicalDamage":              {"statsToMaximize": ["mp", "mag"], "type": "physical"},
    "mpMagMagicalDamage":               {"statsToMaximize": ["mp", "mag"], "type": "magical"},
    "mpSprPhysicalDamage":              {"statsToMaximize": ["mp", "spr"], "type": "physical"},
    "mpSprMagicalDamage":              {"statsToMaximize": ["mp", "spr"], "type": "magical"}
};
const itemEnhancementLabels = {
    "rares":{
        "100065": {
          "id": 100065,
          "name": "MP +40%",
          "effects": "MP 40%"
        },
        "100091": {
          "id": 100091,
          "name": "ATK +40%",
          "effects": "ATK 40%"
        },
        "101240": {
          "id": 101240,
          "name": "High Tide",
          "effects": "LB gauge fill rate 100%"
        },
        "213520": {
          "id": 213520,
          "name": "HP +40%",
          "effects": "HP 40%"
        },
        "450800": {
          "id": 450800,
          "name": "Seal of Life and Power Lv. 3",
          "effects": "ATK/HP 15%"
        },
        "450810": {
          "id": 450810,
          "name": "Seal of Skill and Magic Lv. 3",
          "effects": "MAG/MP 15%"
        },
        "450820": {
          "id": 450820,
          "name": "Seal of Life and Arms Lv. 3",
          "effects": "DEF/HP 15%"
        },
        "450830": {
          "id": 450830,
          "name": "Seal of Skill and Soul Lv. 3",
          "effects": "SPR/MP 15%"
        },
        "450840": {
          "id": 450840,
          "name": "Seal of Life and Soul Lv. 3",
          "effects": "SPR/HP 15%"
        },
        "450850": {
          "id": 450850,
          "name": "Seal of Power and Magic Lv. 6",
          "effects": "ATK/MAG 30%"
        },
        "450860": {
          "id": 450860,
          "name": "Seal of Life and Skill Lv. 3",
          "effects": "HP/MP 15%"
        },
        "450870": {
          "id": 450870,
          "name": "Seal of Life and Power Lv. 4",
          "effects": "ATK/HP 20%"
        },
        "450880": {
          "id": 450880,
          "name": "Seal of Skill and Magic Lv. 4",
          "effects": "MAG/MP 20%"
        },
        "450890": {
          "id": 450890,
          "name": "Seal of Power and Magic Lv. 7",
          "effects": "ATK/MAG 35%"
        },
        "450900": {
          "id": 450900,
          "name": "Seal of Life and Arms Lv. 4",
          "effects": "DEF/HP 20%"
        },
        "450910": {
          "id": 450910,
          "name": "Seal of Life and Skill Lv. 4",
          "effects": "HP/MP 20%"
        },
        "450920": {
          "id": 450920,
          "name": "High Tide+",
          "effects": "LB gauge fill rate 150%"
        },
        "450930": {
          "id": 450930,
          "name": "Seal of Skill and Soul Lv. 4",
          "effects": "SPR/MP 20%"
        },
        "450940": {
          "id": 450940,
          "name": "Seal of Life and Soul Lv. 4",
          "effects": "SPR/HP 20%"
        },
        "914990": {
          "id": 914990,
          "name": "Projectile Prowess",
          "effects": "ATK/MAG 20%"
        },
        "916045": {
          "id": 916045,
          "name": "HP/DEF +20%",
          "effects": "DEF/HP 20%"
        },
        "916046": {
          "id": 916046,
          "name": "HP/SPR +20%",
          "effects": "SPR/HP 20%"
        }
      },
    "special_1": {
        "303007400":"ATK/Fire resist +20%",
        "303007500":"ATK/Fire resist +20%",
        "303007600":"ATK/Fire resist +20%",
        "304005400":"ATK/Ice resist +20%",
        "304005500":"ATK/Ice resist +20%",
        "304005600":"ATK/Ice resist +20%",
        "304005300":"ATK/Lightning resist +20%",
        "308006000":"MAG/Water resist +20%",
        "308006100":"MAG/Water resist +20%",
        "313006300":"ATK/Wind resist +20%",
        "313006400":"ATK/Wind resist +20%",
        "302011400":"ATK/Earth resist +20%",
        "302011500":"ATK/Earth resist +20%",
        "312003200":"MAG/Light resist +20%",
        "312003300":"MAG/Light resist +20%",
        "310006800":"MAG/Dark resist +20%",
        "310006900":"MAG/Dark resist +20%",
        "302012000":"ATK/MAG +40%",
        "302002600":"DEF +50%, HP +20%, Auto buff DEF +50%",
        "302002500":"All Element resist +30%",
        "311005400":"SPR +40%, MP +20%, 5% mp refresh",
        "311002000":"SPR +50%, MP +20%, 7% mp refresh",
        "310006200":"MAG +40%, MP +20%, 5% mp refresh",
        "310002800":"MAG +60%, HP/MP +10%",
        "309001900":"ATK +60%, Auto-Regen",
        "310004300":"MAG +60%",
        "301003000":"ATK +60%",
        "302005100":"ATK +60%",
        "302003900":"ATK +60%",
        "302006000":"ATK +60%",
        "303003700":"ATK +60%",
        "304003800":"ATK +60%",
        "304002800":"ATK +60%",
        "304001800":"ATK +60%",
        "312002100":"ATK +60%",
        "308003100":"ATK +60%",
        "308004400":"ATK +60%",
        "1100000176":"ATK +60%",
        "1100000177":"ATK +60%",
        "1100000179":"ATK +60%",
        "1100000174":"ATK +60%",
        "1100000152":"ATK +60%",
        "1100000157":"ATK +60%",
        "1100000156":"ATK +60%",
        "1100000158":"ATK +60%",
        "309002000":"ATK +60%",
        "1100000154":"ATK +60%",
        "313003400":"ATK/MAG +40%",
        "1100000155":"ATK/MAG +40%",
        "302012300":"HP/ATK/DEF +25%",
        "303008300":"ATK +50%",
        "304006000":"ATK/MAG +30%, +50% LB fill rate",
        "310008500":"ATK/DEF/MAG/SPR +30%",
        "1100000452":"+100% ailment resist for 3 turns",
        "1100000448":"+30% P/M machine and dragon killer",
        "1100000449":"+30% P/M machine and dragon killer",
        "1100000450":"ATK/MAG TDW +25%",
        "1100000451":"ATK/MAG TDW +25%",
        "1100000433":"ATK +30%, 5% HP regen",
        "1100000425":"MAG +30%, 5% MP regen",
        "1100000410":"ATK/MAG +15%, +25% ATK/MAG TDW",
        "1100000446":"Ice Resist +30%, +25% P/M TDH",
        "1100000298":"ATK +15%, +50% P demon killer",
        "1100000384":"DEF/SPR +30%",
        "1100000471":"ATK+30%, +25% ATK TDW",
        "1100000486":"ATK+80%, +25% ATK TDW",
        "301001700":"ATK+80%",
        "303003400":"ATK+80%",
        "308004200":"ATK+80%",
        "313003600":"ATK+80%",
        "1100000490":"MAG+60%, +25% MAG/SPR TDW",
        "303003600": "ATK+60%",
        "310008700": "MAG+60%",
        "314002800": "ATK+60%",
        "316001400": "SPR+60%",
        "1100000512":"ATK+80%, +20% P/M Evade",
        "310006700":"MAG+80%",
        "303001400":"ATK+80%",
        "313005600":"ATK+80%",
        "311004300":"SPR+80%",
        "1100000523":"ATK+60%, +50% ATK TDH",
        "304003500":"ATK+80%",
        "1100000065":"DEF+60%",
        "1100000294":"SPR+60%",
        "309002600":"ATK+80%",
        "1100000528":"MAG/SPR +50%, +50% LB fill rate",
        "302006700":"ATK+80%",
        "304002200":"ATK+80%",
        "1100000558": "DEF/SPR+40%, HP+30%",
        "1100000590": "MAG +50%, +50% M Aquatic/Plant killers",
        "1100000596": "SPR +50%, +5% MP/turn",
        "1100000666": "SPR +50%, +5% MP/turn",
        "1100000599": "ATK+80%, +50% LB fill rate",
        "1100000667": "ATK+80%, +50% LB fill rate",
        "1100000617": "ATK +60%, LB Damage +50%",
        "1100000668": "ATK +60%, LB Damage +50%",
        "1100000542": "MAG +60%, +25% MAG TDH"
    },
    "hp_20": "HP +20%", "hp_15": "HP +15%", "hp_12": "HP +12%", "hp_10": "HP +10%", "hp_7": "HP +7%", "hp_5": "HP +5%", "hp_3": "HP +3%", "hp_1": "HP +1%",
    "mp_20": "MP +20%", "mp_15": "MP +15%", "mp_12": "MP +12%", "mp_10": "MP +10%", "mp_7": "MP +7%", "mp_5": "MP +5%", "mp_3": "MP +3%", "mp_1": "MP +1%",
    "atk_20": "ATK +20%", "atk_15": "ATK +15%", "atk_12": "ATK +12%", "atk_10": "ATK +10%", "atk_7": "ATK +7%", "atk_5": "ATK +5%", "atk_3": "ATK +3%", "atk_1": "ATK +1%",
    "def_20": "DEF +20%", "def_15": "DEF +15%", "def_12": "DEF +12%", "def_10": "DEF +10%", "def_7": "DEF +7%", "def_5": "DEF +5%", "def_3": "DEF +3%", "def_1": "DEF +1%",
    "mag_20": "MAG +20%", "mag_15": "MAG +15%", "mag_12": "MAG +12%", "mag_10": "MAG +10%", "mag_7": "MAG +7%", "mag_5": "MAG +5%", "mag_3": "MAG +3%", "mag_1": "MAG +1%",
    "spr_20": "SPR +20%", "spr_15": "SPR +15%", "spr_12": "SPR +12%", "spr_10": "SPR +10%", "spr_7": "SPR +7%", "spr_5": "SPR +5%", "spr_3": "SPR +3%", "spr_1": "SPR +1%",
    "autoRegen_4": "Auto-Regen 4","autoRegen_3": "Auto-Regen 3","autoRegen_2": "Auto-Regen 2","autoRegen_1": "Auto-Regen 1",
    "autoRefresh_2": "Auto-Refresh 2","autoRefresh_1": "Auto-Refresh 1",
    "autoProtect_5": "Auto-Protect 5","autoProtect_4": "Auto-Protect 4","autoProtect_3": "Auto-Protect 3","autoProtect_2": "Auto-Protect 2","autoProtect_1": "Auto-Protect 1",
    "autoShell_5": "Auto-Shell 5","autoShell_4": "Auto-Shell 4","autoShell_3": "Auto-Shell 3","autoShell_2": "Auto-Shell 2","autoShell_1": "Auto-Shell 1",
    "autoFillLb_2": "+2 LB/turn","autoFillLb_1": "+1 LB/turn",
    "reduceMp_2": "-10% mp", "reduceMp_1": "-5% mp",
    "atk_mag_1": "ATK/MAG +30%",
    "hp_def_1": "HP/DEF +20%",
    "hp_spr_1": "HP/SPR +20%",
};
const itemEnhancementAbilities = {
    "rares":{
      "100065": {
        "id": 100065,
        "name": "MP +40%",
        "effects": "MP 40%",
        "enchant": {
          "mp%": 40
        }
      },
      "100091": {
        "id": 100091,
        "name": "ATK +40%",
        "effects": "ATK 40%",
        "enchant": {
          "atk%": 40
        }
      },
      "101240": {
        "id": 101240,
        "name": "High Tide",
        "effects": "LB gauge fill rate 100%",
        "enchant": {
          "lbFillRate": 100
        }
      },
      "213520": {
        "id": 213520,
        "name": "HP +40%",
        "effects": "HP 40%",
        "enchant": {
          "hp%": 40
        }
      },
      "450800": {
        "id": 450800,
        "name": "Seal of Life and Power Lv. 3",
        "effects": "ATK/HP 15%",
        "enchant": {
          "hp%": 15,
          "atk%": 15
        }
      },
      "450810": {
        "id": 450810,
        "name": "Seal of Skill and Magic Lv. 3",
        "effects": "MAG/MP 15%",
        "enchant": {
          "mp%": 15,
          "mag%": 15
        }
      },
      "450820": {
        "id": 450820,
        "name": "Seal of Life and Arms Lv. 3",
        "effects": "DEF/HP 15%",
        "enchant": {
          "hp%": 15,
          "def%": 15
        }
      },
      "450830": {
        "id": 450830,
        "name": "Seal of Skill and Soul Lv. 3",
        "effects": "SPR/MP 15%",
        "enchant": {
          "mp%": 15,
          "spr%": 15
        }
      },
      "450840": {
        "id": 450840,
        "name": "Seal of Life and Soul Lv. 3",
        "effects": "SPR/HP 15%",
        "enchant": {
          "hp%": 15,
          "spr%": 15
        }
      },
      "450850": {
        "id": 450850,
        "name": "Seal of Power and Magic Lv. 6",
        "effects": "ATK/MAG 30%",
        "enchant": {
          "atk%": 30,
          "mag%": 30
        }
      },
      "450860": {
        "id": 450860,
        "name": "Seal of Life and Skill Lv. 3",
        "effects": "HP/MP 15%",
        "enchant": {
          "hp%": 15,
          "mp%": 15
        }
      },
      "450870": {
        "id": 450870,
        "name": "Seal of Life and Power Lv. 4",
        "effects": "ATK/HP 20%",
        "enchant": {
          "hp%": 20,
          "atk%": 20
        }
      },
      "450880": {
        "id": 450880,
        "name": "Seal of Skill and Magic Lv. 4",
        "effects": "MAG/MP 20%",
        "enchant": {
          "mp%": 20,
          "mag%": 20
        }
      },
      "450890": {
        "id": 450890,
        "name": "Seal of Power and Magic Lv. 7",
        "effects": "ATK/MAG 35%",
        "enchant": {
          "atk%": 35,
          "mag%": 35
        }
      },
      "450900": {
        "id": 450900,
        "name": "Seal of Life and Arms Lv. 4",
        "effects": "DEF/HP 20%",
        "enchant": {
          "hp%": 20,
          "def%": 20
        }
      },
      "450910": {
        "id": 450910,
        "name": "Seal of Life and Skill Lv. 4",
        "effects": "HP/MP 20%",
        "enchant": {
          "hp%": 20,
          "mp%": 20
        }
      },
      "450920": {
        "id": 450920,
        "name": "High Tide+",
        "effects": "LB gauge fill rate 150%",
        "enchant": {
          "lbFillRate": 150
        }
      },
      "450930": {
        "id": 450930,
        "name": "Seal of Skill and Soul Lv. 4",
        "effects": "SPR/MP 20%",
        "enchant": {
          "mp%": 20,
          "spr%": 20
        }
      },
      "450940": {
        "id": 450940,
        "name": "Seal of Life and Soul Lv. 4",
        "effects": "SPR/HP 20%",
        "enchant": {
          "hp%": 20,
          "spr%": 20
        }
      },
      "914990": {
        "id": 914990,
        "name": "Projectile Prowess",
        "effects": "ATK/MAG 20%",
        "enchant": {
          "atk%": 20,
          "mag%": 20
        }
      },
      "916045": {
        "id": 916045,
        "name": "HP/DEF +20%",
        "effects": "DEF/HP 20%",
        "enchant": {
          "hp%": 20,
          "def%": 20
        }
      },
      "916046": {
        "id": 916046,
        "name": "HP/SPR +20%",
        "effects": "SPR/HP 20%",
        "enchant": {
          "hp%": 20,
          "spr%": 20
        }
      }
    },
    "special_1": {
        "303007400":{"atk%":20, "resist":[{"name":"fire", "percent":20}]},
        "303007500":{"atk%":20, "resist":[{"name":"fire", "percent":20}]},
        "303007600":{"atk%":20, "resist":[{"name":"fire", "percent":20}]},
        "304005400":{"atk%":20, "resist":[{"name":"ice", "percent":20}]},
        "304005500":{"atk%":20, "resist":[{"name":"ice", "percent":20}]},
        "304005600":{"atk%":20, "resist":[{"name":"ice", "percent":20}]},
        "304005300":{"atk%":20, "resist":[{"name":"lightning", "percent":20}]},
        "308006000":{"mag%":20, "resist":[{"name":"water", "percent":20}]},
        "308006100":{"mag%":20, "resist":[{"name":"water", "percent":20}]},
        "313006300":{"atk%":20, "resist":[{"name":"wind", "percent":20}]},
        "313006400":{"atk%":20, "resist":[{"name":"wind", "percent":20}]},
        "302011400":{"atk%":20, "resist":[{"name":"earth", "percent":20}]},
        "302011500":{"atk%":20, "resist":[{"name":"earth", "percent":20}]},
        "312003200":{"mag%":20, "resist":[{"name":"light", "percent":20}]},
        "312003300":{"mag%":20, "resist":[{"name":"light", "percent":20}]},
        "310006800":{"mag%":20, "resist":[{"name":"dark", "percent":20}]},
        "310006900":{"mag%":20, "resist":[{"name":"dark", "percent":20}]},
        "302012000":{"atk%":40, "mag%":40},
        "302002600":{"hp%":20, "def%":50},
        "302002500":{"resist":[{"name":"fire", "percent":30},{"name":"ice", "percent":30},{"name":"lightning", "percent":30},{"name":"water", "percent":30},{"name":"earth", "percent":30},{"name":"wind", "percent":30},{"name":"light", "percent":30},{"name":"dark", "percent":30}]},
        "311005400":{"mp%":20,"spr%":40, "mpRefresh":5},
        "311002000":{"mp%":20,"spr%":50, "mpRefresh":7},
        "310006200":{"mp%":20,"mag%":40, "mpRefresh":5},
        "310002800":{"hp%":10, "mp%":10,"mag%":60},
        "309001900":{"atk%":60},
        "310004300":{"mag%":60},
        "301003000":{"atk%":60},
        "302005100":{"atk%":60},
        "302003900":{"atk%":60},
        "302006000":{"atk%":60},
        "303003700":{"atk%":60},
        "304003800":{"atk%":60},
        "304002800":{"atk%":60},
        "304001800":{"atk%":60},
        "312002100":{"atk%":60},
        "308003100":{"atk%":60},
        "308004400":{"atk%":60},
        "1100000176":{"atk%":60},
        "1100000177":{"atk%":60},
        "1100000179":{"atk%":60},
        "1100000174":{"atk%":60},
        "1100000152":{"atk%":60},
        "1100000157":{"atk%":60},
        "1100000156":{"atk%":60},
        "1100000158":{"atk%":60},
        "309002000":{"atk%":60},
        "1100000154":{"atk%":60},
        "313003400":{"atk%":40, "mag%":40},
        "1100000155":{"atk%":40, "mag%":40},
        "302012300":{"hp%":25, "atk%":25, "def%":25},
        "303008300":{"atk%":50},
        "304006000":{"atk%":30, "mag%":30, "lbFillRate":50},
        "310008500":{"atk%":30,"def%":30,"mag%":30,"spr%":30},
        "1100000452":{},
        "1100000448":{"killers":[{"name":"dragon","physical":30,"magical":30}, {"name":"machine","physical":30,"magical":30}]},
        "1100000449":{"killers":[{"name":"dragon","physical":30,"magical":30}, {"name":"machine","physical":30,"magical":30}]},
        "1100000450":{"dualWielding":{"atk":25, "mag":25}},
        "1100000451":{"dualWielding":{"atk":25, "mag":25}},
        "1100000433":{"atk%":30},
        "1100000425":{"mag%":30},
        "1100000410":{"atk%":15, "mag%":15, "dualWielding":{"atk":25, "mag":25}},
        "1100000446":{"singleWielding":{"atk":25, "mag":25, "accuracy": 25}, "resist":[{"name":"ice", "percent":30}]},
        "1100000298":{"atk%":15, "killers":[{"name":"demon","physical":50}]},
        "1100000384":{"def%":30, "spr%":30},
        "1100000471":{"atk%":30, "dualWielding":{"atk":25}},
        "1100000486":{"atk%":80, "dualWielding":{"atk":25}},
        "301001700":{"atk%":80},
        "303003400":{"atk%":80},
        "308004200":{"atk%":80},
        "313003600":{"atk%":80},
        "1100000490":{"mag%":60, "dualWielding":{"mag":25, "spr":25}},
        "303003600":{"atk%":60},
        "310008700":{"mag%":60},
        "314002800":{"atk%":60},
        "316001400":{"spr%":60},
        "1100000512":{"atk%":80, "evade":{"physical":20, "magical":20}},
        "310006700":{"mag%":80},
        "303001400":{"atk%":80},
        "313005600":{"atk%":80},
        "311004300":{"spr%":80},
        "1100000523":{"atk%":60, "singleWielding":{"atk":50,"accuracy":25}},
        "304003500":{"atk%":80},
        "1100000065":{"def%":60},
        "1100000294":{"spr%":60},
        "309002600":{"atk%":80},
        "1100000528": {"mag%":50, "spr%":30, "lbFillRate":50},
        "302006700":{"atk%":80},
        "304002200":{"atk%":80},
        "1100000558": {"def%":40, "spr%":40, "hp%":40},
        "1100000590": {"mag%":50, "killers":[{"name":"aquatic","magical":50}, {"name":"plant","magical":50}]},
        "1100000596": {"spr%":50, "mpRefresh": 5},
        "1100000617": {"atk%":60, "lbDamage":50},
        "1100000668": {"atk%":60, "lbDamage":50},
        "1100000542": {"mag%": 60, "singleWielding":{"mag":25}},
        "1100000596": {"spr%": 50, "mpRefresh":5},
        "1100000666": {"spr%": 50, "mpRefresh":5},
        "1100000599": {"atk%":80,  "lbFillRate":50},
        "1100000667": {"atk%":80,  "lbFillRate":50},
    },
    "hp_20": {"hp%":20}, "hp_15": {"hp%":15}, "hp_12": {"hp%":12}, "hp_10": {"hp%":10}, "hp_7": {"hp%":7}, "hp_5": {"hp%":5}, "hp_3": {"hp%":3}, "hp_1": {"hp%":1},
    "mp_20": {"mp%":20}, "mp_15": {"mp%":15}, "mp_12": {"mp%":12}, "mp_10": {"mp%":10}, "mp_7": {"mp%":7}, "mp_5": {"mp%":5}, "mp_3": {"mp%":3}, "mp_1": {"mp%":1},
    "atk_20": {"atk%":20}, "atk_15": {"atk%":15}, "atk_12": {"atk%":12}, "atk_10": {"atk%":10}, "atk_7": {"atk%":7}, "atk_5": {"atk%":5}, "atk_3": {"atk%":3}, "atk_1": {"atk%":1},
    "def_20": {"def%":20}, "def_15": {"def%":15}, "def_12": {"def%":12}, "def_10": {"def%":10}, "def_7": {"def%":7}, "def_5": {"def%":5}, "def_3": {"def%":3}, "def_1": {"def%":1},
    "mag_20": {"mag%":20}, "mag_15": {"mag%":15}, "mag_12": {"mag%":12}, "mag_10": {"mag%":10}, "mag_7": {"mag%":7}, "mag_5": {"mag%":5}, "mag_3": {"mag%":3}, "mag_1": {"mag%":1},
    "spr_20": {"spr%":20}, "spr_15": {"spr%":15}, "spr_12": {"spr%":12}, "spr_10": {"spr%":10}, "spr_7": {"spr%":7}, "spr_5": {"spr%":5}, "spr_3": {"spr%":3}, "spr_1": {"spr%":1},
    "autoRefresh_2": {"mpRefresh":5},"autoRefresh_1": {"mpRefresh":3},
    "autoFillLb_2": {"lbPerTurn":{"min":2,"max":2}},"autoFillLb_1": {"lbPerTurn":{"min":1,"max":1}},
    "reduceMp_2": {}, "reduceMp_1": {},
    "atk_mag_1": {"atk%":30, "mag%":30},
    "hp_def_1": {"hp%":20, "def%":20},
    "hp_spr_1": {"hp%":20, "spr%":20},
};

const itemEnhancementBySkillId = {
    "410001" : "hp_1",
    "410003" : "hp_3",
    "410005" : "hp_5",
    "410007" : "hp_7",
    "410010" : "hp_10",
    "410012" : "hp_12",
    "410015" : "hp_15",
    "100020" : "hp_20",
    "410101" : "mp_1",
    "410103" : "mp_3",
    "410105" : "mp_5",
    "410107" : "mp_7",
    "410110" : "mp_10",
    "410112" : "mp_12",
    "410115" : "mp_15",
    "100050" : "mp_20",
    "410201" : "atk_1",
    "410203" : "atk_3",
    "410205" : "atk_5",
    "410207" : "atk_7",
    "410210" : "atk_10",
    "410212" : "atk_12",
    "410215" : "atk_15",
    "100080" : "atk_20",
    "410301" : "def_1",
    "410303" : "def_3",
    "410305" : "def_5",
    "410307" : "def_7",
    "410310" : "def_10",
    "410312" : "def_12",
    "410315" : "def_15",
    "100140" : "def_20",
    "410401" : "mag_1",
    "410403" : "mag_3",
    "410405" : "mag_5",
    "410407" : "mag_7",
    "410410" : "mag_10",
    "410412" : "mag_12",
    "410415" : "mag_15",
    "100110" : "mag_20",
    "410501" : "spr_1",
    "410503" : "spr_3",
    "410505" : "spr_5",
    "410507" : "spr_7",
    "410510" : "spr_10",
    "410512" : "spr_12",
    "410515" : "spr_15",
    "100170" : "spr_20",
    "417000" : "autoRegen_1",
    "417010" : "autoRegen_2",
    "417020" : "autoRegen_3",
    "417030" : "autoRegen_4",
    "417040" : "autoRefresh_1",
    "417050" : "autoRefresh_2",
    "417060" : "autoProtect_1",
    "417070" : "autoProtect_2",
    "417080" : "autoProtect_3",
    "417090" : "autoProtect_4",
    "417100" : "autoProtect_5",
    "417110" : "autoShell_1",
    "417120" : "autoShell_2",
    "417130" : "autoShell_3",
    "417140" : "autoShell_4",
    "417150" : "autoShell_5",
    "916042": "autoFillLb_1",
    "916043": "autoFillLb_2",
    "916040": "reduceMp_1",
    "916041": "reduceMp_2",
    "916044": "atk_mag_1",
    "916045": "hp_def_1",
    "916046": "hp_spr_1",

    "451050": "special_1",
    "451054": "special_1",
    "451053": "special_1",
    "451056": "special_1",
    "451057": "special_1",
    "451055": "special_1",
    "451051": "special_1",
    "451060": "special_1",
    "450970": "special_1",
    "451000": "special_1",
    "450960": "special_1",
    "451010": "special_1",
    "450950": "special_1",
    "450990": "special_1",
    "450980": "special_1",
    "914050": "special_1",
    "914051": "special_1",
    "914052": "special_1",
    "451110": "special_1",
    "451090": "special_1",
    "451100": "special_1",
    "451080": "special_1",
    "914721": "special_1",
    "914719": "special_1",
    "914720": "special_1",
    "914713": "special_1",
    "914714": "special_1",
    "914715": "special_1",
    "914716": "special_1",
    "914717": "special_1",
    "914718": "special_1",
    "914844":"special_1",
    "914992":"special_1",
    "914987":"special_1",
    "914989":"special_1",
    "914988":"special_1",
    "914994":"special_1",
    "910993":"special_1",
    "914996":"special_1",
    "914997":"special_1",
    "914999":"special_1",
    "915001":"special_1",
    "915771":"special_1",
    "915966":"special_1",
    "916039":"special_1",
    "916269":"special_1",
    "915747":"special_1"
}

const skillIdByItemEnhancement = {
    "rares" :{
        "100065": {
          "id": 100065,
          "name": "MP +40%",
          "effects": "MP 40%"
        },
        "100091": {
          "id": 100091,
          "name": "ATK +40%",
          "effects": "ATK 40%"
        },
        "101240": {
          "id": 101240,
          "name": "High Tide",
          "effects": "LB gauge fill rate 100%"
        },
        "213520": {
          "id": 213520,
          "name": "HP +40%",
          "effects": "HP 40%"
        },
        "450800": {
          "id": 450800,
          "name": "Seal of Life and Power Lv. 3",
          "effects": "ATK/HP 15%"
        },
        "450810": {
          "id": 450810,
          "name": "Seal of Skill and Magic Lv. 3",
          "effects": "MAG/MP 15%"
        },
        "450820": {
          "id": 450820,
          "name": "Seal of Life and Arms Lv. 3",
          "effects": "DEF/HP 15%"
        },
        "450830": {
          "id": 450830,
          "name": "Seal of Skill and Soul Lv. 3",
          "effects": "SPR/MP 15%"
        },
        "450840": {
          "id": 450840,
          "name": "Seal of Life and Soul Lv. 3",
          "effects": "SPR/HP 15%"
        },
        "450850": {
          "id": 450850,
          "name": "Seal of Power and Magic Lv. 6",
          "effects": "ATK/MAG 30%"
        },
        "450860": {
          "id": 450860,
          "name": "Seal of Life and Skill Lv. 3",
          "effects": "HP/MP 15%"
        },
        "450870": {
          "id": 450870,
          "name": "Seal of Life and Power Lv. 4",
          "effects": "ATK/HP 20%"
        },
        "450880": {
          "id": 450880,
          "name": "Seal of Skill and Magic Lv. 4",
          "effects": "MAG/MP 20%"
        },
        "450890": {
          "id": 450890,
          "name": "Seal of Power and Magic Lv. 7",
          "effects": "ATK/MAG 35%"
        },
        "450900": {
          "id": 450900,
          "name": "Seal of Life and Arms Lv. 4",
          "effects": "DEF/HP 20%"
        },
        "450910": {
          "id": 450910,
          "name": "Seal of Life and Skill Lv. 4",
          "effects": "HP/MP 20%"
        },
        "450920": {
          "id": 450920,
          "name": "High Tide+",
          "effects": "LB gauge fill rate 150%"
        },
        "450930": {
          "id": 450930,
          "name": "Seal of Skill and Soul Lv. 4",
          "effects": "SPR/MP 20%"
        },
        "450940": {
          "id": 450940,
          "name": "Seal of Life and Soul Lv. 4",
          "effects": "SPR/HP 20%"
        },
        "914990": {
          "id": 914990,
          "name": "Projectile Prowess",
          "effects": "ATK/MAG 20%"
        },
        "916045": {
          "id": 916045,
          "name": "HP/DEF +20%",
          "effects": "DEF/HP 20%"
        },
        "916046": {
          "id": 916046,
          "name": "HP/SPR +20%",
          "effects": "SPR/HP 20%"
        }
    },
    "special_1": {
        "303007600":"451050",
        "304005600":"451054",
        "304005400":"451053",
        "304005500":"451053",
        "304005600":"451053",
        "308006000":"451056",
        "308006100":"451056",
        "313006300":"451057",
        "313006400":"451057",
        "302011400":"451055",
        "302011500":"451055",
        "312003200":"451051",
        "312003300":"451051",
        "310006800":"451052",
        "310006900":"451052",
        "302012000":"451060",
        "302002600":"450970",
        "302002500":"451000",
        "311005400":"450960",
        "311002000":"451010",
        "310006200":"450950",
        "310002800":"450990",
        "309001900":"450980",
        "303007400":"451050",
        "303007500":"451050",
        "310004300":"914050",
        "301003000":"914051",
        "302005100":"914051",
        "302003900":"914051",
        "302006000":"914051",
        "303003700":"914051",
        "304003800":"914051",
        "304002800":"914051",
        "304001800":"914051",
        "312002100":"914051",
        "308003100":"914051",
        "308004400":"914051",
        "1100000176":"914051",
        "1100000177":"914051",
        "1100000179":"914051",
        "1100000174":"914051",
        "1100000152":"914051",
        "1100000157":"914051",
        "1100000156":"914051",
        "1100000158":"914051",
        "309002000":"914051",
        "1100000154":"914051",
        "313003400":"914052",
        "1100000155":"914052",
        "302012300":"451110",
        "303008300":"451090",
        "304006000":"451100",
        "310008500":"451080",
        "1100000452":"914721",
        "1100000448":"914719",
        "1100000449":"914719",
        "1100000450":"914720",
        "1100000451":"914720",
        "1100000433":"914713",
        "1100000425":"914714",
        "1100000410":"914715",
        "1100000446":"914716",
        "1100000298":"914717",
        "1100000384":"914718",
        "1100000471":"914844",
        "1100000486":"914992",
        "301001700":"914987",
        "303003400":"914987",
        "308004200":"914987",
        "313003600":"914987",
        "1100000490":"914989",
        "303003600":"914051",
        "310008700":"914050",
        "314002800":"914051",
        "316001400":"914988",
        "1100000512":"914994",
        "310006700":"910993",
        "303001400":"914987",
        "313005600":"914987",
        "311004300":"914996",
        "1100000523":"914997",
        "304003500":"914987",
        "1100000065":"914999",
        "1100000294":"914988",
        "309002600":"914987",
        "1100000528": "915001",
        "302006700":"914987",
        "304002200":"914987",
        "1100000558": "915771",
        "1100000590":"915966",
        "1100000596": "916039",
        "1100000617": "916269",
    },
    "hp_20": "100020", "hp_15": "410015", "hp_12": "410012", "hp_10": "410010", "hp_7": "410007", "hp_5": "410005", "hp_3": "410003", "hp_1": "410001",
    "mp_20": "100050", "mp_15": "410115", "mp_12": "410112", "mp_10": "410110", "mp_7": "410107", "mp_5": "410105", "mp_3": "410103", "mp_1": "410101",
    "atk_20": "100080","atk_15": "410215", "atk_12": "410212", "atk_10": "410210", "atk_7": "410207", "atk_5": "410205", "atk_3": "410203", "atk_1": "410201",
    "def_20": "100140", "def_15": "410315", "def_12": "410312", "def_10": "410310", "def_7": "410307", "def_5": "410305", "def_3": "410303", "def_1": "410301",
    "mag_20": "100110", "mag_15": "410415", "mag_12": "410412", "mag_10": "410410", "mag_7": "410407", "mag_5": "410405", "mag_3": "410403", "mag_1": "410401",
    "spr_20": "100170", "spr_15": "410515", "spr_12": "410512", "spr_10": "410510", "spr_7": "410507", "spr_5": "410505", "spr_3": "410503", "spr_1": "410501",
    "autoRegen_4": "417030","autoRegen_3": "417020","autoRegen_2": "417010","autoRegen_1": "417000",
    "autoRefresh_2": "417050","autoRefresh_1": "417050",
    "autoProtect_5": "417100","autoProtect_4": "417090","autoProtect_3": "417080","autoProtect_2": "417070","autoProtect_1": "417060",
    "autoShell_5": "417150","autoShell_4": "417140","autoShell_3": "417130","autoShell_2": "417120","autoShell_1": "417110",
    "autoFillLb_2": "autoFillLb_2","autoFillLb_1": "autoFillLb_1",
    "reduceMp_2": "reduceMp_2", "reduceMp_1": "reduceMp_1",
    "atk_mag_1": "atk_mag_1",
    "hp_def_1": "hp_def_1",
    "hp_spr_1": "hp_spr_1",
};

const skillByItemEnhancement = {
    "autoProtect_1": {"id":"30092","name":"Protect (Lvl 1)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"def":10},"area":"ST","target":"ALLY"},"desc":"Increase DEF by 10% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoProtect_2": {"id":"30093","name":"Protect (Lvl 2)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"def":20},"area":"ST","target":"ALLY"},"desc":"Increase DEF by 20% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoProtect_3": {"id":"30094","name":"Protect (Lvl 3)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"def":30},"area":"ST","target":"ALLY"},"desc":"Increase DEF by 30% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoProtect_4": {"id":"30095","name":"Protect (Lvl 4)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"def":40},"area":"ST","target":"ALLY"},"desc":"Increase DEF by 40% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoProtect_5": {"id":"30096","name":"Protect (Lvl 5)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"def":50},"area":"ST","target":"ALLY"},"desc":"Increase DEF by 50% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoShell_1": {"id":"30142","name":"Shell (Lvl 1)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"spr":10},"area":"ST","target":"ALLY"},"desc":"Increase SPR by 10% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoShell_2": {"id":"30143","name":"Shell (Lvl 2)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"spr":20},"area":"ST","target":"ALLY"},"desc":"Increase SPR by 20% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoShell_3": {"id":"30144","name":"Shell (Lvl 3)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"spr":30},"area":"ST","target":"ALLY"},"desc":"Increase SPR by 30% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoShell_4": {"id":"30145","name":"Shell (Lvl 4)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"spr":40},"area":"ST","target":"ALLY"},"desc":"Increase SPR by 40% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoShell_5": {"id":"30146","name":"Shell (Lvl 5)","icon":"ability_77.png","effects":[{"effect":{"statsBuff":{"spr":50},"area":"ST","target":"ALLY"},"desc":"Increase SPR by 50% for this fight to one ally"}],"magic":"green","type":"ability"},
    "autoRegen1": {"id":"10126","name":"Regen (Lvl 1)","icon":"ability_4.png","effects":[{"effect":{"healOverTurn":{"base":200,"coef":1},"area":"ST","target":"ALLY"},"desc":"Restore 200 (+1x, Heal) HP per turn to one ally"}],"magic":"green","type":"ability"},
    "autoRegen2": {"id":"10127","name":"Regen (Lvl 2)","icon":"ability_4.png","effects":[{"effect":{"healOverTurn":{"base":600,"coef":1},"area":"ST","target":"ALLY"},"desc":"Restore 600 (+1x, Heal) HP per turn to one ally"}],"magic":"green","type":"ability"},
    "autoRegen3": {"id":"10128","name":"Regen (Lvl 3)","icon":"ability_4.png","effects":[{"effect":{"healOverTurn":{"base":1200,"coef":1},"area":"ST","target":"ALLY"},"desc":"Restore 1200 (+1x, Heal) HP per turn to one ally"}],"magic":"green","type":"ability"},
    "autoRegen4": {"id":"10129","name":"Regen (Lvl 4)","icon":"ability_4.png","effects":[{"effect":{"healOverTurn":{"base":1800,"coef":1},"area":"ST","target":"ALLY"},"desc":"Restore 1800 (+1x, Heal) HP per turn to one ally"}],"magic":"green","type":"ability"}
}

const typeListLiterals = {
    "dagger": "Dagger",
    "sword": "Sword",
    "greatSword": "Great Sword",
    "katana": "Katana",
    "staff": "Staff",
    "rod": "Rod",
    "bow": "Bow",
    "axe": "Axe",
    "hammer": "Hammer",
    "spear": "Spear",
    "harp": "Harp",
    "whip": "Whip",
    "throwing": "Throwing",
    "gun": "Gun",
    "mace": "Mace",
    "fist": "Fist",
    "lightShield": "Light Shield",
    "heavyShield": "Heavy Shield",
    "hat": "Hat",
    "helm": "Helm",
    "clothes": "Clothes",
    "lightArmor": "Light Armor",
    "heavyArmor": "Heavy Armor",
    "robe": "Robe", 
    "accessory": "Accessory",
    "materia": "Materia"
};

const esperNameById = {
  "1": "Siren",
  "2": "Ifrit",
  "3": "Shiva",
  "4": "Carbuncle",
  "5": "Diabolos",
  "6": "Golem",
  "7": "Ramuh",
  "8": "Titan",
  "9": "Tetra Sylphid",
  "10": "Odin",
  "11": "Lakshmi",
  "12": "Leviathan",
  "13": "Alexander",
  "14": "Phoenix",
  "15": "Bahamut",
  "16": "Fenrir",
  "17": "Anima",
  "18": "Asura",
  "19": "Kokuryu"
}

const chainFamilySkillName = {
    "BS": "Bolting Strike",
    "DR": "Divine Ruination",
    "AMoE":"Absolute Mirror of Equity",
    "Pd": "Piledriver",
    "QH": "Quick Hit",
    "OnS": "Onion Slice",
    "OcS": "Octaslash",
    "AR": "Aureole Ray",
    "GC": "Graviton Cannon",
    "SR": "Stardust Ray",
    "Cs": "Chainsaw",
    "KG": "Kingsglaive",
    "Tnd": "Tornado",
    "Fld": "Flood",
    "Frz": "Freeze",
    "CW": "Chaos Wave",
    "FB": "Fatal Barrage",
    "SoK": "Sword of King",
    "Dsd": "Disorder",
    "FP": "Firm Punch",
    "FE": "Free Energy",
    "MR": "Meteor Rain",
    "AZ": "Absolute Zero",
    "Ryu": "Ryujin",
    "CWA": "Chaos Wave Awakened",
    "AK": "Avalanche Kick",
    "BP": "Blade Prison",
    "TS": "Torrential Slash",
    "ExN": "Extreme Nova"
}

const importBoardConversion = [[0,0], [-1,-1], [0,-1], [-1,0], [1,0], [0,1], [1,1],
                        [-2,-2],[-1,-2],[0,-2],[-2,-1],[1,-1],[-2,0],[2,0],[-1,1],[2,1],[0,2],[1,2],[2,2],
                        [-3,-3],[-2,-3],[-1,-3],[0,-3],[-3,-2],[1,-2],[-3,-1],[2,-1],[-3,0],[3,0],[-2,1],[3,1],[-1,2],[3,2],[0,3],[1,3],[2,3],[3,3],
                        [-4,-3],[1,-3],[-4,-2],[2,-2],[-4,-1],[3,-1],[-4,0],[4,0],[-3,1],[4,1],[-2,2],[4,2],[-1,3],[4,3],[-4,-4],[-3,-4],[-2,-4],[-1,-4],[0,-4],[0,4],[1,4],[2,4],[3,4],[4,4]];

const categories = {
    "10000001": "Fire",
    "10000002": "Ice",
    "10000003": "Lightning",
    "10000004": "Water",
    "10000005": "Wind",
    "10000006": "Earth",
    "10000007": "Light",
    "10000008": "Dark",
    "20000001": "Attacker",
    "20000002": "Mage",
    "20000003": "Physical Tank",
    "20000004": "Magic Tank",
    "20000005": "Healer",
    "20000006": "Support",
    "20000007": "Breaker",
    "30010001": "FFI",
    "30010002": "FFII",
    "30010003": "FFIII",
    "30010004": "FFIV",
    "30010005": "FFV",
    "30010006": "FFVI",
    "30010007": "FFVII",
    "30010008": "FFVIII",
    "30010009": "FFIX",
    "30010010": "FFX",
    "30010011": "FFXI",
    "30010012": "FFXII",
    "30010013": "FFXIII",
    "30010014": "FFXIV",
    "30010015": "FFXV",
    "30011001": "FFBE",
    "30011002": "FFT",
    "30011003": "FF TYPE-0",
    "30011012": "Emblem of Roto",
    "30020001": "Another World",
    "40000001": "FFBE S1",
    "40000002": "FFBE S2",
    "40000003": "FFBE S3",
    "40000004": "FFBE S4",
    "40000011": "Bestowed Power",
    "40000012": "Anniversary (JP)",
    "40000013": "Dark Lineage",
    "40000014": "Evocation",
    "40000015": "Rewards",
    "40000016": "Mana Series",
    "40000018": "Blessing of the Crystals",
    "40000019": "The Rebellion",
    "90000001": "Clash of Wills"
}