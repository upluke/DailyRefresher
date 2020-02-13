import React, {useState,useEffect,useCallback} from 'react'
import Headbar from '../HeaderBar/HeaderBar'
import Colloquial from '../Colloquial/Colloquial'

import infoBank from '../../infoBank'
import uuid from "uuid/v4"
import './Colloquialboard.scss'



  
  

export default () => {
  let [initInfo, setInitInfo]=useState([...infoBank]) // copy infoBank data 
  const [info, setInfo] = useState([]) // filtered info for to child 
  const [numbersOfInfo, getNumbersOfInfo] = useState(5)
  const options = [
    { name: "Five", value: 5 },
    { name: "Three", value: 3 },
    { name: "One", value: 1 }
  ];

  const getInfo=useCallback((a)=>{
    let newInfo=[]
    if(initInfo.length>0&&initInfo.length>=numbersOfInfo){ // prevent info from undefinded
    newInfo=getNumsOfInfo()
    }else{
        console.log("Info is out and loading more....")
        setInitInfo([...infoBank])
       }
    if(a==="new"){
      setInfo([...newInfo])
    }else{
       setInfo(ps=>[...ps, ...newInfo]  
        )   
    }
  })

  useEffect(()=>{
    if(info.length===0) getInfo()
    },[getInfo, info.length])

    const getNumsOfInfo=()=>{
        let infoSet=[]
        for(let i =0;i<numbersOfInfo;i++){
          let randomIdx=getRandomNum(0,initInfo.length-1)
          infoSet.push({id:uuid(),info:initInfo[randomIdx]})
          initInfo.splice(randomIdx,1)
        }
        return infoSet
    }
    const getRandomNum=(min, max)=>{
        let ranNum=Math.floor(Math.random()*(max-min+1)+min);
        return ranNum
  }
  console.log(initInfo.length)

  return (
    <div className="Colloquialboard">
      <Headbar getInfo={getInfo} options={options} getNumbersOfInfo={getNumbersOfInfo}/>
      <Colloquial info={info} />
     
    </div>
  )
}