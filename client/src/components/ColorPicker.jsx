import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {

  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['#5a4252', '#0d0107', '#a79494', '#0e213a', '#100418', '#aea3a3', '#762955', '#846682', '#5f7a82', '#4a5f65', '#EDDCFF', '#E2FBF9']}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker