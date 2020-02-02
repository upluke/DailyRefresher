import React, {useState} from 'react'
import Headbar from '../HeaderBar/HeaderBar'
import Colloquial from '../Colloquial/Colloquial'

import infoBank from '../../infoBank'
import './Colloquialboard.scss'

export default () => {
  const [testInfo, setTestInfo] = useState(infoBank)
  const [numJokesToGet] = useState(5)
  console.log(testInfo)

  const getInfo=()=>{
    console.log("get info")
  }

  return (
    <div className="Colloquialboard">
      <Headbar getInfo={getInfo}/>

      <Colloquial test={testInfo} />
    </div>
  )
}
