//import { token } from '$lib/config.js'
import fetch from 'node-fetch'

const url = 'https://moviereview-api.hyper.io/api/movies'

//https://moviereview-api.hyper.io/api/movies/roadhouse
/*
{
"id": "roadhouse",
"title": "Road House",
"year": "1992",
"actors": [
"Swayze"
],
"genre": "action"
}
*/

export async function get({ params }) {
    //const bearer = token()
    const movie = await fetch(url + '/' + params.id, {
      method: 'GET'
    }).then(r => r.json())
    return {
      body: movie
    }
  
  }