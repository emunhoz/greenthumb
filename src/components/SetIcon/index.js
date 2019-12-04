import React from 'react'

import { ReactComponent as OneDrop } from '../../images/icons/grey/one-drop.svg'
import { ReactComponent as TwoDrops } from '../../images/icons/grey/two-drops.svg'
import { ReactComponent as ThreeDrops } from '../../images/icons/grey/three-drops.svg'

import { ReactComponent as HighSun } from '../../images/icons/grey/high-sun.svg'
import { ReactComponent as LowSun } from '../../images/icons/grey/low-sun.svg'
import { ReactComponent as NoSun } from '../../images/icons/grey/no-sun.svg'

import { ReactComponent as Toxic } from '../../images/icons/grey/toxic.svg'

import { ReactComponent as Pet } from '../../images/icons/grey/pet.svg'

const Water = {
  rarely: <OneDrop />,
  regularly: <TwoDrops />,
  daily: <ThreeDrops />
}

const Sun = {
  high: <HighSun />,
  low: <LowSun />,
  no: <NoSun />
}

export { Toxic, Pet, Water, Sun }
