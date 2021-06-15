//import { token } from '$lib/config.js'
import fetch from 'node-fetch'

//const url = 'https://moviereview-api.hyper.io/api/reviews'
const url = 'https://3000-salmon-antlion-fwwak7ju.ws-us09.gitpod.io/api/reviews'
export async function get({ params }) {

  //console.log('api/reviews/[id].json.js get()', { params })
  //const bearer = token()
  const review = await fetch(`${url}/${params.id}`, {
    method: 'GET'
    // ,
    // headers: {
    //   Authorization: `Bearer ${bearer}`
    // }
  }).then(r => r.json())

  console.log({review})

  return {
    body: review
  }

}

export async function put({ params, body }) {
  //const bearer = token()
  console.log('api/reviews/[id].json.js put()', {body})

  const result = await fetch(`${url}/${params.id}`, {
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