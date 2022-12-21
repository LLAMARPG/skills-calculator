import {
    rangerIcon
} from "./icons"

import frigidarrowIcon from "../assets/images/skills/ranger/frigidarrow.jpg"
import guidinglightIcon from "../assets/images/skills/ranger/guidinglight.jpg"
import rainofarrowsIcon from "../assets/images/skills/ranger/rainofarrows.jpg"
import frigidfuryIcon from "../assets/images/skills/ranger/frigidfury.jpg"
import piercinglightIcon from "../assets/images/skills/ranger/piercinglight.jpg"
import rainofdeathIcon from "../assets/images/skills/ranger/rainofdeath.jpg"
import freezingarrowIcon from "../assets/images/skills/ranger/freezingarrow.jpg"
import rayofsunIcon from "../assets/images/skills/ranger/rayofsun.jpg"
import spittingimageIcon from "../assets/images/skills/ranger/spittingimage.jpg"
import shiningbeamIcon from "../assets/images/skills/ranger/shiningbeam.jpg"
import jumparoundIcon from "../assets/images/skills/ranger/jumparound.jpg"
import frozenpulseIcon from "../assets/images/skills/ranger/frozenpulse.jpg"
import batheIcon from "../assets/images/skills/ranger/bathe.jpg"
import hyperactionIcon from "../assets/images/skills/ranger/hyperaction.jpg"
import restrainingorderIcon from "../assets/images/skills/ranger/restrainingorder.jpg"
import hunkerdownIcon from "../assets/images/skills/ranger/hunkerdown.jpg"
import divinelightIcon from "../assets/images/skills/ranger/divinelight.jpg"
import focusIcon from "../assets/images/skills/ranger/focus.jpg"
import innerthoughtsIcon from "../assets/images/skills/ranger/innerthoughts.jpg"
import leadthewayIcon from "../assets/images/skills/ranger/leadtheway.jpg"
import agileIcon from "../assets/images/skills/ranger/agile.jpg"
import quickresistIcon from "../assets/images/skills/ranger/quickresist.jpg"
import quicklockIcon from "../assets/images/skills/ranger/quicklock.jpg"
import finetunedIcon from "../assets/images/skills/ranger/finetuned.jpg"
import doublestrikeIcon from "../assets/images/skills/ranger/doublestrike.jpg"
import onthemoveIcon from "../assets/images/skills/ranger/onthemove.jpg"
import lightfootedIcon from "../assets/images/skills/ranger/lightfooted.jpg"
import elementofsurpriseIcon from "../assets/images/skills/ranger/elementofsurprise.jpg"
import drivingshotIcon from "../assets/images/skills/ranger/drivingshot.jpg"
import secondchanceIcon from "../assets/images/skills/ranger/secondchance.jpg"

import treebg1 from '../assets/images/skills/ranger/treebg1.jpg'
import treebg2 from '../assets/images/skills/ranger/treebg2.jpg'
import treebg3 from '../assets/images/skills/ranger/treebg3.jpg'

export default {
    "name": "ranger",
    "icon": rangerIcon,
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
                            "id": "r1",
                            "name": "Frigid Arrow",
                            "description": (min,max) => `Next Ranged Attack increases Weapon Cold Damage by ${min}%`,
                            "icon": frigidarrowIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 10), (10 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "r2",
                            "name": "Guiding Light",
                            "description": (min,max) => `Next Ranged Attack increases Weapon Electric Damage by ${min}%`,
                            "icon": guidinglightIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 10), (10 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "r3",
                            "name": "Rain of Arrows",
                            "description": (min,max) => `Next Ranged Attack increases one random Weapon Damage Type by ${min}%`,
                            "icon": rainofarrowsIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 10), (10 + Math.max(slvl - 1, 0) * 10)]
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
                            "description": (min,max) => `Add ${min} to ${max} Water Damage to your next Attack`,
                            "icon": frigidfuryIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [6 + Math.max(slvl - 1, 0) + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl, 8 + Math.max(slvl - 1, 0) + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl]
                        },
                        {
                            "id": "r5",
                            "name": "Piercing Light",
                            "description": (min,max) => `Add ${min} to ${max} Spark Damage to your next Attack`,
                            "icon": piercinglightIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [4 + Math.max(slvl - 1, 0) + (0.11 + 0.04 * Math.max(slvl - 1, 0)) * lvl, 9 + Math.max(slvl - 1, 0) + (0.11 + 0.04 * Math.max(slvl - 1, 0)) * lvl]
                        },
                        {
                            "id": "r6",
                            "name": "Rain of Death",
                            "description": (min,max) => `Next Ranged Attack increases Weapon Damage ${min}%`,
                            "icon": rainofdeathIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(50,(20 + Math.max(slvl - 1, 0) * 10)), Math.min(50,(20 + Math.max(slvl - 1, 0) * 10))]
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
                            "description": (min,max) => `Increase enemy Chance to Freeze to ${min}%`,
                            "icon": freezingarrowIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "r8",
                            "name": "Ray of Sun",
                            "description": (min,max) => `Deal ${min} to ${max} Lightning Damage`,
                            "icon": rayofsunIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [13 + Math.max(slvl - 1, 0) + (0.05 + 0.06 * Math.max(slvl - 1, 0)) * lvl, 15 + Math.max(slvl - 1, 0) + (0.05 + 0.06 * Math.max(slvl - 1, 0)) * lvl]
                        },
                        {
                            "id": "r9",
                            "name": "Spitting Image",
                            "description": (min,max) => `Create a Clone of yourself that copies your Attacks at ${min}% Power Until End of Turn`,
                            "icon": spittingimageIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(15 + Math.max(slvl - 1, 0) * 8), (15 + Math.max(slvl - 1, 0) * 8)]
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
                            "description": (min,max) => `Deal (${min}% Dex-Enemy Dex) Lightning Damage to Enemy (Can't be negative)`,
                            "icon": shiningbeamIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(100,(80 + Math.max(slvl - 1, 0) * 10)), Math.min(100,(80 + Math.max(slvl - 1, 0) * 10))]
                        },
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
                            "id": "r11",
                            "name": "Jump Around",
                            "description": (min,max) => `Gain ${min}% more Evasion this Turn`,
                            "icon": jumparoundIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(33 + Math.max(slvl - 1, 0) * 7), (33 + Math.max(slvl - 1, 0) * 7)]
                        },
                        {
                            "id": "r12",
                            "name": "Frozen Pulse",
                            "description": (min,max) => `Slow Enemy by ${min}% Next Turn`,
                            "icon": frozenpulseIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(20 + Math.max(slvl - 1, 0) * 6), (20 + Math.max(slvl - 1, 0) * 6)]
                        },
                        {
                            "id": "r13",
                            "name": "Bathe",
                            "description": (min,max) => `Remove all Damage Effects`,
                            "icon": batheIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
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
                            "description": (min,max) => `Gain ${min} Attack Speed for 2 Turns`,
                            "icon": hyperactionIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(20,(10 + Math.max(slvl - 1, 0) * 5)),Math.min(20,(10 + Math.max(slvl - 1, 0) * 5))]
                        },
                        {
                            "id": "r15",
                            "name": "Restraining Order",
                            "description": (min,max) => `Enemy Cannot use Melee Attacks Next Turn`,
                            "icon": restrainingorderIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "r16",
                            "name": "Hunker Down",
                            "description": (min,max) => `Decrease Your Speed by 20, Increase your Defense by ${min}%`,
                            "icon": hunkerdownIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(80,(50 + Math.max(slvl - 1, 0) * 10)),Math.min(80,(50 + Math.max(slvl - 1, 0) * 10))]
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
                            "description": (min,max) => `Gain Life Equal to ${min}% Electric Damage dealt this Turn`,
                            "icon": divinelightIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(45 + Math.max(slvl - 1, 0) * 9), (10 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "r18",
                            "name": "Focus",
                            "description": (min,max) => `Your next Attack cannot be Evaded`,
                            "icon": focusIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "r19",
                            "name": "Inner Thoughts",
                            "description": (min,max) => `Heal yourself (${min}% Dex)`,
                            "icon": innerthoughtsIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(30 + Math.max(slvl - 1, 0) * 5), (30 + Math.max(slvl - 1, 0) * 5)]
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
                            "description": (min,max) => `You Take Actions First Next Turn`,
                            "icon": leadthewayIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
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
                            "id": "r21",
                            "name": "Agile",
                            "description": (min,max) => `Gain ${min} Agility`,
                            "icon": agileIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(3 + Math.max(slvl - 1, 0) * 3), (3 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "r22",
                            "name": "Quick Resist",
                            "description": (min,max) => `When you Attack First, gain ${min}% All Resist That Turn`,
                            "icon": quickresistIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(5,3 + Math.max(slvl - 1, 0)), Math.min(5,3 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "r23",
                            "name": "Quick Lock",
                            "description": (min,max) => `Gain ${min} more Attack Speed when not using a Shield`,
                            "icon": quicklockIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(15,6 + Math.max(slvl - 1, 0) * 3), Math.min(15,6 + Math.max(slvl - 1, 0) * 3)]
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
                            "description": (min,max) => `Gain ${min} Dexterity`,
                            "icon": finetunedIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(3 + Math.max(slvl - 1, 0) * 3), (3 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "r25",
                            "name": "Double Strike",
                            "description": (min,max) => `When you Attack First, gain ${min}% Chance for an Attack to hit twice`,
                            "icon": doublestrikeIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(1 + Math.max(slvl - 1, 0)), (1 + Math.max(slvl - 1, 0))]
                        },
                        {
                            "id": "r26",
                            "name": "On the Move",
                            "description": (min,max) => `Gain ${min}% more Evasion when not using a Shield`,
                            "icon": onthemoveIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(11,5 + Math.max(slvl - 1, 0) * 3), Math.min(11,5 + Math.max(slvl - 1, 0) * 3)]
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
                            "description": (min,max) => `Gain ${min}% Evasion`,
                            "icon": lightfootedIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(3 + Math.max(slvl - 1, 0) * 3), (3 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "r28",
                            "name": "Element of Surprise",
                            "description": (min,max) => `When you Attack First increase Chance of Ailment by ${min}%`,
                            "icon": elementofsurpriseIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(2 + Math.max(slvl - 1, 0) * 2), (2 + Math.max(slvl - 1, 0) * 2)]
                        },
                        {
                            "id": "r29",
                            "name": "Driving Shot",
                            "description": (min,max) => `Gain ${min}% more Damage when not using a Shield`,
                            "icon": drivingshotIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(1 + Math.max(slvl - 1, 0)), (1 + Math.max(slvl - 1, 0))]
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
                            "description": (min,max) => `Your Evasion also works when Countered`,
                            "icon": secondchanceIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                    ]
                }
            ]
        }
    ]
}