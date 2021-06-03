//import { token } from '$lib/config.js'
import fetch from 'node-fetch'

const url = 'https://moviereview-api.hyper.io/api/movies/_search'

//https://moviereview-api.hyper.io/api/movies/roadhouse
/*
curl -X POST https://moviereview-api.hyper.io/api/movies/_search \
-H 'Content-Type: application/json' \
-d '{"title": "caddyshack"}'

{
    "ok":true,
    "matches":[
        {
            "id":"caddyshack",
            "title":"Caddyshack",
            "year":"1980",
            "actors":["Murray","Chase","Knight","Dangerfield"],
            "genre":"comedy","type":"movie"
        },
        {
            "id":"caddyshack3",
            "title":"Caddyshack 3",
            "year":"1980",
            "actors":["Murray","Chase","Knight","Dangerfield"],
            "genre":"comedy",
            "type":"movie"
        },
        {
            "id":"caddy4",
            "title":"Caddyshack 4",
            "year":"1980",
            "actors":["Murray","Chase","Knight","Dangerfield"],
            "genre":"comedy","type":"movie"
        },
        {
            "id":"caddyshack5",
            "title":"Caddyshack 5",
            "year":"1980",
            "actors":["Murray","Chase","Knight","Dangerfield"],
            "genre":"comedy",
            "type":"movie"
        }
    ]
}\

*/




export async function post({ body }) {
    console.log('search.json.js post', {body})
    
    const result = await fetch(url, {
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
  