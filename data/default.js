import {
    defaultIcon,
    warriorIcon,
    mageIcon,
    rangerIcon,
    treeBg,

    kickIcon,
    spitIcon,
    healIcon,
    digInHoovesIcon,
    sharpenHoovesIcon

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
                            "description": (min,max) => `Deal ${min} to ${max} Random Element Range Damage to Enemy`,
                            "icon": spitIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [slvl + 2, slvl + 7]
                        },
                        {
                            "id": "ll2",
                            "name": "Kick",
                            "description": (min,max) => `Deal ${min} to ${max} Random Element Melee Damage to Enemy`,
                            "icon": kickIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [slvl + 4, slvl + 5]
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
                            "description": (min,max) => `Heal ${min} Life`,
                            "icon": healIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [10 + (0.25 + (slvl * 0.05)) * lvl, 10 + (0.25 + (slvl * 0.05)) * lvl]
                        },
                        {
                            "id": "ll4",
                            "name": "Sharpen Hooves",
                            "description": (min,max) => `Gain ${min}% More Melee Damage this Turn`,
                            "icon": sharpenHoovesIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(slvl * 5) + 10, (slvl * 5) + 10]
                        },
                        {
                            "id": "ll5",
                            "name": "Dig in Hooves",
                            "description": (min,max) => `Take ${min}% Less Melee Damage this Turn`,
                            "icon": digInHoovesIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(slvl * 5) + 25, (slvl * 5) + 25]
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
                            "description": (min,max) => `Unlock the Warrior Tree`,
                            "icon": warriorIcon,
                            "max": 1,
                            "enableTree": "warrior",
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "ll7",
                            "name": "Mage",
                            "description": (min,max) => `Unlock the Mage Tree`,
                            "icon": mageIcon,
                            "max": 1,
                            "enableTree": "mage",
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "ll8",
                            "name": "Ranger",
                            "description": (min,max) => `Unlock the Ranger Tree`,
                            "icon": rangerIcon,
                            "max": 1,
                            "enableTree": "ranger",
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        /* {
                            "id": "paladin",
                            "name": "Paladin",
                            "description": (min,max) => `Skill 12 description`,
                            "icon": paladinIcon,
                            "max": 1,
                            "enableTree": "paladin",
                            "col": 2,
                            "dependencies": []
                        },
                        {
                            "id": "rogue",
                            "name": "Rogue",
                            "description": (min,max) => `Skill 13 description`,
                            "icon": rogueIcon,
                            "max": 1,
                            "enableTree": "rogue",
                            "col": 3,
                            "dependencies": []
                        },
                        {
                            "id": "necromancer",
                            "name": "Necromancer",
                            "description": (min,max) => `Skill 13 description`,
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