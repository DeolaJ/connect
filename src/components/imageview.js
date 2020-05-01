import React from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

const ImageView = (props) => {

  return (
    <div className={"profile"}>

      {/* <CloudinaryContext cloudName="dzpntisxj">
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://res.cloudinary.com/dzpntisxj/image/upload/${data.public_id}.jpg`}
        >
          <Image publicId={data.public_id}>
            <Transformation
              crop="scale"
              width={"140"}
              dpr="auto"
              responsive_placeholder="blank"
            />
          </Image>
        </a>
      </CloudinaryContext> */}

    </div>
  )
}

export default ImageView