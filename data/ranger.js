import {
    rangerIcon,
    treeBg
} from "./icons"

export default {
    "name": "ranger",
    "icon": rangerIcon,
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
                            "id": "r1",
                            "name": "Frigid Arrow",
                            "description": "Next Ranged Attack Doubles Weapon Cold Damage",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r2",
                            "name": "Guiding Light",
                            "description": "Next Ranged Attack Doubles Weapon Electric Damage",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r3",
                            "name": "Rain of Arrows",
                            "description": "Next Ranged Attack randomly doubles one Weapon Damage Type",
                            "icon": rangerIcon,
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
                            "id": "r4",
                            "name": "Frigid Fury",
                            "description": "Add 6 to 8 Water Damage to your next Attack",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r5",
                            "name": "Piercing Light",
                            "description": "Add 5 to 8 Spark Damage to your next Attack",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r6",
                            "name": "Rain of Death",
                            "description": "Next Ranged Attack Doubles All Weapon Damage",
                            "icon": rangerIcon,
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
                            "id": "r7",
                            "name": "Freezing Arrow",
                            "description": "Increase enemy Chance to Freeze to 100%",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r8",
                            "name": "Ray of Sun",
                            "description": "Deal 13 to 15 Lightning Damage",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r9",
                            "name": "Spitting Image",
                            "description": "Create a Clone of yourself that copies your Attacks at 50% Power Until End of Turn",
                            "icon": rangerIcon,
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
                            "id": "r10",
                            "name": "Shining Beam",
                            "description": "Deal (Dex-Enemy Dex) Lightning Damage to Enemy",
                            "icon": rangerIcon,
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
                    "cols": 3,
                    "skills": [
                        {
                            "id": "r11",
                            "name": "Jump Around",
                            "description": "Gain 50% more Evasion this Turn",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r12",
                            "name": "Frozen Pulse",
                            "description": "Slow Enemy by 50% Next Turn",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r13",
                            "name": "Bathe",
                            "description": "Remove all Damage Effects",
                            "icon": rangerIcon,
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
                            "id": "r14",
                            "name": "Hyper Action",
                            "description": "Gain 20 Attack Speed for 2 Turns",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r15",
                            "name": "Restraining Order",
                            "description": "Enemy Cannot use Melee Attacks Next Turn",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r16",
                            "name": "Hunker Down",
                            "description": "Decrease Your Speed by 20, Double your Defense until end of Next Turn",
                            "icon": rangerIcon,
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
                            "id": "r17",
                            "name": "Divine Light",
                            "description": "Gain Life Equal to Electric Damage dealt this Turn",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r18",
                            "name": "Focus",
                            "description": "Your next Attack cannot be Evaded",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r19",
                            "name": "Inner Thoughts",
                            "description": "Heal yourself (Dex)",
                            "icon": rangerIcon,
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
                            "id": "r20",
                            "name": "Lead The Way",
                            "description": "You Take Actions First Next Turn",
                            "icon": rangerIcon,
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
                            "id": "r21",
                            "name": "Agile",
                            "description": "Gain 5 Agility",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r22",
                            "name": "Quick Resist",
                            "description": "When you Attack First, gain 5% All Resist That Turn",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r23",
                            "name": "Quick Lock",
                            "description": "Gain 20 more Attack Speed when not using a Shield",
                            "icon": rangerIcon,
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
                            "id": "r24",
                            "name": "Fine Tuned",
                            "description": "Gain 5 Dexterity",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r25",
                            "name": "Double Strike",
                            "description": "When you Attack First, gain 5% Chance for an Attack to hit twice",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r26",
                            "name": "On the Move",
                            "description": "Gain 10% more Evasion when not using a Shield",
                            "icon": rangerIcon,
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
                            "id": "r27",
                            "name": "Light Footed",
                            "description": "Gain 10% Evasion",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r28",
                            "name": "Element of Surprise",
                            "description": "When you Attack First increase Chance of Ailment by 10%",
                            "icon": rangerIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r29",
                            "name": "Driving Shot",
                            "description": "Gain 10% more Damage when not using a Shield",
                            "icon": rangerIcon,
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
                            "id": "r30",
                            "name": "Second Chance",
                            "description": "Your Evasion also works when Countered",
                            "icon": rangerIcon,
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