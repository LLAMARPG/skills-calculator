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
                            "description": "Next Ranged Attack Doubles Weapon Cold Damage",
                            "icon": frigidarrowIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r2",
                            "name": "Guiding Light",
                            "description": "Next Ranged Attack Doubles Weapon Electric Damage",
                            "icon": guidinglightIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r3",
                            "name": "Rain of Arrows",
                            "description": "Next Ranged Attack randomly doubles one Weapon Damage Type",
                            "icon": rainofarrowsIcon,
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
                            "icon": frigidfuryIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r5",
                            "name": "Piercing Light",
                            "description": "Add 5 to 8 Spark Damage to your next Attack",
                            "icon": piercinglightIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r6",
                            "name": "Rain of Death",
                            "description": "Next Ranged Attack Doubles All Weapon Damage",
                            "icon": rainofdeathIcon,
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
                            "icon": freezingarrowIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r8",
                            "name": "Ray of Sun",
                            "description": "Deal 13 to 15 Lightning Damage",
                            "icon": rayofsunIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r9",
                            "name": "Spitting Image",
                            "description": "Create a Clone of yourself that copies your Attacks at 50% Power Until End of Turn",
                            "icon": spittingimageIcon,
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
                            "icon": shiningbeamIcon,
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
            "background": treebg2,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "r11",
                            "name": "Jump Around",
                            "description": "Gain 50% more Evasion this Turn",
                            "icon": jumparoundIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r12",
                            "name": "Frozen Pulse",
                            "description": "Slow Enemy by 50% Next Turn",
                            "icon": frozenpulseIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r13",
                            "name": "Bathe",
                            "description": "Remove all Damage Effects",
                            "icon": batheIcon,
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
                            "icon": hyperactionIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r15",
                            "name": "Restraining Order",
                            "description": "Enemy Cannot use Melee Attacks Next Turn",
                            "icon": restrainingorderIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r16",
                            "name": "Hunker Down",
                            "description": "Decrease Your Speed by 20, Double your Defense until end of Next Turn",
                            "icon": hunkerdownIcon,
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
                            "icon": divinelightIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r18",
                            "name": "Focus",
                            "description": "Your next Attack cannot be Evaded",
                            "icon": focusIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r19",
                            "name": "Inner Thoughts",
                            "description": "Heal yourself (Dex)",
                            "icon": innerthoughtsIcon,
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
                            "icon": leadthewayIcon,
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
            "background": treebg3,
            "tree": [
                {
                    "points": 0,
                    "cols": 3,
                    "skills": [
                        {
                            "id": "r21",
                            "name": "Agile",
                            "description": "Gain 5 Agility",
                            "icon": agileIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r22",
                            "name": "Quick Resist",
                            "description": "When you Attack First, gain 5% All Resist That Turn",
                            "icon": quickresistIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r23",
                            "name": "Quick Lock",
                            "description": "Gain 20 more Attack Speed when not using a Shield",
                            "icon": quicklockIcon,
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
                            "icon": finetunedIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r25",
                            "name": "Double Strike",
                            "description": "When you Attack First, gain 5% Chance for an Attack to hit twice",
                            "icon": doublestrikeIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r26",
                            "name": "On the Move",
                            "description": "Gain 10% more Evasion when not using a Shield",
                            "icon": onthemoveIcon,
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
                            "icon": lightfootedIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": []
                        },
                        {
                            "id": "r28",
                            "name": "Element of Surprise",
                            "description": "When you Attack First increase Chance of Ailment by 10%",
                            "icon": elementofsurpriseIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": []
                        },
                        {
                            "id": "r29",
                            "name": "Driving Shot",
                            "description": "Gain 10% more Damage when not using a Shield",
                            "icon": drivingshotIcon,
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
                            "icon": secondchanceIcon,
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