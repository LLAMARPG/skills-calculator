import classesJson from '../data/classes'
import defaultJson from '../data/default'
import mageJson from '../data/mage'
import rogueJson from '../data/rogue'
import warriorJson from '../data/warrior'
import paladinJson from '../data/paladin'
import necromancerJson from '../data/necromancer'

export default function handler(req, res) {
  const { slug } = req.query

  const classes = slug?.length > 0 ? slug.map((s) => {
    switch (s) {
      case 'default':
        return defaultJson
      case 'mage':
        return mageJson
      case 'rogue':
        return rogueJson
      case 'warrior':
        return warriorJson
      case 'paladin':
        return paladinJson
      case 'necromancer':
        return necromancerJson
      default:
        return null
    }
  }) : classesJson

  res.status(200).json({classes})
}