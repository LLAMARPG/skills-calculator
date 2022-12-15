import {
    defaultIcon,
    warriorIcon,
    mageIcon,
    /* necromancerIcon,
    paladinIcon,
    rogueIcon, */
    rangerIcon,
    treeBg
} from "./icons"

export default {
    "name": "default",
    "icon": defaultIcon,
    "specializations": [
        {
            "name": "llama",
            "background": treeBg,
            "tree": [
                {
                    "points": 0,
                    "cols": 2,
                    "skills": [
                        {
                            "id": "ll1",
                            "name": "Spit",
                            "description": "Deal 3 to 8 Random Element Range Damage to Enemy",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "ll2",
                            "name": "Kick",
                            "description": "Deal 5 to 6 Random Element Melee Damage to Enemy",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                    ]
                },
                {
                    "points": 5,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "ll3",
                            "name": "Heal",
                            "description": "Heal 10 Life",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "ll4",
                            "name": "Sharpen Hooves",
                            "description": "Gain 20% More Melee Damage this Turn",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "ll5",
                            "name": "Dig in Hooves",
                            "description": "Take 50% Less Melee Damage this Turn",
                            "icon": defaultIcon,
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
                            "id": "ll6",
                            "name": "Warrior",
                            "description": "Unlock the Warrior Tree",
                            "icon": warriorIcon,
                            "max": 1,
                            "enableTree": "warrior",
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "ll7",
                            "name": "Mage",
                            "description": "Unlock the Mage Tree",
                            "icon": mageIcon,
                            "max": 1,
                            "enableTree": "mage",
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "ll8",
                            "name": "Ranger",
                            "description": "Unlock the Ranger Tree",
                            "icon": rangerIcon,
                            "max": 1,
                            "enableTree": "ranger",
                            "col": 2,
                            "dependencies": []
                        },
                        /* {
                            "id": "paladin",
                            "name": "Paladin",
                            "description": "Skill 12 description",
                            "icon": paladinIcon,
                            "max": 1,
                            "enableTree": "paladin",
                            "col": 2,
                            "dependencies": []
                        },
                        {
                            "id": "rogue",
                            "name": "Rogue",
                            "description": "Skill 13 description",
                            "icon": rogueIcon,
                            "max": 1,
                            "enableTree": "rogue",
                            "col": 3,
                            "dependencies": []
                        },
                        {
                            "id": "necromancer",
                            "name": "Necromancer",
                            "description": "Skill 13 description",
                            "icon": necromancerIcon,
                            "max": 1,
                            "enableTree": "necromancer",
                            "col": 4,
                            "dependencies": []
                        } */
                    ]
                }
            ]
        }
    ]
}