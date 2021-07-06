import fetch from 'node-fetch'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const WORKSHOP_API = process.env['WORKSHOP_API']
const moviesURL = `${WORKSHOP_API}/movies/_search`  

export async function post({ body, headers }) {
    const bearerToken = headers.authorization
    const result = await fetch(moviesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${bearerToken}`
      },
      body: JSON.stringify(body)  
    }).then(r => { 
      return r.json()
    })
  
    return {
      body: result
    }
  }
  