import React, { useState, useLayoutEffect } from 'react'
import { Responsive } from 'semantic-ui-react'
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

  // Ensures the Preview Container image is a square at all times
  const resizeContainers = () => {
    const width = document.getElementById("image-preview") && document.getElementById("image-preview").clientWidth
    setContainerWidth(width)
  }

  // Updates the Preview Container dimensions when a user clicks continue or resizes their phone
  useLayoutEffect(() => {
    resizeContainers()
    window.addEventListener("resize", resizeContainers)
  }, [previewMode])

  // Variable which checks if the devices is an IOS device
  let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  
  return (
    <div 
      className={!previewMode ? "editing-preview preview-container" : "preview-container"} 
    >
      {
        !previewMode &&

        <>
          <div className={"menu-list"} role="menu">
            <div 
              className={previewBackground.length ? `image-preview preview ${previewBackground}` : `image-preview preview`} 
              style={{ 
                backgroundImage: !previewBackground.length ? `url(${imageUrl})` : null, 
                height: `${containerWidth}px`
              }}
              id={"image-preview"}
            >
              {
                !previewBackground.length &&
                <div className={"overlay"}></div>
              }
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
                  #betterandstronger
                </p>
              </div>
            </div>
          </div>
        </>
      }

      {
        previewMode &&

        <>
          <div>
            <button className={"back-button main-button"} onClick={e => doSetPreviewMode(false)}><span>&#60;</span> Back</button>
          </div>

          <div className={"final-result"} style={{ height: `${containerWidth + 5}px` }}>
            
            <div 
              className={previewBackground.length ? `image-preview preview ${previewBackground}` : `image-preview preview`}
              style={{ 
                backgroundImage: !previewBackground.length ? `url(${imageUrl})` : null,
                height: `${containerWidth}px`
              }}
              id={"image-preview"}
            >
              {
                !previewBackground.length &&
                <div className={"overlay"}></div>
              }
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
                  #betterandstronger
                </p>
              </div>
            </div>

            {/* Actual Image which is downloaded, but is hidden from view */}
            <div 
              className={previewBackground.length ? `${selectedPreview}-preview final ${previewBackground} ${isIOS && "ios"}` : `${selectedPreview}-preview final ${isIOS && "ios"}`}
              style={{ 
                backgroundImage: !previewBackground.length ? `url(${imageUrl})` : null,
                // IOS devices use Retina display, so their image is scaled down by default here
                width: isIOS ? "400px" : "1080px", 
                height: isIOS ? "400px" : "1080px",
                margin: isIOS ? "0" : null,
                zIndex: "-2"
              }}
            >
              {
                !previewBackground.length &&
                <div className={"overlay"}></div>
              }
              <div className={"text-container"}>
                <div> 
                  {/* IOS images are also smaller */}
                  {
                    isIOS

                    ?

                    <img src={covidMed} alt="post covid logo" />

                    :

                    <img src={covidLarge} alt="post covid logo"/>

                  }
                  {
                    previewBoldText &&
                    <div className={"bold-text"}>{previewBoldText}</div>
                  }
                  <div className={"body-text"}>{previewText}</div>
                </div>
              </div>
              <div className="image-footer">
                {/* IOS images are also smaller */}
                {
                  isIOS

                  ?

                  <img src={logo} alt="connect marketing logo" />

                  :

                  <img src={logoMed} alt="connect marketing logo" />
                }
                <p>
                  #betterandstronger
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