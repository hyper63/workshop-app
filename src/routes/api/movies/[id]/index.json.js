
import fetch from 'node-fetch'
import { propOr } from 'ramda'
import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const WORKSHOP_API = process.env['WORKSHOP_API']
const moviesURL = `${WORKSHOP_API}/movies`  

export async function get(req) {
  const {params} = req
  //const bearerToken = req.headers.authorization
  const result = await fetch(`${moviesURL}/${params.id}`, {
    method: 'GET'
  }).then(r => r.json())
  .catch(err => {
    console.log('APP API movies/[id]/index.json.js error', err)

  })

  //console.log('APP API result IS', result)
  const ok = propOr( false ,"id", result)
  //console.log({ok})

  if (!ok) {
    console.log('APP API movies/[id]/index.json.js NOT OK', result)
    result.reviews = []
    return {
      body: result
    } 
  }

  const startindex = req.query.get('startindex') || 0
  const pagesize = req.query.get('pagesize') || 5
  let reviewsURL = `${moviesURL}/${params.id}/reviews?startindex=${startindex}&pagesize=${pagesize}`
  //const headers = { authorization: `${bearerToken}` } 

// const result = await fetch(apiUrl, { headers: { authorization: `Bearer ${token}` } })
//   .then(r => r.json())

  const reviews = await fetch(reviewsURL, {
    method: 'GET'
  }).then(r => r.json())

  result.reviews = propOr([], "docs", reviews)
  
  return {
    body: {...result, ok: true, status: 200, message: null}
  }
}


