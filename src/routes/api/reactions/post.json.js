//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
//const url = 'https://moviereview-api.hyper.io/api/movies'
const moviesURL = 'https://3000-salmon-antlion-fwwak7ju.ws-us9.gitpod.io/api/reactions'

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


// export async function put({ params, body }) {
//   const bearer = token()
//   const result = await fetch(`${url}/${params.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${bearer}`
//     },
//     body: JSON.stringify(body)
//   }).then(r => r.json())

//   return {
//     body: result
//   }
// }