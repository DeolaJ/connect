import React, { useEffect, useState } from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import '../styles/adminview.scss'

const AdminView = (props) => {
  const [gallery, setGallery] = useState([])
  const [mobile, setMobile] = useState(false)
  const [passcode, setPasscode] = useState("")
  const cloudName = process.env.REACT_APP_CLOUD_NAME
  const adminCode = process.env.REACT_APP_PASSCODE

  useEffect(() => {
    fetch(`https://res.cloudinary.com/${cloudName}/image/list/connect-campaign.json`)
    .then(response => response.json())
    .then(res => {
      setGallery(res.resources)
    })
  }, [cloudName])

  useEffect(() => {
    if (document.body.clientWidth < 768) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [])

  return (
    <div className={"admin-container"}>

      {
        (!passcode.length || (passcode !== adminCode)) &&
        <div className={"passcode-container"}>
          <label>
            Admin PASSCODE
            <input 
              type="text" 
              onBlur={e => setPasscode(e.target.value)}
              className={"other-body-input"} 
              onChange={e => setPasscode(e.target.value)}
              value={passcode}
              placeholder={"Enter the Admin passcode"}
            />
          </label>
        </div>
      }

      {
        (passcode === adminCode) &&

        <>
          <h2>
            Gallery of User Generated Images
          </h2>

          <div className={"user-images"}>
            <CloudinaryContext cloudName={cloudName}>
              {
                gallery.length !== 0 && gallery.map(data => (
                  <div className="responsive" key={data.public_id}>
                    <div className="img">
                      <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={`https://res.cloudinary.com/${cloudName}/image/upload/${data.public_id}.jpg`}
                      >
                        <Image publicId={data.public_id}>
                          <Transformation
                            crop="scale"
                            width={mobile ? "150" : "300"}
                            dpr="auto"
                            responsive_placeholder="blank"
                          />
                        </Image>
                      </a>
                      <div className="desc">Created at {`${new Date(data.created_at)}`}</div>
                    </div>
                  </div>
                ))
              }
            </CloudinaryContext>
          </div>
        </>
      }
    </div>
  )
}

export default AdminView