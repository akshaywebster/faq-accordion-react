import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, title, info }) => {
  // const [showInfo, setShowInfo] = useState(false) //=> to hide all accordion elements info by default

  const [showInfo, setShowInfo] = useState(id === 1 ? true : false) // to make the first accordion element open by default

  const toggleBtn = () => {
    setShowInfo(!showInfo)
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleBtn}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
