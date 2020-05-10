import React, { useState, useEffect } from 'react';

const BoldSelect = (props) => {
  const { previewBoldText } = props
  const [ boldText, setBoldText ] = useState(previewBoldText)
  const { doSetPreviewBoldText } = props

  useEffect(() => {
    doSetPreviewBoldText(boldText)
  }, [boldText, setBoldText, doSetPreviewBoldText])

  const boldTextOptions = [
    {
      id: 1,
      text: "I will"
    },
    {
      id: 2,
      text: "I learnt"
    },
    {
      id: 3,
      text: "I hope"
    },
    {
      id: 4,
      text: "I realize"
    },
    {
      id: 5,
      text: "I was reminded"
    }
  ]

  return (
    <label>
      Select action
      <select
        value={boldText}
        onChange={e => setBoldText(e.target.value)} 
        onBlur={e => setBoldText(e.target.value)}
        className={"main-select main-button"}
      >
        {
          boldTextOptions.map(option => (
            <option 
              key={option.id} 
              value={option.text} 
            >
              {option.text}
            </option>
          ))
        }
      </select>
    </label>
  )
}

export default BoldSelect