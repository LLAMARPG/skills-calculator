import {
    defaultIcon,
    warriorIcon,
    mageIcon,
    necromancerIcon,
    paladinIcon,
    rogueIcon,
    treeBg
} from "./icons"

export default {
    "name": "default",
    "icon": defaultIcon,
    "specializations": [
        {
            "name": "default",
            "background": treeBg,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "skill1",
                            "name": "Skill 1",
                            "description": "Skill 1 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "skill2",
                            "name": "Skill 2",
                            "description": "Skill 2 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "skill3",
                            "name": "Skill 3",
                            "description": "Skill 3 description",
                            "icon": defaultIcon,
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
                            "id": "skill4",
                            "name": "Skill 4",
                            "description": "Skill 4 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "skill5",
                            "name": "Skill 5",
                            "description": "Skill 5 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "skill6",
                            "name": "Skill 6",
                            "description": "Skill 6 description",
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
                            "id": "skill7",
                            "name": "Skill 7",
                            "description": "Skill 7 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "skill8",
                            "name": "Skill 8",
                            "description": "Skill 8 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "skill9",
                            "name": "Skill 9",
                            "description": "Skill 9 description",
                            "icon": defaultIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": []
                        }
                    ]
                },
                {
                    "points": 15,
                    "cols": 5,
                    "skills": [
                        {
                            "id": "warrior",
                            "name": "Warrior",
                            "description": "Skill 10 description",
                            "icon": warriorIcon,
                            "max": 1,
                            "enableTree": "warrior",
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "mage",
                            "name": "Mage",
                            "description": "Skill 11 description",
                            "icon": mageIcon,
                            "max": 1,
                            "enableTree": "mage",
                            "col": 1,
                            "dependencies": []
                        },
                        {
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
                        }
                    ]
                }
            ]
        }
    ]
}