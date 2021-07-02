//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import {propEq, propOr, not} from 'ramda'
import createJWT from '$lib/create-jwt'
import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const WORKSHOP_API = process.env['WORKSHOP_API']
const moviesURL = `${WORKSHOP_API}/movies`  

//console.log({WORKSHOP_API})

export async function get(req) {
  const {params} = req
  //const bearer = token()
  const user = req.query.get('user') || ''
  const scope = req.query.get('scope') || ''
  const token = createJWT({user, scope})
  console.log('token:', token)

  const result = await fetch(`${moviesURL}/${params.id}`, {
    method: 'GET'
  }).then(r => r.json())
  .catch(err => {
    console.log('APP API movies/[id]/index.json.js error', err)

  })

  console.log('APP API result IS', result)
  const ok = propOr( false ,"id", result)
  console.log({ok})

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
  const headers = { authorization: `Bearer ${token}` } 

// const result = await fetch(apiUrl, { headers: { authorization: `Bearer ${token}` } })
//   .then(r => r.json())

  const reviews = await fetch(reviewsURL, {
    headers,
    method: 'GET'
  }).then(r => r.json())

  result.reviews = propOr([], "docs", reviews)
  
  return {
    body: {...result, ok: true, status: 200, message: null}
  }
}


