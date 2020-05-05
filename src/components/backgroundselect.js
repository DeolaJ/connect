import React, { useState, useEffect } from 'react';

const BackgroundSelect = (props) => {

  const [ backgroundText, setBackgroundText ] = useState("")
  const { doSetPreviewBackground } = props

  useEffect(() => {
    doSetPreviewBackground(backgroundText)
  }, [backgroundText, setBackgroundText, doSetPreviewBackground])

  const backgroundOptions = [
    {
      id: 1,
      text: "blue",
      value: "blue"
    },
    {
      id: 2,
      text: "red",
      value: "red"
    },
    {
      id: 3,
      text: "yellow",
      value: "yellow"
    },
    {
      id: 4,
      text: "teal",
      value: "teal"
    },
    {
      id: 5,
      text: "peru",
      value: "peru"
    },
    {
      id: 6,
      text: "white",
      value: "white"
    },
    {
      id: 7,
      text: "black",
      value: "black"
    },
    {
      id: 8,
      text: "darkred",
      value: "darkred"
    },
    {
      id: 9,
      text: "darkblue",
      value: "darkblue"
    },
    {
      id: 10,
      text: "aliceblue",
      value: "aliceblue"
    },
    {
      id: 11,
      text: "grey",
      value: "grey"
    },
    {
      id: 12,
      text: "tan",
      value: "tan"
    }
  ]

  return (
    <div className={"background-select"}>
      <label htmlFor={"background-options"}>
        Select Background (optional)
      </label>

      <div className={"background-options"} role={"listbox"} id={"background-options"}>
        {
          backgroundOptions.map((option) => (
            <button
              key={option.id} 
              aria-label={option.text}
              onKeyUp={e => setBackgroundText(e.target.value)}
              onClick={e => setBackgroundText(e.target.value)}
              role={"option"}
              value={option.value}
              aria-selected={backgroundText === option.value}
              style={{ backgroundColor: option.value, padding: "1rem" }}
            >
            </button>
          ))
        }
      </div>
      <br/>
      <label>
        Custom Background color (HEX)
        <input 
          type="text" 
          value={backgroundText}
          placeholder={"#000000"}
          className={"other-body-input"} 
          onChange={e => setBackgroundText(e.target.value)} 
          onBlur={e => setBackgroundText(e.target.value)}
        />
      </label>
    </div>
  )
}

export default BackgroundSelect