import fetch from 'node-fetch'
import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const WORKSHOP_API = process.env['WORKSHOP_API']
const moviesURL = `${WORKSHOP_API}/reviews`

export async function get({ params, headers }) {
  const bearerToken = headers.authorization
  const review = await fetch(`${moviesURL}/${params.id}`, {
    method: 'GET',
    headers: { authorization: `${bearerToken}` } 
  }).then(r => r.json())

  return {
    body: review
  }
}

export async function put({ params, body, headers }) {
 
  const bearerToken = headers.authorization
  const result = await fetch(`${moviesURL}/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      headers: { authorization: `${bearerToken}` } 
    },
    body: JSON.stringify(body)
  }).then(r => r.json())

  return {
    body: result
  }
}