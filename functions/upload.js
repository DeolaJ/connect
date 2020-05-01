import cloudinary from 'cloudinary'

cloudinary.config({ 
  cloud_name: process.env.REACT_APP_CLOUDNAME, 
  api_key: process.env.REACT_APP_API_KEY, 
  api_secret: process.env.REACT_APP_SECRET_KEY
})

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)

  let promise = await cloudinary.uploader.upload(data.file, {
    tag: "connect-campaign"
  })

  promise
  .then(response => response.json())
  .then(response => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
          message: "connected",
          response: response
      })
    })
  })
  .catch((error) => {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
          message: "Error occurred while uploading",
          error: error
      })
    })
  })
}