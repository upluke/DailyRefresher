import React from 'react'
import './HeaderBar.scss'

export default ({getInfo}) => {
  return (
    <div className="HeadBar">
      <button onClick={getInfo}>New Sentences</button>
      <button>More Sentences</button>
    </div>
  )
}
