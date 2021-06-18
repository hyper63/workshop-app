//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
//const url = 'https://moviereview-api.hyper.io/api/movies'
const url = 'https://3000-salmon-antlion-fwwak7ju.ws-us09.gitpod.io/api/reviews'

export async function post({body}) {
  //const bearer = token()
  const result = await fetch(`${url}`, {
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
