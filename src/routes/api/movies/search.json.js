//import { token } from '$lib/config.js'
import fetch from 'node-fetch'

//const url = 'https://moviereview-api.hyper.io/api/movies/_search'

const url = 'https://3000-salmon-antlion-fwwak7ju.ws-us09.gitpod.io/api/movies/_search'

export async function post({ body }) {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)  
    }).then(r => { 
      return r.json()
    })
  
    return {
      body: result
    }
  }
  