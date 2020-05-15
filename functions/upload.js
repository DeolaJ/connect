import cloudinary from 'cloudinary'

const config = JSON.parse(process.env.REACT_APP_CLOUDINARY)

// Set Cloudinary config
cloudinary.config({ 
  cloud_name: config.cloud_name, 
  api_key: config.api_key, 
  api_secret: config.api_secret
})

exports.handler = async (event, context) => {

  try {
    const data = JSON.parse(event.body)
    const { dataUrl, checked } = data
    let timeStamp = new Date()
    timeStamp = timeStamp.toJSON()
    
    // Set folder for uploads depending on whether the User ticked the checkbox
    let day = checked ? `${timeStamp.substring(0, 10)}/accepted` : timeStamp.substring(0, 10)
    
    let promise = await cloudinary.v2.uploader.upload(dataUrl, {
      public_id: `${day}/p-covid-${timeStamp}`,
      tags: "connect-campaign" // Campaign tag
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Image uploaded Successfully",
        body: JSON.stringify(promise)
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error occurred while uploading",
        body: JSON.stringify(err)
      })
    }
  }
}