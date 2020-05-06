import React, { useState, useEffect, useLayoutEffect } from 'react'
import sample1 from '../images/1.jpg'
import sample2 from '../images/2.jpg'
import '../styles/previewContainer.scss'
import logo from '../images/crest_logo.png'
import covid from '../images/header_small.png'

const PreviewContainer = (props) => {
  const { previewText, previewBoldText, previewBackground, imageUrl,
    previewMode, doSetActivePreview, selectedPreview 
  } = props

  const [ selectPreview, setSelectPreview ] = useState({ type: selectedPreview })
  const [ containerWidth, setContainerWidth ] = useState(0)
  const [ allowPreview, setAllowPreview ] = useState(false)

  const setPreview = (type) => {
    const newSelectObj = { type: type };
    setSelectPreview(newSelectObj)
  }

  useEffect(() => {
    if (
      previewBackground.length || imageUrl.length || 
      previewBoldText || previewText
    ) {
      setAllowPreview(true)
    }
  }, [previewBackground, imageUrl, previewText, 
    previewBoldText, setAllowPreview])

  const resizeContainers = () => {
    const width = (document.getElementById("image-preview") && document.getElementById("image-preview").clientWidth) || document.getElementById("color-preview").clientWidth
    setContainerWidth(width)
  }

  useLayoutEffect(() => {
    if (allowPreview) {
      resizeContainers()
      window.addEventListener("resize", resizeContainers)
    } else {
      window.removeEventListener("resize", resizeContainers)
    }
  }, [allowPreview])

  useEffect(() => {
    doSetActivePreview(selectPreview.type)
  }, [selectPreview, setSelectPreview, doSetActivePreview])

  return (
    <div 
      className={!previewMode ? "editing-preview preview-container" : "preview-container"} 
    >
      {
        !allowPreview &&

        <div className={"samples"}>
          <h4>Sample Final Uploads</h4>

          <div className={"sample-list"}>
            <div>
              <img src={sample1} alt="Sample upload 1"/>
            </div>
            <div>
              <img src={sample2} alt="Sample upload 2"/>
            </div>
          </div>
        </div>
      }
      {
        !previewMode && allowPreview &&

        <>
          <h4>Click your preferred Image type</h4>
          <div className={"menu-list"} role="menu">
            <div 
              className={ selectPreview.type === "image" ? "active image-preview preview" : "image-preview preview"} 
              style={{ backgroundImage: `url(${imageUrl})`, height: `${containerWidth}px` }}
              onClick={e => setPreview("image")}
              onKeyUp={e => setPreview("image")}
              role={"menuitem"}
              tabIndex={0}
              id={"image-preview"}
            >
              <div className={"text-container"}>
                <div>
                  <img src={covid} alt="post covid logo" />
                  <div className={"bold-text"}>{previewBoldText}</div>
                  <div className={"body-text"}>{previewText}</div>
                </div>
              </div>
              <div className="image-footer">
                <img src={logo} alt="connect marketing logo" />
                <p>
                  #Better<span>AndStronger</span>
                </p>
              </div>
            </div>

            <div 
              className={ selectPreview.type === "color" ? "active color-preview preview" : "color-preview preview"}
              style={{ backgroundColor: previewBackground, height: `${containerWidth}px` }}
              onClick={e => setPreview("color")}
              onKeyUp={e => setPreview("color")}
              role={"menuitem"}
              tabIndex={-1}
              id={"color-preview"}
            >
              <div className={"text-container"}>
                <div>
                  <img src={covid} alt="post covid logo" />
                  <div className={"bold-text"}>{previewBoldText}</div>
                  <div className={"body-text"}>{previewText}</div>
                </div>
              </div>
              <div className="image-footer">
                <img src={logo} alt="connect marketing logo" />
                <p>
                  #Better<span>AndStronger</span>
                </p>
              </div>
            </div>
          </div>
        </>
      }

      {
        previewMode && allowPreview &&

        <div className={"final-result"}>
          {
            selectedPreview === "image"

            &&

            <div 
              className={"image-preview preview"} 
              style={{ backgroundImage: `url(${imageUrl})`, height: `${containerWidth}px`}}
              id={"image-preview"}
            >
              <div className={"text-container"}>
                <div>
                  <img src={covid} alt="post covid logo" />
                  <div className={"bold-text"}>{previewBoldText}</div>
                  <div className={"body-text"}>{previewText}</div>
                </div>
              </div>
              <div className="image-footer">
                <img src={logo} alt="connect marketing logo" />
                <p>
                  #Better<span>AndStronger</span>
                </p>
              </div>
            </div>
          }

          {
            selectedPreview === "color"

            &&

            <div 
              className={"color-preview preview"}
              style={{ backgroundColor: previewBackground, height: `${containerWidth}px` }}
              id={"color-preview"}
            >
              <div className={"text-container"}>
                <div>
                  <img src={covid} alt="post covid logo" />
                  <div className={"bold-text"}>{previewBoldText}</div>
                  <div className={"body-text"}>{previewText}</div>
                </div>
              </div>
              <div className="image-footer">
                <img src={logo} alt="connect marketing logo" />
                <p>
                  #Better<span>AndStronger</span>
                </p>
              </div>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default PreviewContainer