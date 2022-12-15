import {
    warriorIcon,
    treeBg
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


export default {
    "name": "warrior",
    "icon": warriorIcon,
    "specializations": [
        {
            "name": "1",
            "background": treeBg,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w1",
                            "name": "Ember Flash",
                            "description": "Add 7 Burn Damage to next Attack",
                            "icon": emberflashIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w2",
                            "name": "Mad Dog",
                            "description": "Next Melee Attack randomly doubles one Weapon Damage Type",
                            "icon": madDogIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w3",
                            "name": "Toxic Spit",
                            "description": "Deal 5 Acid Damage to Enemy",
                            "icon": toxicSpitIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "Next Melee Attack Doubles Weapon Fire Damage",
                            "icon": burningRageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w5",
                            "name": "Bulldoze",
                            "description": "If your Enemy uses Counter this Turn, Stagger them",
                            "icon": bullDozeIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w6",
                            "name": "Poison Tipped",
                            "description": "Add 7 Venom Damage to Next Attack",
                            "icon": psnTipIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "Deal (Str-Enemy Str) Burn Damage to Enemy (Can't be negative)",
                            "icon": fireBattleIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w8",
                            "name": "Da Bomb",
                            "description": "Next Melee Attack Doubles All Weapon Damage",
                            "icon": dabombIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w9",
                            "name": "Poison Hex",
                            "description": "Enemy takes 50% more Poison Damage Next Turn",
                            "icon": psnHexIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "Lower Enemy Defense by 50% This Turn",
                            "icon": shoutIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "2",
            "background": treeBg,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w11",
                            "name": "Wooly Coat",
                            "description": "Gain 50% Cold Resist Until the end of Next Turn",
                            "icon": woolyCoatIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w12",
                            "name": "Impress",
                            "description": "If you successfully countered this Turn, Heal 3% Max Life",
                            "icon": impressIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w13",
                            "name": "Hardened Strike",
                            "description": "If you Attack First this Turn, Double your Defense until the end of Turn",
                            "icon": hardenedStrikeIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "You Cannot be Frozen for 3 Turns",
                            "icon": burningUpIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w15",
                            "name": "Concentration",
                            "description": "Your Next Action cannot be Countered or Interrupted",
                            "icon": concentrationIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w16",
                            "name": "Harden",
                            "description": "Your Shield gains 50% More Elemental Defense",
                            "icon": hardenIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "Gain 20% All Resist until the end of Turn",
                            "icon": elementalBulkIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w18",
                            "name": "Bulk Up",
                            "description": "Increase Defense by 100% Until the end of Turn",
                            "icon": bulkupIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w19",
                            "name": "Reflection Roulette",
                            "description": "Reflect 50% of a random Damage Type this Turn",
                            "icon": reflectionRouletteIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "All Enemies Heals/Buffs apply to you as well until the end of Turn",
                            "icon": engageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                    ]
                }
            ]
        },
        {
            "name": "3",
            "background": treeBg,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "w21",
                            "name": "Ironman",
                            "description": "Gain 5 Strength",
                            "icon": ironmanIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w22",
                            "name": "Tough",
                            "description": "Decrease Chance to Bleed/Stagger by 50%",
                            "icon": toughIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w23",
                            "name": "Frenzy",
                            "description": "When Attacking with Matching Weapon Bases Gain 20 Attack Speed",
                            "icon": frenzyIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "All Armor provides 2x Defense",
                            "icon": bodyArmorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w25",
                            "name": "Stone Skin",
                            "description": "Gain 10 Defense",
                            "icon": stonekinIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w26",
                            "name": "Refueled",
                            "description": "When you take 0 damage, Heal 6% Max Life",
                            "icon": refueledIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "Gain 20 Life",
                            "icon": lifeBloodIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w28",
                            "name": "Nature's Resist",
                            "description": "Gain 5% All Resist",
                            "icon": naturesResistIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w29",
                            "name": "Last Stand",
                            "description": "Gain 30% More Damage when under 10% Max Life",
                            "icon": lastStandIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
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
                            "description": "When Attacking with Matching Weapon Bases Gain 10% More Damage",
                            "icon": dualStrengthIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
                        },
                    ]
                }
            ]
        }
    ]
}