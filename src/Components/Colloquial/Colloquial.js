import React from 'react'
import './Colloquial.scss'

export default ({test}) => {
    console.log(test)
  let testList = test.map(t => {
    return <p>{t.info}</p>
  })
  return <div className="Colloquial">{testList}</div>
}
