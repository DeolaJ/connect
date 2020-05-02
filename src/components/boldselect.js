import React, { useState, useEffect } from 'react';

const BoldSelect = (props) => {

  const [ boldText, setBoldText ] = useState("I will")
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
      text: "We will"
    },
    {
      id: 3,
      text: "You will"
    }
  ]

  return (
    <label>
      Set bold text
      <select
        value={boldText}
        onChange={e => setBoldText(e.target.value)} 
        onBlur={e => setBoldText(e.target.value)}
      >
        <option>Select an option</option>
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