import cloudinary from 'cloudinary'

const config = JSON.parse(process.env.REACT_APP_CLOUDINARY)
cloudinary.config({ 
  cloud_name: config.cloud_name, 
  api_key: config.api_key, 
  api_secret: config.api_secret
})

exports.handler = async (event, context) => {

  try {
    const data = JSON.parse(event.body)
    let timeStamp = new Date()
    timeStamp = timeStamp.toJSON()
    let promise = await cloudinary.v2.uploader.upload(data.dataUrl, {
      public_id: `connect/p-covid-${timeStamp}`,
      tags: "connect-campaign"
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