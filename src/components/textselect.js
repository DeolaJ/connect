import React, { useState, useEffect } from 'react';

const TextSelect = (props) => {
  const { doSetPreviewText, previewText } = props
  const [ bodyText, setBodyText ] = useState(previewText)
  useEffect(() => {
    doSetPreviewText(bodyText)
  }, [bodyText, setBodyText, doSetPreviewText])

  return (
    <label>
      Message
      <input 
        type="text" 
        value={bodyText}
        placeholder={"Enter desired message"}
        className={"other-body-input"} 
        // Set a limit of 50 characters to the Text field
        onChange={e => {
          if (bodyText.length <= 50) {
            setBodyText(e.target.value)
          } else {
            setBodyText(bodyText.substring(0, 50))
          }
        }} 
        onBlur={e => {
          if (bodyText.length <= 50) {
            setBodyText(e.target.value)
          } else {
            setBodyText(bodyText.substring(0, 50))
          }
        }}
      />
      <p 
        style={{ color: bodyText.length > 45 ? "#ff6666" : null }}
        className={"body-control"}
      >
        {bodyText.length <= 50 ? bodyText.length : 50}/50
      </p>
    </label>
  )
}

export default TextSelect