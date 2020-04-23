import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})


exports.handler = (event, context, callback) => {
    // const data = JSON.parse(event.body)

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: "connected",
            client: client,
            q: q
        })
    })
}