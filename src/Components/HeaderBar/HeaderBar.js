import React from 'react'
import './HeaderBar.scss'

export default ({getInfo}) => {
  return (
    <div className="HeadBar">
      <button onClick={()=>getInfo("new")}>New Sentences</button>
      <button onClick={()=>getInfo("more")}>More Sentences</button>
    </div>
  )
}
