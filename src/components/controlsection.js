import React, { useState, useEffect } from 'react';
import { Checkbox } from 'semantic-ui-react';
import "semantic-ui-css/components/checkbox.min.css";
import '../styles/controlsection.scss'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import firebase from '../firebase'

const ControlSection = (props) => {
  const analytics = firebase.analytics()
  const [checked, setChecked] = useState({
    checkOne: false
  })
  const [allowProgress, setAllowProgress] = useState(false)
  const { doSetPreviewMode, previewMode, 
    doDownloadImage, doResetChanges , imageUrl, previewBackground,
    previewBoldText, previewText, selectedPreview
  } = props
  useEffect(() => {
    if (
      (previewBackground.length || imageUrl.length) 
      && previewBoldText && previewText 
      && checked.checkOne
    ) {
      setAllowProgress(true)
    }
  }, [previewBackground, imageUrl, previewText, 
    previewBoldText, setAllowProgress, checked])
  
  const url = "https://betterandstronger.netlify.app"
  const hashtags = ["betterandstronger", "connectmarketingservices"]
  const hashtag = "%23betterandstronger"
  // Change to the handle of Connect Marketing
  const related = "deo_joe"
  const quote = `Post COVID-19, ${previewBoldText} ${previewText}`

  const copyFunction = () => {
    analytics.logEvent("copy_message")
    let copyText = document.querySelector(".message-text");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }
  
  return (
    <div className={"control-section"}>
      {
        !previewMode &&

        <div className={"terms-section"}>
          <h3>
            Tick the box to Agree to our Terms &amp; Conditions
          </h3>

          <Checkbox
            label={<label htmlFor="checkbox-one">Allow my content to be used as part of the #BetterAndStronger campaign by <a href="https://connectmarketingonline.com" rel="noopener noreferrer" target={"_blank"}>connectmarketingonline.com</a></label>}
            onChange={e => {
              setChecked(prevState => ({
                checkOne: !prevState.checkOne
              }))
            }}
            id={"checkbox-one"}
            checked={checked.checkOne}
          />
        </div>
      }

      <div className={previewMode ? "centered control-buttons" : "control-buttons"}>
        {
          !previewMode 
          
          ?

          <>
            <button 
              className={"reset-button main-button"} 
              onClick={doResetChanges}
            >
              Reset
            </button>

            <button 
              className={"continue-button main-button"} 
              onClick={e => doSetPreviewMode(true)}
              disabled={!allowProgress}
            >
              Continue
            </button>
          </>

          :

          <>
            <button 
              className={"reset-button main-button"} 
              onClick={doResetChanges}
            >
              Restart
            </button>
            <button 
              className={"download-button main-button"} 
              onClick={() => doDownloadImage(selectedPreview)}
            >
              Download
            </button>

            <div className={"message-container"}>
              <div className={"share-container"}>
                <a href={`https://twitter.com/intent/tweet?text=${quote}&url=${url}&hashtags=${hashtags.join(",")}`} rel="noreferrer noopener" target={"_blank"}>
                  <button 
                    className={"share-button main-button"} 
                    style={{ marginRight: "1.5rem" }} 
                    onClick={() => {
                      analytics.logEvent("twitter_share")
                    }}
                  >
                    <span><Twitter /></span>
                    <span>Share message</span>
                  </button>
                </a>

                <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}&hashtag=${hashtag}`} rel="noreferrer noopener" target={"_blank"}>
                  <button 
                    className={"share-button main-button"}
                    onClick={() => {
                      analytics.logEvent("facebook_share")
                    }}
                  >
                    <span><Facebook /></span>
                    <span>Share message</span>
                  </button>
                </a>
              </div>

              <div className={"copy-container"}>
                <code className={"message-text"}>
                  {quote}{" "}
                  <br/>
                  <span>#{hashtags.join(" #")}{" "}{url}</span>
                </code>
                <button className={"main-button"} onClick={copyFunction}>
                  Copy
                </button>
              </div>
            </div>
          </>
        }
        
      </div>
      
    </div>
  )
}

export default ControlSection