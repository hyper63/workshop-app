//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import {propOr} from 'ramda'
//const url = 'https://moviereview-api.hyper.io/api/movies'
const moviesURL = 'https://3000-salmon-antlion-fwwak7ju.ws-us09.gitpod.io/api/reactions'

export async function post({body}) {
 
  //const bearer = token()

  /*
  
  curl -X POST http://localhost:3000/api/reactions 
  -H 'Content-Type: application/json' 
  -d '{"id": "reaction-1-review-1-commando", "reviewId": "review-1-commando-1", "reaction": "dislike", "user": "Arnold"}'

  */


  console.log('POST reaction: ', {body})

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


export async function put({ params, body }) {
  const bearer = token()
  const result = await fetch(`${url}/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearer}`
    },
    body: JSON.stringify(body)
  }).then(r => r.json())

  return {
    body: result
  }
}