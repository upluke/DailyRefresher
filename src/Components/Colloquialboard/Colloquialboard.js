import React, {useState,useEffect} from 'react'
import Headbar from '../HeaderBar/HeaderBar'
import Colloquial from '../Colloquial/Colloquial'

import infoBank from '../../infoBank'
import './Colloquialboard.scss'



  
  
export default () => {
    let [initInfo, setInitInfo]=useState([...infoBank]) // copy infoBank data 
    const [info, setInfo] = useState([]) // filtered info for to child 
    const [numInfoToGet] = useState(3)
  
  
    const getInfo=React.useCallback((a)=>{
      let newInfo=[]
      if(initInfo.length>0){
      // while(newInfo.length<numInfoToGet){
      //     let ranIdx=getRandomNum(0,initInfo.length-1)
      //     newInfo.push(initInfo[ranIdx])
      //     initInfo.splice(ranIdx,1)
      //     }
      newInfo=getNumsOfInfo()
      }else{
          console.log("we are out")
          setInitInfo([...infoBank])
         }
      if(a==="new"){
        setInfo([...newInfo])
      }else{
         setInfo(ps=>[...ps, ...newInfo]  
          )   
         console.log(info.length)
      }
    })
  
    useEffect(()=>{
      if(info.length===0) getInfo()
      },[getInfo, info.length])
  
    const getNumsOfInfo=()=>{
        let infoSet=[]
        for(let i =0;i<numInfoToGet;i++){
          let randomIdx=getRandomNum(0,initInfo.length-1)
          infoSet.push(initInfo[randomIdx])
          initInfo.splice(randomIdx,1)
        }
        return infoSet
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