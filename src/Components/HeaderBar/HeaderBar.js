import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './HeaderBar.scss'

export default ({getInfo,options,getNumbersOfInfo}) => {
  return (
    <div className="HeadBar">
      <button className="btn" onClick={()=>getInfo("new")}>New Sentences</button>
      <button className="btn" onClick={()=>getInfo("more")}>More Sentences</button>
      <Dropdown options={options} getNumbersOfInfo={getNumbersOfInfo} />
    </div>
  )
}