//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const WORKSHOP_API = process.env['WORKSHOP_API']
const moviesURL = `${WORKSHOP_API}/reviews`

export async function post({body}) {
  //const bearer = token()
  const result = await fetch(`${moviesURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())

  return {
    body: result
  }
}
