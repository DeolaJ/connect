import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Responsive } from 'semantic-ui-react'
import sample1 from '../images/1.jpg'
import sample2 from '../images/2.jpg'
import '../styles/previewContainer.scss'
import logo from '../images/crest_logo.png'
import logoMed from '../images/crest_logo_med.png'
import covid from '../images/header_small.png'
import covidMed from '../images/header_med.png'
import covidLarge from '../images/header.png'

const PreviewContainer = (props) => {
  const { previewText, previewBoldText, previewBackground, imageUrl,
    previewMode, doSetPreviewMode, selectedPreview 
  } = props

  const [ containerWidth, setContainerWidth ] = useState(0)
  const [ allowPreview, setAllowPreview ] = useState(false)

  useEffect(() => {
    if (
      previewBackground.length || imageUrl.length || 
      previewText.length
    ) {
      setAllowPreview(true)
    }
  }, [previewBackground, imageUrl, previewText, 
    setAllowPreview])

  const resizeContainers = () => {
    const width = (document.getElementById("image-preview") && document.getElementById("image-preview").clientWidth) || 
      document.getElementById("color-preview").clientWidth
    setContainerWidth(width)
  }

  useLayoutEffect(() => {
    if (allowPreview) {
      resizeContainers()
      window.addEventListener("resize", resizeContainers)
    } else {
      window.removeEventListener("resize", resizeContainers)
    }
  }, [allowPreview, previewMode])

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
          {/* <h4>Click an option below to select your preferred type</h4> */}
          <div className={"menu-list"} role="menu">
            <div 
              className={previewBackground.length ? `image-preview preview ${previewBackground}` : `image-preview preview`} 
              style={{ 
                backgroundImage: !previewBackground.length ? `url(${imageUrl})` : null, 
                height: `${containerWidth}px`
              }}
              id={"image-preview"}
            >
              <div className={"text-container"}>
                <div>
                  <Responsive maxWidth={460}>
                    <img src={covid} alt="post covid logo" />
                  </Responsive>
                  <Responsive minWidth={460.2} maxWidth={768} >
                    <img src={covidMed} alt="post covid logo" />
                  </Responsive>
                  <Responsive minWidth={768.2} maxWidth={900} >
                    <img src={covid} alt="post covid logo" />
                  </Responsive>
                  <Responsive minWidth={900.2}>
                    <img src={covidMed} alt="post covid logo" />
                  </Responsive>
                  {
                    previewBoldText &&
                    <div className={"bold-text"}>{previewBoldText}</div>
                  }
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

        <>
          <div>
            <button className={"back-button main-button"} onClick={e => doSetPreviewMode(false)}><span>&#60;</span> Back</button>
          </div>

          <div className={"final-result"} style={{ height: `${containerWidth + 20}px`}}>
            
            <div 
              className={previewBackground.length ? `image-preview preview ${previewBackground}` : `image-preview preview`}
              style={{ 
                backgroundImage: !previewBackground.length ? `url(${imageUrl})` : null,
                height: `${containerWidth}px`
              }}
              id={"image-preview"}
            >
              <div className={"text-container"}>
                <div>
                  <Responsive maxWidth={400}>
                    <img src={covid} alt="post covid logo" />
                  </Responsive>
                  <Responsive minWidth={401} maxWidth={1020} >
                    <img src={covidMed} alt="post covid logo" />
                  </Responsive>
                  <Responsive minWidth={1021}>
                    <img src={covidLarge} alt="post covid logo"/>
                  </Responsive>
                  {
                    previewBoldText &&
                    <div className={"bold-text"}>{previewBoldText}</div>
                  }
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
              className={previewBackground.length ? `${selectedPreview}-preview final ${previewBackground}` : `${selectedPreview}-preview final`}
              style={{ 
                backgroundImage: !previewBackground.length ? `url(${imageUrl})` : null,
                width: "1080px", 
                height: "1080px",
                zIndex: "-2"
              }}
            >
              <div className={"text-container"}>
                <div> 
                  <img src={covidLarge} alt="post covid logo"/>
                  {
                    previewBoldText &&
                    <div className={"bold-text"}>{previewBoldText}</div>
                  }
                  <div className={"body-text"}>{previewText}</div>
                </div>
              </div>
              <div className="image-footer">
                <img src={logoMed} alt="connect marketing logo" />
                <p>
                  #Better<span>AndStronger</span>
                </p>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default PreviewContainer