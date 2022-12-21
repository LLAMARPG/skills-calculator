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
                            "description": (min,max) => `Deal ${min} to ${max} Heat Damage to Enemy`,
                            "icon": fireballIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [5 + Math.max(slvl - 1, 0) + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl, 10 + Math.max(slvl - 1, 0) + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl]
                        },
                        {
                            "id": "m2",
                            "name": "Lightning Bolt",
                            "description": (min,max) => `Deal ${min} to ${max} Lightning Damage to Enemy`,
                            "icon": lightningBoltIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [7 + Math.max(slvl - 1, 0) + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl, 8 + Math.max(slvl - 1, 0) + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl]
                        },
                        {
                            "id": "m3",
                            "name": "Freeze Bolt",
                            "description": (min,max) => `Deal ${min} to ${max} Ice Damage to Enemy`,
                            "icon": freezeBoltIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [4 + (Math.max(slvl - 1, 0) * 2) + (0.1 + 0.02 * Math.max(slvl - 1, 0)) * lvl, 4 + (Math.max(slvl - 1, 0) * 2) + (0.1 + 0.02 * Math.max(slvl - 1, 0)) * lvl]
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
                            "description": (min,max) => `Enemy Takes ${min} Burn Damage Each Turn for 3 Turns`,
                            "icon": burningFireIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [5 + Math.max(slvl - 1, 0) + (0.05 + 0.01 * Math.max(slvl - 1, 0)) * (stats?.int || 0), 5 + Math.max(slvl - 1, 0) + (0.05 + 0.01 * Math.max(slvl - 1, 0)) * (stats?.int || 0)]
                        },
                        {
                            "id": "m5",
                            "name": "Zap",
                            "description": (min,max) => `Deal ${min} Spark Damage to Enemy`,
                            "icon": zapIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [15 + Math.max(slvl - 1, 0) + (0.05 + 0.01 * Math.max(slvl - 1, 0)) * (stats?.int || 0), 15 + Math.max(slvl - 1, 0) + (0.05 + 0.01 * Math.max(slvl - 1, 0)) * (stats?.int || 0)]
                        },
                        {
                            "id": "m6",
                            "name": "Water Blast",
                            "description": (min,max) => `Enemy Takes ${min} Water Damage for 2 Turns`,
                            "icon": waterBlastIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [8 + Math.max(slvl - 1, 0) + (0.05 + 0.02 * Math.max(slvl - 1, 0)) * (stats?.int || 0), 8 + Math.max(slvl - 1, 0) + (0.05 + 0.02 * Math.max(slvl - 1, 0)) * (stats?.int || 0)]
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
                            "description": (min,max) => `Deal ${min}% More Fire and Electric Damage This Turn`,
                            "icon": volcanicBlastIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 10), (10 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "m8",
                            "name": "Soaking Strike",
                            "description": (min,max) => `Deal ${min}% More Electric Damage to Soaked Targets This Turn`,
                            "icon": soakingStrikeIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(50 + Math.max(slvl - 1, 0) * 10), (50 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "m9",
                            "name": "Frozen Mind",
                            "description": (min,max) => `Deal (${min}% Int-Enemy Int) Ice Damage to Enemy (Can't be negative)`,
                            "icon": frozenMindIcon,
                            "max": 3,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((80 + Math.max(slvl - 1, 0) * 10),100), Math.min((80 + Math.max(slvl - 1, 0) * 10),100)]
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
                            "description": (min,max) => `Deal ${min} Random Elemental Damage to Enemy`,
                            "icon": elementalBlastIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [15 + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl, 15 + (0.1 + 0.04 * Math.max(slvl - 1, 0)) * lvl]
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
                            "description": (min,max) => `Reduce incoming Cold Damage by ${min}% Until End of Next Turn`,
                            "icon": globalWarmingIcon,
                            "max": 3,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((30 + Math.max(slvl - 1, 0) * 10),50),Math.min((30 + Math.max(slvl - 1, 0) * 10),50)]
                        },
                        {
                            "id": "m12",
                            "name": "Darkness Falls",
                            "description": (min,max) => `Reduce incoming Electric Damage by ${min}% Until End of Next Turn`,
                            "icon": darknessFallsIcon,
                            "max": 3,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((30 + Math.max(slvl - 1, 0) * 10),50),Math.min((30 + Math.max(slvl - 1, 0) * 10),50)]
                        },
                        {
                            "id": "m13",
                            "name": "Preen Wool",
                            "description": (min,max) => `Reduce incoming Fire Damage by ${min}% Until End of Next Turn`,
                            "icon": preenWoolIcon,
                            "max": 3,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((30 + Math.max(slvl - 1, 0) * 10),50),Math.min((30 + Math.max(slvl - 1, 0) * 10),50)]
                        },
                        {
                            "id": "m14",
                            "name": "Dim Vision",
                            "description": (min,max) => `Gain ${min}% Evasion This Turn `,
                            "icon": dimvisionIcon,
                            "max": 3,
                            "col": 3,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min((10 + Math.max(slvl - 1, 0) * 5),20),Math.min((10 + Math.max(slvl - 1, 0) * 5),20)]
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
                            "description": (min,max) => `${min}% Cold Immunity this Turn`,
                            "icon": defycoldIcon,
                            "max": 1,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "m16",
                            "name": "Defy Light",
                            "description": (min,max) => `${min}% Light Immunity this Turn`,
                            "icon": defylightIcon,
                            "max": 1,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "m17",
                            "name": "Defy Fire",
                            "description": (min,max) => `${min}% Fire Immunity this Turn`,
                            "icon": defyfireIcon,
                            "max": 1,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
                        },
                        {
                            "id": "m18",
                            "name": "Cleansing",
                            "description": (min,max) => `Remove All Debuffs from Yourself`,
                            "icon": cleansingIcon,
                            "max": 1,
                            "col": 3,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
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
                            "description": (min,max) => `Reduce all incoming Elemental Damage by ${min}% this Turn`,
                            "icon": elementaldefianceIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 10),(10 + Math.max(slvl - 1, 0) * 10)]
                        },
                        {
                            "id": "m20",
                            "name": "Boxed In",
                            "description": (min,max) => `Enemy Cannot use Ranged Attacks Next Turn`,
                            "icon": boxedinIcon,
                            "max": 1,
                            "col": 3,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
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
                            "description": (min,max) => `Enemy takes ${min}% more Fire Damage Next Turn`,
                            "icon": firehexIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(30 + Math.max(slvl - 1, 0) * 7),(30 + Math.max(slvl - 1, 0) * 7)]
                        },
                        {
                            "id": "m22",
                            "name": "Energetic",
                            "description": (min,max) => `Gain ${min} Intelligence`,
                            "icon": energeticIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(3 + Math.max(slvl - 1, 0) * 3),(3 + Math.max(slvl - 1, 0) * 3)]
                        },
                        {
                            "id": "m23",
                            "name": "Nullify",
                            "description": (min,max) => `Randomly Disable 1 Enemy Action or Spell This Turn`,
                            "icon": nullifyIcon,
                            "max": 1,
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
                            "id": "m24",
                            "name": "Electric Hex",
                            "description": (min,max) => `Enemy takes ${min}% more Electric Damage Next Turn`,
                            "icon": electrichexIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(30 + Math.max(slvl - 1, 0) * 7),(30 + Math.max(slvl - 1, 0) * 7)]
                        },
                        {
                            "id": "m25",
                            "name": "Intellectual",
                            "description": (min,max) => `Gain ${max} Mana and ${min} Mana Regeneration`,
                            "icon": intellectualIcon,
                            "max": 4,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [Math.min(11,(3 + Math.max(slvl - 1, 0) * 2)),Math.min(20,(8 + Math.max(slvl - 1, 0) * 4))]
                        },
                        {
                            "id": "m26",
                            "name": "Muted",
                            "description": (min,max) => `Enemies cannot see your Actions or Spells Until End of Next Turn`,
                            "icon": mutedIcon,
                            "max": 1,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [100,100]
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
                            "description": (min,max) => `Enemy takes ${min}% more Cold Damage Next Turn`,
                            "icon": coldhexIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(30 + Math.max(slvl - 1, 0) * 7),(30 + Math.max(slvl - 1, 0) * 7)]
                        },
                        {
                            "id": "m28",
                            "name": "Thoughtful Mind",
                            "description": (min,max) => `Heal Target (${min}% Int)`,
                            "icon": thoughtfulmindIcon,
                            "max": 5,
                            "col": 1,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(40 + Math.max(slvl - 1, 0) * 5),(40 + Math.max(slvl - 1, 0) * 5)]
                        },
                        {
                            "id": "m29",
                            "name": "Strip Buffs",
                            "description": (min,max) => `Remove ${min} to ${max} Random Buff(s) from Enemy`,
                            "icon": stripbuffsIcon,
                            "max": 5,
                            "col": 2,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [1 + Math.max(slvl - 1, 0),2 + Math.max(slvl - 1, 0)]
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
                            "description": (min,max) => `When Using 3 Spells in One Turn Gain ${min}% All Resist Until End of Turn`,
                            "icon": elementalcastingIcon,
                            "max": 5,
                            "col": 0,
                            "dependencies": [],
                            "formula": (slvl,lvl,stats) => [(10 + Math.max(slvl - 1, 0) * 2),(10 + Math.max(slvl - 1, 0) * 2)]
                        },
                    ]
                }
            ]
        }
    ]
}