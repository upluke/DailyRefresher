import React, {useState} from 'react'
import Headbar from '../HeaderBar/HeaderBar'
import Colloquial from '../Colloquial/Colloquial'

import './Colloquialboard.scss'

export default () => {
  const [testInfo, setTestInfo] = useState([
    "let's play",
    'go to schoool',
    'pick up mail'
  ])
  return (
    <div className="Colloquialboard">
      <Headbar />

      <Colloquial test={testInfo} />
    </div>
  )
}
