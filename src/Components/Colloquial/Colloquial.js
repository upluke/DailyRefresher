import React from 'react'
import './Colloquial.scss'

export default ({test}) => {
  let testList = test.map(t => {
    return <p>{t}</p>
  })
  return <div className="Colloquial">{testList}</div>
}
