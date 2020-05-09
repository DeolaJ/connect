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
      <select
        value={boldText}
        onChange={e => setBoldText(e.target.value)} 
        onBlur={e => setBoldText(e.target.value)}
        className={"main-select main-button"}
      >
        <option value={""}>Select action</option>
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
        {/* <option>Other</option> */}
      </select>

      {/* {
        boldText === "Other" &&
        <input 
          type="text" 
          value={boldText}
          placeholder={"Enter desired action"}
          className={"other-bold-input"} 
          onChange={e => setBoldText(e.target.value)} 
          onBlur={e => setBoldText(e.target.value)}
        />
      } */}
    </label>
  )
}

export default BoldSelect