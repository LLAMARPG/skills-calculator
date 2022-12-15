import {
    warriorIcon,
    treeBg
} from "./icons"

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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w2",
                            "name": "Mad Dog",
                            "description": "Next Melee Attack randomly doubles one Weapon Damage Type",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w3",
                            "name": "Toxic Spit",
                            "description": "Deal 5 Acid Damage to Enemy",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w5",
                            "name": "Bulldoze",
                            "description": "If your Enemy uses Counter this Turn, Stagger them",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w6",
                            "name": "Poison Tipped",
                            "description": "Add 7 Venom Damage to Next Attack",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w8",
                            "name": "Da Bomb",
                            "description": "Next Melee Attack Doubles All Weapon Damage",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w9",
                            "name": "Poison Hex",
                            "description": "Enemy takes 50% more Poison Damage Next Turn",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w12",
                            "name": "Impress",
                            "description": "If you successfully countered this Turn, Heal 3% Max Life",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w13",
                            "name": "Hardened Strike",
                            "description": "If you Attack First this Turn, Double your Defense until the end of Turn",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w15",
                            "name": "Concentration",
                            "description": "Your Next Action cannot be Countered or Interrupted",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w16",
                            "name": "Harden",
                            "description": "Your Shield gains 50% More Elemental Defense",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w18",
                            "name": "Bulk Up",
                            "description": "Increase Defense by 100% Until the end of Turn",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w19",
                            "name": "Reflection Roulette",
                            "description": "Reflect 50% of a random Damage Type this Turn",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w22",
                            "name": "Tough",
                            "description": "Decrease Chance to Bleed/Stagger by 50%",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w23",
                            "name": "Frenzy",
                            "description": "When Attacking with Matching Weapon Bases Gain 20 Attack Speed",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w25",
                            "name": "Stone Skin",
                            "description": "Gain 10 Defense",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w26",
                            "name": "Refueled",
                            "description": "When you take 0 damage, Heal 6% Max Life",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "w28",
                            "name": "Nature's Resist",
                            "description": "Gain 5% All Resist",
                            "icon": warriorIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "w29",
                            "name": "Last Stand",
                            "description": "Gain 30% More Damage when under 10% Max Life",
                            "icon": warriorIcon,
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
                            "icon": warriorIcon,
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