import React, {useState,useEffect} from 'react'
import Headbar from '../HeaderBar/HeaderBar'
import Colloquial from '../Colloquial/Colloquial'

import infoBank from '../../infoBank'
import './Colloquialboard.scss'


export default () => {
  let [initInfo, setInitInfo]=useState([...infoBank]) // copy infoBank data 
  const [info, setInfo] = useState([]) // filtered info for to child 
  const [numInfoToGet] = useState(5)

 
  useEffect(()=>{
      if(info.length===0) getInfo()
  },[])
  
  const getInfo=()=>{
    
    let newInfo=[]
    while(newInfo.length<numInfoToGet){
        let ranIdx=getRandomNum(0,initInfo.length-1)
       
        if(initInfo.length===0){
          alert("we are out")
          setInitInfo([...infoBank])
        }else{
        newInfo.push(initInfo[ranIdx])
        initInfo.splice(ranIdx,1)
        }
   
    }
    setInfo(newInfo)
  }

  const getRandomNum=(min, max)=>{
      let ranNum=Math.floor(Math.random()*(max-min+1)+min);
      return ranNum
  }

  return (
    <div className="Colloquialboard">
      <Headbar getInfo={getInfo}/>

      <Colloquial info={info} />
     
    </div>
  )
}
