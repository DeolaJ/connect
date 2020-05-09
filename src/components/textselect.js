import React, { useState, useEffect } from 'react';

const TextSelect = (props) => {
  const { doSetPreviewText, previewText } = props
  const [ bodyText, setBodyText ] = useState(previewText)
  useEffect(() => {
    doSetPreviewText(bodyText)
  }, [bodyText, setBodyText, doSetPreviewText])

  return (
    <label>
      Set body text
      <input 
        type="text" 
        value={bodyText}
        placeholder={"Enter desired message"}
        className={"other-body-input"} 
        onChange={e => setBodyText(e.target.value)} 
        onBlur={e => setBodyText(e.target.value)}
      />
    </label>
  )
}

export default TextSelect