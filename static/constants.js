const baseStats = ['hp','mp','atk','def','mag','spr'];
const elementList = ['fire','ice','lightning','water','wind','earth','light','dark'];
const ailmentList = ['poison','blind','sleep','silence','paralysis','confuse','disease','petrification','death', "charm", "stop"];
const ailmentListWithoutDeath = ['poison','blind','sleep','silence','paralysis','confuse','disease','petrification'];
const disablingAilmentList = ['sleep','paralysis','confuse','petrification'];
const killerList = ['aquatic','beast','bird','bug','demon','dragon','human','machine','plant','undead','stone','spirit'];
const typeList = ["dagger", "sword", "greatSword", "katana", "staff", "rod", "bow", "axe", "hammer", "spear", "harp", "whip", "throwing", "gun", "mace", "fist", "lightShield", "heavyShield", "hat", "helm", "clothes", "lightArmor", "heavyArmor", "robe",  "accessory", "materia", "visionCard"];
const typeListWithEsper = typeList.concat(["esper"]);
const weaponList = ["dagger", "sword", "greatSword", "katana", "staff", "rod", "bow", "axe", "hammer", "spear", "harp", "whip", "throwing", "gun", "mace", "fist"];
const shieldList = ["lightShield", "heavyShield"];
const headList = ["hat", "helm"];
const bodyList = ["clothes", "robe", "lightArmor", "heavyArmor"];
const accessList = ["shop","chest","quest","trial","chocobo","event","colosseum","key","TMR-1*","TMR-2*","TMR-3*","TMR-4*","TMR-5*", "STMR","recipe-shop","recipe-chest","recipe-quest","recipe-event","recipe-colosseum","recipe-key","trophy","recipe-trophy","premium"];
const typeCategories = {"dagger":"Category:Daggers", "sword":"Category:Swords", "greatSword":"Category:Great_Swords", "katana":"Category:Katanas", "staff":"Category:", "rod":"Category:Rods", "bow":"Category:Bows", "axe":"Category:Axes", "hammer":"Category:Hammers", "spear":"Category:Spears", "harp":"Category:Harps", "whip":"Category:Whips", "throwing":"Category:Throwing_Weapons", "gun":"Category:Guns", "mace":"Category:Maces", "fist":"Category:Fists", "lightShield":"Category:Light_Shields", "heavyShield":"Category:Heavy_Shields", "hat":"Category:Hats", "helm":"Category:Helms", "clothes":"Category:Clothes", "lightArmor":"Category:Light_Armors", "heavyArmor":"Category:Heavy_Armors", "robe":"Category:Robes", "accessory":"Category:Accessories", "materia":"Ability_Materia"};
const percentValues = {
    "hp": "hp%",
    "mp": "mp%",
    "atk": "atk%",
    "def": "def%",
    "mag": "mag%",
    "spr": "spr%"
};
const goalValuesCaract = {
    "physicalDamage":                   {"statsToMaximize":["atk"], "type": "physical"},
    "magicalDamage":                    {"statsToMaximize":["mag"], "type": "magical"},
    "hybridDamage":                     {"statsToMaximize":["atk","mag"], "type": "physical"},
    "jumpDamage":                       {"statsToMaximize":["atk"], "type": "physical"},
    "magDamageWithPhysicalMecanism":    {"statsToMaximize":["mag"], "type": "physical"},
    "sprDamageWithPhysicalMecanism":    {"statsToMaximize":["spr"], "type": "physical"},
    "defDamageWithPhysicalMecanism":    {"statsToMaximize":["def"], "type": "physical"},
    "atkDamageWithMagicalMecanism":     {"statsToMaximize":["atk"], "type": "magical"},
    "sprDamageWithMagicalMecanism":     {"statsToMaximize":["spr"], "type": "magical"},
    "atkDamageWithFixedMecanism":       {"statsToMaximize":["atk"], "type": "none"},
    "physicalDamageMultiCast":          {"statsToMaximize":["atk"], "type": "physical", "multicast":true},
    "magDamageWithPhysicalMecanismMultiCast":          {"statsToMaximize":["mag"], "type": "physical", "multicast":true},
    "sprDamageWithPhysicalMecanismMultiCast":          {"statsToMaximize":["spr"], "type": "physical", "multicast":true},
    "defDamageWithPhysicalMecanismMultiCast":          {"statsToMaximize":["def"], "type": "physical", "multicast":true},
    "atkDamageWithMagicalMecanismMultiCast":           {"statsToMaximize":["atk"], "type": "magical", "multicast":true},
    "fixedDamageWithPhysicalMecanism":  {"statsToMaximize":[], "type": "physical"},
    "summonerSkill":                    {"statsToMaximize":["mag","spr"], "type": "none"},
};
const itemEnhancementLabels = {
    "rare_3":{
        "dagger": "+100% LB fill rate", 
        "sword": "HP/ATK +15%", 
        "greatSword": "HP/ATK +15%", 
        "katana": "HP/ATK +15%", 
        "staff": "SPR/MP +15%", 
        "rod": "MAG/MP +15%", 
        "bow": "ATK/MAG +30%", 
        "axe": "ATK +30%", 
        "hammer": "HP/DEF +15%", 
        "spear": "HP/ATK +15%", 
        "harp": "HP/SPR +15%", 
        "whip": "MP +30%", 
        "throwing": "HP/MP +15%", 
        "gun": "ATK +30%", 
        "mace": "HP +30%", 
        "fist": "HP/ATK +15%",
        "fake": "Rare"
    },
    "rare_4":{
        "dagger": "+150% LB fill rate",
        "sword": "HP/ATK +20%",
        "greatSword": "HP/ATK +20%",
        "katana": "HP/ATK +20%",
        "staff": "SPR/MP +20%",
        "rod": "MAG/MP +20%",
        "bow": "ATK/MAG +35%",
        "axe": "ATK +40%",
        "hammer": "HP/DEF +20%",
        "spear": "HP/ATK +20%",
        "harp": "HP/SPR +20%",
        "whip": "MP +40%",
        "throwing": "HP/MP +20%",
        "gun": "ATK +40%",
        "mace": "HP +40%",
        "fist": "HP/ATK +20%",
        "fake": "Rare+"
    },
    "special_1": {
        "303007600":"ATK/Fire resist +20%",
        "304005600":"ATK/Ice resist +20%",
        "304005300":"ATK/Lightning resist +20%",
        "308006100":"MAG/Water resist +20%",
        "313006400":"ATK/Wind resist +20%",
        "302011500":"ATK/Earth resist +20%",
        "312003300":"MAG/Light resist +20%",
        "310006900":"MAG/Dark resist +20%",
        "302012000":"ATK/MAG +40%"
    },
    "hp_15": "HP +15%", "hp_12": "HP +12%", "hp_10": "HP +10%", "hp_7": "HP +7%", "hp_5": "HP +5%", "hp_3": "HP +3%", "hp_1": "HP +1%",
    "mp_15": "MP +15%", "mp_12": "MP +12%", "mp_10": "MP +10%", "mp_7": "MP +7%", "mp_5": "MP +5%", "mp_3": "MP +3%", "mp_1": "MP +1%",
    "atk_15": "ATK +15%", "atk_12": "ATK +12%", "atk_10": "ATK +10%", "atk_7": "ATK +7%", "atk_5": "ATK +5%", "atk_3": "ATK +3%", "atk_1": "ATK +1%",
    "def_15": "DEF +15%", "def_12": "DEF +12%", "def_10": "DEF +10%", "def_7": "DEF +7%", "def_5": "DEF +5%", "def_3": "DEF +3%", "def_1": "DEF +1%",
    "mag_15": "MAG +15%", "mag_12": "MAG +12%", "mag_10": "MAG +10%", "mag_7": "MAG +7%", "mag_5": "MAG +5%", "mag_3": "MAG +3%", "mag_1": "MAG +1%",
    "spr_15": "SPR +15%", "spr_12": "SPR +12%", "spr_10": "SPR +10%", "spr_7": "SPR +7%", "spr_5": "SPR +5%", "spr_3": "SPR +3%", "spr_1": "SPR +1%",
    "autoRegen_4": "Auto-Regen 4","autoRegen_3": "Auto-Regen 3","autoRegen_2": "Auto-Regen 2","autoRegen_1": "Auto-Regen 1",
    "autoRefresh_2": "Auto-Refresh 2","autoRefresh_1": "Auto-Refresh 1",
    "autoProtect_5": "Auto-Protect 5","autoProtect_4": "Auto-Protect 4","autoProtect_3": "Auto-Protect 3","autoProtect_2": "Auto-Protect 2","autoProtect_1": "Auto-Protect 1",
    "autoShell_5": "Auto-Shell 5","autoShell_4": "Auto-Shell 4","autoShell_3": "Auto-Shell 3","autoShell_2": "Auto-Shell 2","autoShell_1": "Auto-Shell 1",
};
const itemEnhancementAbilities = {
    "rare_3":{
        "dagger": {"lbFillRate":100},
        "sword": {"hp%":15, "atk%":15},
        "greatSword": {"hp%":15, "atk%":15},
        "katana": {"hp%":15, "atk%":15},
        "staff": {"mp%":15, "spr%":15},
        "rod": {"mp%":15, "mag%":15},
        "bow": {"atk%":30, "mag%":30},
        "axe": {"atk%":30},
        "hammer": {"hp%":15, "def%":15},
        "spear": {"hp%":15, "atk%":15},
        "harp": {"hp%":15, "spr%":15},
        "whip": {"mp%":30},
        "throwing": {"hp%":15, "mp%":15},
        "gun": {"atk%":30},
        "mace": {"hp%":30},
        "fist": {"hp%":15, "atk%":15},
        "fake": {}
    },
    "rare_4":{
        "dagger": {"lbFillRate":150},
        "sword": {"hp%":20, "atk%":20},
        "greatSword": {"hp%":20, "atk%":20},
        "katana": {"hp%":20, "atk%":20},
        "staff": {"mp%":20, "spr%":20},
        "rod": {"mp%":20, "mag%":20},
        "bow": {"atk%":35, "mag%":35},
        "axe": {"atk%":40},
        "hammer": {"hp%":20, "def%":20},
        "spear": {"hp%":20, "atk%":20},
        "harp": {"hp%":20, "spr%":20},
        "whip": {"mp%":40},
        "throwing": {"hp%":20, "mp%":20},
        "gun": {"atk%":40},
        "mace": {"hp%":40},
        "fist": {"hp%":20, "atk%":20},
        "fake": {}
    },
    "special_1": {
        "303007600":{"atk%":20, "resist":[{"name":"fire", "percent":20}]},
        "304005600":{"atk%":20, "resist":[{"name":"ice", "percent":20}]},
        "304005300":{"atk%":20, "resist":[{"name":"lightning", "percent":20}]},
        "308006100":{"mag%":20, "resist":[{"name":"water", "percent":20}]},
        "313006400":{"atk%":20, "resist":[{"name":"wind", "percent":20}]},
        "302011500":{"atk%":20, "resist":[{"name":"earth", "percent":20}]},
        "312003300":{"mag%":20, "resist":[{"name":"light", "percent":20}]},
        "310006900":{"mag%":20, "resist":[{"name":"dark", "percent":20}]},
        "302012000":{"atk%":40, "mag%":40}
    },
    "hp_15": {"hp%":15}, "hp_12": {"hp%":12}, "hp_10": {"hp%":10}, "hp_7": {"hp%":7}, "hp_5": {"hp%":5}, "hp_3": {"hp%":3}, "hp_1": {"hp%":1},
    "mp_15": {"mp%":15}, "mp_12": {"mp%":12}, "mp_10": {"mp%":10}, "mp_7": {"mp%":7}, "mp_5": {"mp%":5}, "mp_3": {"mp%":3}, "mp_1": {"mp%":1},
    "atk_15": {"atk%":15}, "atk_12": {"atk%":12}, "atk_10": {"atk%":10}, "atk_7": {"atk%":7}, "atk_5": {"atk%":5}, "atk_3": {"atk%":3}, "atk_1": {"atk%":1},
    "def_15": {"def%":15}, "def_12": {"def%":12}, "def_10": {"def%":10}, "def_7": {"def%":7}, "def_5": {"def%":5}, "def_3": {"def%":3}, "def_1": {"def%":1},
    "mag_15": {"mag%":15}, "mag_12": {"mag%":12}, "mag_10": {"mag%":10}, "mag_7": {"mag%":7}, "mag_5": {"mag%":5}, "mag_3": {"mag%":3}, "mag_1": {"mag%":1},
    "spr_15": {"spr%":15}, "spr_12": {"spr%":12}, "spr_10": {"spr%":10}, "spr_7": {"spr%":7}, "spr_5": {"spr%":5}, "spr_3": {"spr%":3}, "spr_1": {"spr%":1},
    "autoRefresh_2": {"mpRefresh":5},"autoRefresh_1": {"mpRefresh":3}
};

const itemEnhancementBySkillId = {
    "410001" : "hp_1",
    "410003" : "hp_3",
    "410005" : "hp_5",
    "410007" : "hp_7",
    "410010" : "hp_10",
    "410012" : "hp_12",
    "410015" : "hp_15",
    "410101" : "mp_1",
    "410103" : "mp_3",
    "410105" : "mp_5",
    "410107" : "mp_7",
    "410110" : "mp_10",
    "410112" : "mp_12",
    "410115" : "mp_15",
    "410201" : "atk_1",
    "410203" : "atk_3",
    "410205" : "atk_5",
    "410207" : "atk_7",
    "410210" : "atk_10",
    "410212" : "atk_12",
    "410215" : "atk_15",
    "410301" : "def_1",
    "410303" : "def_3",
    "410305" : "def_5",
    "410307" : "def_7",
    "410310" : "def_10",
    "410312" : "def_12",
    "410315" : "def_15",
    "410401" : "mag_1",
    "410403" : "mag_3",
    "410405" : "mag_5",
    "410407" : "mag_7",
    "410410" : "mag_10",
    "410412" : "mag_12",
    "410415" : "mag_15",
    "410501" : "spr_1",
    "410503" : "spr_3",
    "410505" : "spr_5",
    "410507" : "spr_7",
    "410510" : "spr_10",
    "410512" : "spr_12",
    "410515" : "spr_15",
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
    "450800": "rare_3", // ATK/HP
    "450810": "rare_3", // MAG/MP
    "450820": "rare_3", // DEF/HP
    "450830": "rare_3", // SPR/MP
    "450840": "rare_3", // HP/SPR
    "450850": "rare_3", // ATK/MAG +30%
    "450860": "rare_3", // HP/MP
    "410230": "rare_3", // ATK +30%
    "410130": "rare_3", // MP +30%
    "410030": "rare_3", // HP +30%
    "101240": "rare_3", // Hight Tide
    "100090": "rare_3", // ATK +30%
    "450870": "rare_4", // ATK/HP
    "450880": "rare_4", // PM/MAG
    "450890": "rare_4", // ATK/MAG +35%
    "450900": "rare_4", // DEF/HP
    "450910": "rare_4", // HP/MP
    "450920": "rare_4", // High Tide+
    "450930": "rare_4", // MP/SPR
    "450940": "rare_4", // SPR/HP
    "410240": "rare_4", // ATK +40%
    "410140": "rare_4", // MP +40%
    "410040": "rare_4", // HP +40%
    "910339": "rare_4", // ATK +40%
    "451050": "special_1",
    "451054": "special_1",
    "451053": "special1",
    "451056": "special_1",
    "451057": "special1",
    "451055": "special_1",
    "451051": "special_1",
    "451060": "special_1",
}  

const skillIdByItemEnhancement = {
    "rare_3":{
        "dagger": "101240", 
        "sword": "450800", 
        "greatSword": "450800", 
        "katana": "450800", 
        "staff": "450830", 
        "rod": "450810", 
        "bow": "450850", 
        "axe": "410230", 
        "hammer": "450820", 
        "spear": "450800", 
        "harp": "450840", 
        "whip": "410130", 
        "throwing": "450860", 
        "gun": "410130", 
        "mace": "410030", 
        "fist": "450800"
    },
    "rare_4":{
        "dagger": "450920",
        "sword": "450870",
        "greatSword": "450870",
        "katana": "450870",
        "staff": "450930",
        "rod": "450880",
        "bow": "450890",
        "axe": "410240",
        "hammer": "450900",
        "spear": "450870",
        "harp": "450940",
        "whip": "410140",
        "throwing": "450910",
        "gun": "410240",
        "mace": "410040",
        "fist": "450870"
    },
    "special_1": {
        "303007600":"451050",
        "304005600":"451054",
        "304005500":"451053",
        "308006100":"451056",
        "313006400":"451057",
        "302011500":"451055",
        "312003300":"451051",
        "310006900":"451052",
        "302012000":"451060"
    },
    "hp_15": "410015", "hp_12": "410012", "hp_10": "410010", "hp_7": "410007", "hp_5": "410005", "hp_3": "410003", "hp_1": "410001",
    "mp_15": "410115", "mp_12": "410112", "mp_10": "410110", "mp_7": "410107", "mp_5": "410105", "mp_3": "410103", "mp_1": "410101",
    "atk_15": "410215", "atk_12": "410212", "atk_10": "410210", "atk_7": "410207", "atk_5": "410205", "atk_3": "410203", "atk_1": "410201",
    "def_15": "410315", "def_12": "410312", "def_10": "410310", "def_7": "410307", "def_5": "410305", "def_3": "410303", "def_1": "410301",
    "mag_15": "410415", "mag_12": "410412", "mag_10": "410410", "mag_7": "410407", "mag_5": "410405", "mag_3": "410403", "mag_1": "410401",
    "spr_15": "410515", "spr_12": "410512", "spr_10": "410510", "spr_7": "410507", "spr_5": "410505", "spr_3": "410503", "spr_1": "410501",
    "autoRegen_4": "417030","autoRegen_3": "417020","autoRegen_2": "417010","autoRegen_1": "417000",
    "autoRefresh_2": "417050","autoRefresh_1": "417050",
    "autoProtect_5": "417100","autoProtect_4": "417090","autoProtect_3": "417080","autoProtect_2": "417070","autoProtect_1": "417060",
    "autoShell_5": "417150","autoShell_4": "417140","autoShell_3": "417130","autoShell_2": "417120","autoShell_1": "417110",
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

const typeListLitterals = {
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
  "17": "Anima"
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
}

const importBoardConversion = [[0,0], [-1,-1], [0,-1], [-1,0], [1,0], [0,1], [1,1],
                        [-2,-2],[-1,-2],[0,-2],[-2,-1],[1,-1],[-2,0],[2,0],[-1,1],[2,1],[0,2],[1,2],[2,2],
                        [-3,-3],[-2,-3],[-1,-3],[0,-3],[-3,-2],[1,-2],[-3,-1],[2,-1],[-3,0],[3,0],[-2,1],[3,1],[-1,2],[3,2],[0,3],[1,3],[2,3],[3,3],
                        [-4,-3],[1,-3],[-4,-2],[2,-2],[-4,-1],[3,-1],[-4,0],[4,0],[-3,1],[4,1],[-2,2],[4,2],[-1,3],[4,3],[-4,-4],[-3,-4],[-2,-4],[-1,-4],[0,-4],[0,4],[1,4],[2,4],[3,4],[4,4]];
