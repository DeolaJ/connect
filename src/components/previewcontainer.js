import React, { useState, useEffect } from 'react'

const PreviewContainer = (props) => {
  const { previewText, previewBoldText, previewBackground, imageUrl,
    previewMode, doSetActivePreview, selectedPreview 
  } = props

  const [ selectPreview, setSelectPreview ] = useState({ type: selectedPreview })

  const setPreview = (type) => {
    const newSelectObj = { type: type };
    setSelectPreview(newSelectObj)
  }

  useEffect(() => {
    doSetActivePreview(selectPreview.type)
  }, [selectPreview, setSelectPreview, doSetActivePreview])

  return (
    <div 
      className={!previewMode ? "editing-preview preview-container" : "preview-container"} 
    >
      {
        !previewMode 

        ?

        <div role="menu">
          <div 
            className={ selectPreview.type === "image" ? "active image-preview" : "image-preview"} 
            style={{ backgroundImage: `url(${imageUrl})`}}
            onClick={e => setPreview("image")}
            onKeyUp={e => setPreview("image")}
            role={"menuitem"}
            tabIndex={0}
          >
            <div className={"text-container"}>
              <div className={"bold-text"}>{previewBoldText}</div>
              <div className={"body-text"}>{previewText}</div>
            </div>
          </div>

          <div 
            className={ selectPreview.type === "color" ? "active color-preview" : "color-preview"}
            style={{ backgroundColor: previewBackground }}
            onClick={e => setPreview("color")}
            onKeyUp={e => setPreview("color")}
            role={"menuitem"}
            tabIndex={-1}
          >
            <div className={"text-container"}>
              <div className={"bold-text"}>{previewBoldText}</div>
              <div className={"body-text"}>{previewText}</div>
            </div>
          </div>
        </div>

        :

        <>
          {
            selectedPreview === "image"

            &&

            <div 
              className={"image-preview"} 
              style={{ backgroundImage: `url(${imageUrl})`}}
            >
              <div className={"text-container"}>
                <div className={"bold-text"}>{previewBoldText}</div>
                <div className={"body-text"}>{previewText}</div>
              </div>
            </div>
          }

          {
            selectedPreview === "color"

            &&

            <div 
              className={"color-preview"}
              style={{ backgroundColor: previewBackground }}
            >
              <div className={"text-container"}>
                <div className={"bold-text"}>{previewBoldText}</div>
                <div className={"body-text"}>{previewText}</div>
              </div>
            </div>
          }
        </>

      }
    </div>
  )
}

export default PreviewContainer