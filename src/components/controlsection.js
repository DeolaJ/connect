import React, { useState, useEffect } from 'react';
import { Checkbox } from 'semantic-ui-react';
import "semantic-ui-css/components/checkbox.min.css";
import '../styles/controlsection.scss'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Loader } from '../images/loadier.svg'
import firebase from '../firebase'

const ControlSection = (props) => {
  const analytics = firebase.analytics()
  const [checked, setChecked] = useState({
    checkOne: false
  })
  const [allowProgress, setAllowProgress] = useState(false)
  const { doSetPreviewMode, previewMode, 
    doDownloadImage, doResetChanges , imageUrl, previewBackground,
    previewBoldText, previewText, selectedPreview, uploadUrl, uploading,
    errorMessage
  } = props

  // Updates the activation of the Continue button which is deactivated by default
  useEffect(() => {
    if (
      (previewBackground.length || imageUrl.length) 
      && previewBoldText && previewText
    ) {
      setAllowProgress(true)
    }
  }, [previewBackground, imageUrl, previewText, 
    previewBoldText, setAllowProgress, checked])
  
  const url = "https://betterandstronger.web.app"
  const hashtags = ["betterandstronger", "connectmarketingservices"]
  const hashtag = "%23betterandstronger"
  const quote = `Post COVID-19, ${previewBoldText} ${previewText}`

  // Allows user to copy generated message
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
          <Checkbox
            label={<label htmlFor="checkbox-one">I am interested in my content being used as part of the #betterandstronger campaign by <a href="https://connectmarketingonline.com" rel="noopener noreferrer" target={"_blank"}>Connect-Marketing</a></label>}
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
          
          // Buttons shown when a user is Editing the image
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

          // Buttons shown when a user has clicked continue
          <>
            <button 
              className={"reset-button main-button"} 
              onClick={doResetChanges}
            >
              Restart
            </button>

            {
              // This button generates the final image for the user
              (uploadUrl.length === 0) &&

              <button 
                className={"download-button main-button"} 
                onClick={() => doDownloadImage(checked.checkOne)}
                style={ uploading ? { pointerEvents: "none", cursor: "not-allowed" } : null}
              >
                {
                  uploading 
                  
                  ?

                  <>
                    <span><Loader /></span>
                    <span>Generating...</span>
                  </>

                  :

                  <>
                    <span>Generate Image</span>
                  </>
                }
              </button>

            }

            {
              // This button is avaliable when the Cloudinary image link is available
              (uploadUrl.length > 0) &&
              <a href={uploadUrl} rel="noopener noreferrer" download="p-covid.png" target="_blank">
                <button 
                  className={"download-button main-button"}
                >
                  Click to view
                </button>
              </a>
            }

            {
              // This shows errors while uploading
              (errorMessage.length > 0) &&
              <div style={{ margin: "1rem 0", color: "rgba(255, 255, 255, .7)" }}>
                {errorMessage}
              </div>
            }

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
                {/* User is allowed to copy their generated message for sharing on Social media */}
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