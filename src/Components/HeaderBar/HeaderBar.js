import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './HeaderBar.scss'

export default ({getInfo,options,getNumbersOfInfo}) => {
  return (
    <div className="HeadBar">
      <button onClick={()=>getInfo("new")}>New Sentences</button>
      <button onClick={()=>getInfo("more")}>More Sentences</button>
      <Dropdown options={options} getNumbersOfInfo={getNumbersOfInfo} />
    </div>
  )
}