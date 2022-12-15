import {
    mageIcon,
    treeBg
} from "./icons"

export default {
    "name": "mage",
    "icon": mageIcon,
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
                            "id": "m1",
                            "name": "Fireball",
                            "description": "Deal 5 to 10 Heat Damage to Enemy",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m2",
                            "name": "Lightning Bolt",
                            "description": "Deal 7 to 8 Lightning Damage to Enemy",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m3",
                            "name": "Freeze Bolt",
                            "description": "Deal 4 to 11 Ice Damage to Enemy",
                            "icon": mageIcon,
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
                            "id": "m4",
                            "name": "Burning Fire",
                            "description": "Enemy Takes 5 Burn Damage Each Turn for 3 Turns",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m5",
                            "name": "Zap",
                            "description": "Deal 15 Spark Damage to Enemy",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m6",
                            "name": "Water Blast",
                            "description": "Enemy Takes 8 Water Damage for 2 Turns",
                            "icon": mageIcon,
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
                            "id": "m7",
                            "name": "Volcanic Blast",
                            "description": "Deal 50% More Fire and Electric Damage This Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m8",
                            "name": "Soaking Strike",
                            "description": "Deal 100% More Electric Damage to Soaked Targets This Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m9",
                            "name": "Frozen Mind",
                            "description": "Deal (Int-Enemy Int) Ice Damage to Enemy (Can't be negative)",
                            "icon": mageIcon,
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
                            "id": "m10",
                            "name": "Elemental Blast",
                            "description": "Deal 25 Random Elemental Damage to Enemy",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
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
                    "cols": 4,
                    "skills": [
                        {
                            "id": "m11",
                            "name": "Global Warming",
                            "description": "Reduce incoming Cold Damage by 50% Until End of Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m12",
                            "name": "Darkness Falls",
                            "description": "Reduce incoming Electric Damage by 50% Until End of Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m13",
                            "name": "Preen Wool",
                            "description": "Reduce incoming Fire Damage by 50% Until End of Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
                        },
                        {
                            "id": "m14",
                            "name": "Dim Vision",
                            "description": "Gain 50% Evasion This Turn ",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 3,
                            "dependencies": []
                        },
                    ]
                },
                {
                    "points": 5,
                    "cols": 4,
                    "skills": [
                        {
                            "id": "m15",
                            "name": "Defy Cold",
                            "description": "100% Cold Immunity this Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m16",
                            "name": "Defy Light",
                            "description": "100% Light Immunity this Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m17",
                            "name": "Defy Fire",
                            "description": "100% Fire Immunity this Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
                        },
                        {
                            "id": "m18",
                            "name": "Cleansing",
                            "description": "Remove All Debuffs from Yourself",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 3,
                            "dependencies": []
                        },
                    ]
                },
                {
                    "points": 10,
                    "cols": 4,
                    "skills": [
                        {
                            "id": "m19",
                            "name": "Elemental Defiance",
                            "description": "Reduce all incoming Elemental Damage by 50% this Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m20",
                            "name": "Boxed In",
                            "description": "Enemy Cannot use Ranged Attacks Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 3,
                            "dependencies": []
                        },
                    ]
                },
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
                            "id": "m21",
                            "name": "Fire Hex",
                            "description": "Enemy takes 50% more Fire Damage Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m22",
                            "name": "Energetic",
                            "description": "Gain 5 Intelligence",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m23",
                            "name": "Nullify",
                            "description": "Randomly Disable 1 Enemy Action or Spell This Turn",
                            "icon": mageIcon,
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
                            "id": "m24",
                            "name": "Electric Hex",
                            "description": "Enemy takes 50% more Electric Damage Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m25",
                            "name": "Intellectual",
                            "description": "Gain 20 Mana and 10 Mana Regeneration",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m26",
                            "name": "Muted",
                            "description": "Enemies cannot see your Actions or Spells Until End of Next Turn",
                            "icon": mageIcon,
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
                            "id": "m27",
                            "name": "Cold Hex",
                            "description": "Enemy takes 50% more Cold Damage Next Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "m28",
                            "name": "Thoughtful Mind",
                            "description": "Heal Target (Int)",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "m29",
                            "name": "Strip Buffs",
                            "description": "Remove All Buffs from Enemy",
                            "icon": mageIcon,
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
                            "id": "m30",
                            "name": "Elemental Casting",
                            "description": "When Using 3 Spells in One Turn Gain 25% All Resist Until End of Turn",
                            "icon": mageIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                    ]
                }
            ]
        }
    ]
}