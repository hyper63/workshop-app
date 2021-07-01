//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import {propOr} from 'ramda'
//const url = 'https://moviereview-api.hyper.io/api/movies'
const moviesURL = 'https://3000-salmon-antlion-fwwak7ju.ws-us10.gitpod.io/api/movies'

export async function get(req) {
  const {params} = req
  //const bearer = token()
  
  const movie = await fetch(`${moviesURL}/${params.id}`, {
    method: 'GET'
  }).then(r => r.json())

  const startindex = req.query.get('startindex') || 0
  const pagesize = req.query.get('pagesize') || 5
  let reviewsURL = `${moviesURL}/${params.id}/reviews?startindex=${startindex}&pagesize=${pagesize}`
  
  const reviews = await fetch(reviewsURL, {
    method: 'GET'
  }).then(r => r.json())

  movie.reviews = propOr([], "docs", reviews)
  
  return {
    body: movie
  }
}


