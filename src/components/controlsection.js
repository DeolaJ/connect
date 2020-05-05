import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import "semantic-ui-css/components/checkbox.min.css";
import '../styles/controlsection.scss'

const ControlSection = (props) => {
  const [checked, setChecked] = useState({
    checkOne: false,
    checkTwo: false
  })
  const { doSetPreviewMode, previewMode, doShareImage, 
    doDownloadImage, doResetChanges , imageUrl, previewBackground
  } = props

  return (
    <div className={"control-section"}>
      {
        !previewMode &&

        <div>
          <h3>
            Tick boxes below to Agree to terms &amp; conditions
          </h3>

          <Checkbox
            label={<label htmlFor="checkbox-one">Allow my content to be used as part of the #better&amp;stronger campaign by <a href="https://connectmarketingonline.com" rel="noopener noreferrer" target={"_blank"}>connectmarketingonline.com</a></label>}
            onChange={e => {
              setChecked(prevState => ({
                ...prevState, checkOne: !prevState.checkOne
              }))
            }}
            id={"checkbox-one"}
            checked={checked.checkOne}
          />

          <Checkbox
            label={<label htmlFor="checkbox-two">Allow my data to be used for targeted marketing (Social media sponsored posts)</label>}
            onChange={e => {
              setChecked(prevState => ({
                ...prevState, checkTwo: !prevState.checkTwo
              }))
            }}
            id={"checkbox-two"}
            checked={checked.checkTwo}
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
              disabled={!(imageUrl.length || previewBackground.length)}
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
              Start over
            </button>
            <button 
              className={"share-button main-button"} 
              onClick={doShareImage}
            >
              Share
            </button>
            <button 
              className={"download-button main-button"} 
              onClick={doDownloadImage}
            >
              Download
            </button>
          </>
        }
        
        {
          previewMode &&
          <div>
            <button className={"back-button main-button"} onClick={e => doSetPreviewMode(false)}><span>&#60;</span> Back</button>
          </div>
        }
      </div>
      
    </div>
  )
}

export default ControlSection