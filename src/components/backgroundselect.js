import React, { useState, useEffect } from 'react';

const BackgroundSelect = (props) => {

  const { doSetPreviewBackground, previewBackground } = props
  const [ backgroundText, setBackgroundText ] = useState(previewBackground)

  useEffect(() => {
    doSetPreviewBackground(backgroundText)
  }, [backgroundText, setBackgroundText, doSetPreviewBackground])

  const backgroundOptions = [
    {
      id: 1,
      text: "pinot",
      value: "pinot"
    },
    {
      id: 2,
      text: "witching",
      value: "witching"
    },
    {
      id: 3,
      text: "space",
      value: "space"
    },
    {
      id: 4,
      text: "sinred",
      value: "sinred"
    },
    {
      id: 5,
      text: "expresso",
      value: "expresso"
    },
    {
      id: 6,
      text: "ocean",
      value: "ocean"
    },
    {
      id: 7,
      text: "lawrencium",
      value: "lawrencium"
    },
    {
      id: 8,
      text: "yna",
      value: "yna"
    },
    {
      id: 9,
      text: "coal",
      value: "coal"
    },
    {
      id: 10,
      text: "love",
      value: "love"
    },
    {
      id: 11,
      text: "ibiza",
      value: "ibiza"
    },
    {
      id: 12,
      text: "frost",
      value: "frost"
    }
  ]

  return (
    <div className={"background-select"}>
      <label htmlFor={"background-options"}>
        Set Background Color

        {
          (backgroundText.length > 0) &&
          <button aria-label={"reset background color"} title="reset background color" className={"reset-background"} onClick={() => setBackgroundText("")}>&times;</button>
        }
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
              style={{ padding: "1rem" }}
              className={backgroundText === option.value ? `active ${option.value}` : option.value}
            >
            </button>
          ))
        }
      </div>
      {/* <br/>
      <label>
        Set custom background color
        <input 
          type="text" 
          value={backgroundText}
          placeholder={"#000000"}
          className={"other-body-input"} 
          onChange={e => setBackgroundText(e.target.value)} 
          onBlur={e => setBackgroundText(e.target.value)}
        />
      </label> */}
    </div>
  )
}

export default BackgroundSelect