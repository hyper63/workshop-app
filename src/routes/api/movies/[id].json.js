//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import {propOr} from 'ramda'
//const url = 'https://moviereview-api.hyper.io/api/movies'
const url = 'https://3000-salmon-antlion-fwwak7ju.ws-us08.gitpod.io/api/movies'

export async function get({ params }) {

    //console.log('routes api/movies/[id].json.js get', url + '/' + params.id)
    //const bearer = token()
    const movie = await fetch(url + '/' + params.id, {
      method: 'GET'
    }).then(r => r.json())
    
    const reviews = await fetch(url + '/' + params.id + '/reviews', {
      method: 'GET'
    }).then(r => r.json())

    //console.log('app reviews', JSON.stringify(reviews, null, 2))
    movie.reviews = propOr([], "docs", reviews)

    console.log(JSON.stringify(movie, null, 2))

    return {
      body: movie
    }
}
