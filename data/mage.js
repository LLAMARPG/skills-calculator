import {
    mageIcon
} from "./icons"

import fireballIcon from '../assets/images/skills/mage/fireball.jpg'
import lightningBoltIcon from '../assets/images/skills/mage/lightningbolt.jpg'
import freezeBoltIcon from '../assets/images/skills/mage/freezebolt.jpg'
import burningFireIcon from '../assets/images/skills/mage/burningfire.jpg'
import zapIcon from '../assets/images/skills/mage/zap.jpg'
import waterBlastIcon from '../assets/images/skills/mage/waterblast.jpg'
import volcanicBlastIcon from '../assets/images/skills/mage/volcanicblast.jpg'
import soakingStrikeIcon from '../assets/images/skills/mage/soakingstrike.jpg'
import frozenMindIcon from '../assets/images/skills/mage/frozenmind.jpg'
import elementalBlastIcon from '../assets/images/skills/mage/elementalblast.jpg'
import globalWarmingIcon from '../assets/images/skills/mage/globalwarming.jpg'
import darknessFallsIcon from '../assets/images/skills/mage/darknessfalls.jpg'
import preenWoolIcon from '../assets/images/skills/mage/preenwool.jpg'  
import dimvisionIcon from '../assets/images/skills/mage/dimvision.jpg'
import defycoldIcon from '../assets/images/skills/mage/defyice.jpg'
import defylightIcon from '../assets/images/skills/mage/defylight.jpg'
import defyfireIcon from '../assets/images/skills/mage/defyfire.jpg'
import cleansingIcon from '../assets/images/skills/mage/cleansing.jpg'
import elementaldefianceIcon from '../assets/images/skills/mage/elementaldefiance.jpg'
import boxedinIcon from '../assets/images/skills/mage/boxedin.jpg'
import firehexIcon from '../assets/images/skills/mage/firehex.jpg'
import coldhexIcon from '../assets/images/skills/mage/coldhex.jpg'
import electrichexIcon from '../assets/images/skills/mage/electrichex.jpg'
import energeticIcon from '../assets/images/skills/mage/energetic.jpg'
import nullifyIcon from '../assets/images/skills/mage/nullify.jpg'
import intellectualIcon from '../assets/images/skills/mage/intellectual.jpg'
import mutedIcon from '../assets/images/skills/mage/muted.jpg'
import thoughtfulmindIcon from '../assets/images/skills/mage/thoughtfulmind.jpg'
import stripbuffsIcon from '../assets/images/skills/mage/stripbuffs.jpg'
import elementalcastingIcon from '../assets/images/skills/mage/elementalcasting.jpg'

import treebg1 from '../assets/images/skills/mage/treebg1.jpg'
import treebg2 from '../assets/images/skills/mage/treebg2.jpg'
import treebg3 from '../assets/images/skills/mage/treebg3.jpg'

export default {
    "name": "mage",
    "icon": mageIcon,
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
                            "id": "m1",
                            "name": "Fireball",
                            "description": (min,max) => `Deal 5 to 10 Heat Damage to Enemy`,
                            "icon": fireballIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m2",
                            "name": "Lightning Bolt",
                            "description": (min,max) => `Deal 7 to 8 Lightning Damage to Enemy`,
                            "icon": lightningBoltIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m3",
                            "name": "Freeze Bolt",
                            "description": (min,max) => `Deal 4 to 11 Ice Damage to Enemy`,
                            "icon": freezeBoltIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `Enemy Takes 5 Burn Damage Each Turn for 3 Turns`,
                            "icon": burningFireIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m5",
                            "name": "Zap",
                            "description": (min,max) => `Deal 15 Spark Damage to Enemy`,
                            "icon": zapIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m6",
                            "name": "Water Blast",
                            "description": (min,max) => `Enemy Takes 8 Water Damage for 2 Turns`,
                            "icon": waterBlastIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `Deal 50% More Fire and Electric Damage This Turn`,
                            "icon": volcanicBlastIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m8",
                            "name": "Soaking Strike",
                            "description": (min,max) => `Deal 100% More Electric Damage to Soaked Targets This Turn`,
                            "icon": soakingStrikeIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m9",
                            "name": "Frozen Mind",
                            "description": (min,max) => `Deal (Int-Enemy Int) Ice Damage to Enemy (Can't be negative)`,
                            "icon": frozenMindIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `Deal 25 Random Elemental Damage to Enemy`,
                            "icon": elementalBlastIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                    "cols": 4,
                    "skills": [
                        {
                            "id": "m11",
                            "name": "Global Warming",
                            "description": (min,max) => `Reduce incoming Cold Damage by 50% Until End of Next Turn`,
                            "icon": globalWarmingIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m12",
                            "name": "Darkness Falls",
                            "description": (min,max) => `Reduce incoming Electric Damage by 50% Until End of Next Turn`,
                            "icon": darknessFallsIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m13",
                            "name": "Preen Wool",
                            "description": (min,max) => `Reduce incoming Fire Damage by 50% Until End of Next Turn`,
                            "icon": preenWoolIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m14",
                            "name": "Dim Vision",
                            "description": (min,max) => `Gain 50% Evasion This Turn `,
                            "icon": dimvisionIcon,
                            "max": 5,
                            "col": 3,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `100% Cold Immunity this Turn`,
                            "icon": defycoldIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m16",
                            "name": "Defy Light",
                            "description": (min,max) => `100% Light Immunity this Turn`,
                            "icon": defylightIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m17",
                            "name": "Defy Fire",
                            "description": (min,max) => `100% Fire Immunity this Turn`,
                            "icon": defyfireIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m18",
                            "name": "Cleansing",
                            "description": (min,max) => `Remove All Debuffs from Yourself`,
                            "icon": cleansingIcon,
                            "max": 5,
                            "col": 3,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `Reduce all incoming Elemental Damage by 50% this Turn`,
                            "icon": elementaldefianceIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m20",
                            "name": "Boxed In",
                            "description": (min,max) => `Enemy Cannot use Ranged Attacks Next Turn`,
                            "icon": boxedinIcon,
                            "max": 5,
                            "col": 3,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                    ]
                },
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
                            "id": "m21",
                            "name": "Fire Hex",
                            "description": (min,max) => `Enemy takes 50% more Fire Damage Next Turn`,
                            "icon": firehexIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m22",
                            "name": "Energetic",
                            "description": (min,max) => `Gain 5 Intelligence`,
                            "icon": energeticIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m23",
                            "name": "Nullify",
                            "description": (min,max) => `Randomly Disable 1 Enemy Action or Spell This Turn`,
                            "icon": nullifyIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `Enemy takes 50% more Electric Damage Next Turn`,
                            "icon": electrichexIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m25",
                            "name": "Intellectual",
                            "description": (min,max) => `Gain 20 Mana and 10 Mana Regeneration`,
                            "icon": intellectualIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m26",
                            "name": "Muted",
                            "description": (min,max) => `Enemies cannot see your Actions or Spells Until End of Next Turn`,
                            "icon": mutedIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `Enemy takes 50% more Cold Damage Next Turn`,
                            "icon": coldhexIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m28",
                            "name": "Thoughtful Mind",
                            "description": (min,max) => `Heal Target (Int)`,
                            "icon": thoughtfulmindIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                        {
                            "id": "m29",
                            "name": "Strip Buffs",
                            "description": (min,max) => `Remove All Buffs from Enemy`,
                            "icon": stripbuffsIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
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
                            "description": (min,max) => `When Using 3 Spells in One Turn Gain 25% All Resist Until End of Turn`,
                            "icon": elementalcastingIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [0,0]
                        },
                    ]
                }
            ]
        }
    ]
}