import {
    warriorIcon
} from "./icons"

// warrior skills
import bodyArmorIcon from "../assets/images/skills/warrior/bodyarmor.jpg"
import bulkupIcon from "../assets/images/skills/warrior/bulkup.jpg"
import bullDozeIcon from "../assets/images/skills/warrior/bulldoze.jpg"
import burningRageIcon from "../assets/images/skills/warrior/burningrage.jpg"
import burningUpIcon from "../assets/images/skills/warrior/burningup.jpg"
import concentrationIcon from "../assets/images/skills/warrior/concentration.jpg"
import dabombIcon from "../assets/images/skills/warrior/dabomb.jpg"
import dualStrengthIcon from "../assets/images/skills/warrior/dualstrength.jpg"
import elementalBulkIcon from "../assets/images/skills/warrior/elementalbulk.jpg"
import emberflashIcon from "../assets/images/skills/warrior/emberflash.jpg"
import engageIcon from "../assets/images/skills/warrior/engage.jpg"
import fireBattleIcon from "../assets/images/skills/warrior/firebattle.jpg"
import frenzyIcon from "../assets/images/skills/warrior/frenzy.jpg"
import hardenIcon from "../assets/images/skills/warrior/harden.jpg"
import hardenedStrikeIcon from "../assets/images/skills/warrior/hardenedstrike.jpg"
import impressIcon from "../assets/images/skills/warrior/impress.jpg"
import ironmanIcon from "../assets/images/skills/warrior/ironman.jpg"
import lastStandIcon from "../assets/images/skills/warrior/laststand.jpg"
import lifeBloodIcon from "../assets/images/skills/warrior/lifeblood.jpg"
import madDogIcon from "../assets/images/skills/warrior/maddog.jpg"
import naturesResistIcon from "../assets/images/skills/warrior/naturesresist.jpg"
import psnHexIcon from "../assets/images/skills/warrior/psnhex.jpg"
import psnTipIcon from "../assets/images/skills/warrior/psntip.jpg"
import reflectionRouletteIcon from "../assets/images/skills/warrior/reflectionroulette.jpg"
import refueledIcon from "../assets/images/skills/warrior/refueled.jpg"
import shoutIcon from "../assets/images/skills/warrior/shout.jpg"
import stonekinIcon from "../assets/images/skills/warrior/stoneskin.jpg"
import toughIcon from "../assets/images/skills/warrior/tough.jpg"
import toxicSpitIcon from "../assets/images/skills/warrior/toxicspit.jpg"
import woolyCoatIcon from "../assets/images/skills/warrior/woolycoat.jpg"

import treebg1 from '../assets/images/skills/warrior/treebg1.jpg'
import treebg2 from '../assets/images/skills/warrior/treebg2.jpg'
import treebg3 from '../assets/images/skills/warrior/treebg3.jpg'


export default {
    "name": "warrior",
    "icon": warriorIcon,
    "specializations": [
        {
            "name": "1",
            "background": treebg1,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w1",
                            "name": "Ember Flash",
                            "description": (min,max) => `Add ${min} Burn Damage to next Attack`,
                            "icon": emberflashIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(5 + Math.max(slvl - 1, 0)) + (lvl * (0.1 + 0.04 * slvl)),(5 + Math.max(slvl - 1, 0)) + (lvl * (0.1 + 0.04 * slvl))]
                        },
                        {
                            "id": "w2",
                            "name": "Mad Dog",
                            "description": (min,max) => `Next Melee Attack increases one random Weapon Damage Type by ${min}%`,
                            "icon": madDogIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(5 + Math.max(slvl - 1, 0)) * 10,(5 + Math.max(slvl - 1, 0)) * 10]
                        },
                        {
                            "id": "w3",
                            "name": "Toxic Spit",
                            "description": (min,max) => `Deal ${min} Acid Damage to Enemy`,
                            "icon": toxicSpitIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(5 + Math.max(slvl - 1, 0)) + ((0.08 + (0.04 * slvl)) * lvl),(5 + Math.max(slvl - 1, 0)) + ((0.08 + (0.04 * slvl)) * lvl)]
                        }
                    ]
                },
                {
                    "points": 5,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w4",
                            "name": "Burning Rage",
                            "description": (min,max) => `Next Melee Attack increases Weapon Fire Damage by ${min}%`,
                            "icon": burningRageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(5 + Math.max(slvl - 1, 0)) * 10,(5 + Math.max(slvl - 1, 0)) * 10]
                        },
                        {
                            "id": "w5",
                            "name": "Bulldoze",
                            "description": (min,max) => `If your Enemy uses Counter this Turn, Stagger them`,
                            "icon": bullDozeIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "w6",
                            "name": "Poison Tipped",
                            "description": (min,max) => `Add 7 Venom Damage to Next Attack`,
                            "icon": psnTipIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(7 + Math.max(slvl - 1, 0)) + ((0.1 + (0.06 * Math.max(slvl - 1, 0))) * lvl),(7 + Math.max(slvl - 1, 0)) + ((0.1 + (0.06 * Math.max(slvl - 1, 0))) * lvl)]
                        }
                    ]
                },
                {
                    "points": 10,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w7",
                            "name": "Fire Battle",
                            "description": (min,max) => `Deal (${min}% Str-Enemy Str) Burn Damage to Enemy (Can't be negative)`,
                            "icon": fireBattleIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((8 + Math.max(slvl - 1, 0)) * 10, 100),Math.min((8 + Math.max(slvl - 1, 0)) * 10, 100)]
                        },
                        {
                            "id": "w8",
                            "name": "Da Bomb",
                            "description": (min,max) => `Next Melee Attack increases Weapon Damage ${min}%`,
                            "icon": dabombIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((2 + Math.max(slvl - 1, 0)) * 10, 50),Math.min((8 + Math.max(slvl - 1, 0)) * 10, 50)]
                        },
                        {
                            "id": "w9",
                            "name": "Poison Hex",
                            "description": (min,max) => `Enemy takes ${min}% more Poison Damage Next Turn`,
                            "icon": psnHexIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((35 + Math.max(slvl - 1, 0) * 7),61),Math.min((35 + Math.max(slvl - 1, 0) * 7),61)]
                        }
                    ]
                },
                {
                    "points": 15,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w10",
                            "name": "Shout",
                            "description": (min,max) => `Lower Enemy Defense by ${75}% This Turn`,
                            "icon": shoutIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [75,75]
                        }
                    ]
                }
            ]
        },
        {
            "name": "2",
            "background": treebg2,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w11",
                            "name": "Wooly Coat",
                            "description": (min,max) => `Gain ${min}% Cold Resist Until the end of Next Turn`,
                            "icon": woolyCoatIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [10 + Math.max(slvl - 1, 0) * 5,10 + Math.max(slvl - 1, 0) * 5]
                        },
                        {
                            "id": "w12",
                            "name": "Impress",
                            "description": (min,max) => `If you successfully countered this Turn, Heal ${min}% Max Life`,
                            "icon": impressIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((3 + Math.max(slvl - 1, 0)), 5),Math.min((3 + Math.max(slvl - 1, 0)), 5)]
                        },
                        {
                            "id": "w13",
                            "name": "Hardened Strike",
                            "description": (min,max) => `If you Attack First this Turn, increase your Defense by ${min}% until end of Turn`,
                            "icon": hardenedStrikeIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((20 + Math.max(slvl - 1, 0) * 5), 30),Math.min((20 + Math.max(slvl - 1, 0) * 5), 30)]
                        }
                    ]
                },
                {
                    "points": 5,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w14",
                            "name": "Burning Up",
                            "description": (min,max) => `You Cannot be Frozen for ${min} Turns`,
                            "icon": burningUpIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((1 + Math.max(slvl - 1, 0)), 3),Math.min((1 + Math.max(slvl - 1, 0)), 3)]
                        },
                        {
                            "id": "w15",
                            "name": "Concentration",
                            "description": (min,max) => `Your Next Action cannot be Countered or Interrupted`,
                            "icon": concentrationIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "w16",
                            "name": "Harden",
                            "description": (min,max) => `Your Shield gains ${min}% More Elemental Defense`,
                            "icon": hardenIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(1 + Math.max(slvl - 1, 0)) * 10,(1 + Math.max(slvl - 1, 0)) * 10]
                        }
                    ]
                },
                {
                    "points": 10,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w17",
                            "name": "Elemental Bulk",
                            "description": (min,max) => `Gain 20% All Resist until the end of Turn`,
                            "icon": elementalBulkIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 3),(10 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "w18",
                            "name": "Bulk Up",
                            "description": (min,max) => `Increase Defense by ${min}% Until the end of Turn`,
                            "icon": bulkupIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [50,50]
                        },
                        {
                            "id": "w19",
                            "name": "Reflection Roulette",
                            "description": (min,max) => `Reflect ${min}% of a random Damage Type this Turn`,
                            "icon": reflectionRouletteIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(25 + Math.max(slvl - 1, 0) * 5),(25 + Math.max(slvl - 1, 0) * 5)]
                        }
                    ]
                },
                {
                    "points": 15,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w20",
                            "name": "Engage",
                            "description": (min,max) => `All Enemies Heals/Buffs apply to you as well until the end of Turn`,
                            "icon": engageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(30 + Math.max(slvl - 1, 0) * 10),(30 + Math.max(slvl - 1, 0) * 10)]
                        },
                    ]
                }
            ]
        },
        {
            "name": "3",
            "background": treebg3,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w21",
                            "name": "Ironman",
                            "description": (min,max) => `Gain 5 Strength`,
                            "icon": ironmanIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(3 + Math.max(slvl - 1, 0) * 3),(3 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "w22",
                            "name": "Tough",
                            "description": (min,max) => `Decrease Chance to Bleed/Stagger by ${min}%`,
                            "icon": toughIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((30 + Math.max(slvl - 1, 0) * 10), 50),Math.min((30 + Math.max(slvl - 1, 0) * 10), 50)]
                        },
                        {
                            "id": "w23",
                            "name": "Frenzy",
                            "description": (min,max) => `When Attacking with Matching Weapon Bases Gain ${min} Attack Speed`,
                            "icon": frenzyIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 5),(10 + Math.max(slvl - 1, 0) * 5)]
                        }
                    ]
                },
                {
                    "points": 5,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w24",
                            "name": "Body Armor",
                            "description": (min,max) => `All Armor provides ${min}% More Defense`,
                            "icon": bodyArmorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(50 + Math.max(slvl - 1, 0) * 10),(50 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "w25",
                            "name": "Stone Skin",
                            "description": (min,max) => `Gain ${min} Defense`,
                            "icon": stonekinIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(4 + Math.max(slvl - 1, 0) * 4),(4 + Math.max(slvl - 1, 0) * 4)]
                        },
                        {
                            "id": "w26",
                            "name": "Refueled",
                            "description": (min,max) => `When you take 0 damage, Heal ${min}% Max Life`,
                            "icon": refueledIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(1 + Math.max(slvl - 1, 0)),(1 + Math.max(slvl - 1, 0))]
                        }
                    ]
                },
                {
                    "points": 10,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w27",
                            "name": "Life Blood",
                            "description": (min,max) => `Gain ${min} Life`,
                            "icon": lifeBloodIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 5),(10 + Math.max(slvl - 1, 0) * 5)]
                        },
                        {
                            "id": "w28",
                            "name": "Nature's Resist",
                            "description": (min,max) => `Gain ${min}% All Resist`,
                            "icon": naturesResistIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(1 + Math.max(slvl - 1, 0)),(1 + Math.max(slvl - 1, 0))]
                        },
                        {
                            "id": "w29",
                            "name": "Last Stand",
                            "description": (min,max) => `Gain ${min}% More Damage when under 10% Max Life`,
                            "icon": lastStandIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(15 + Math.max(slvl - 1, 0) * 5),(15 + Math.max(slvl - 1, 0) * 5)]
                        }
                    ]
                },
                {
                    "points": 15,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w30",
                            "name": "Dual Strength",
                            "description": (min,max) => `When Attacking with Matching Weapon Bases Gain ${min}% More Damage`,
                            "icon": dualStrengthIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 2.5),(10 + Math.max(slvl - 1, 0) * 2.5)]
                        },
                    ]
                }
            ]
        }
    ]
}