//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const WORKSHOP_API = process.env['WORKSHOP_API']
const moviesURL = `${WORKSHOP_API}/reviews`

export async function get({ params }) {
  //const bearer = token()
  const review = await fetch(`${moviesURL}/${params.id}`, {
    method: 'GET'
    // ,
    // headers: {
    //   Authorization: `Bearer ${bearer}`
    // }
  }).then(r => r.json())

  return {
    body: review
  }

}

export async function put({ params, body }) {
  //const bearer = token()
  const result = await fetch(`${moviesURL}/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
      // ,
      // Authorization: `Bearer ${bearer}`
    },
    body: JSON.stringify(body)
  }).then(r => r.json())

  return {
    body: result
  }
}