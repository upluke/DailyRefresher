import React from 'react'
import './Colloquial.scss'

export default ({info}) => {
   
  try{
  let testInfo = info.map(i=>{
     return <p className="info">{i.info}</p>
  })
  
  return <div className="Colloquial">{testInfo}</div>
  }catch(err){
      alert(err)
  }
// return(<div></div>)
}
