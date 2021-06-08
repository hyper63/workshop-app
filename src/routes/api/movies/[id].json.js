//import { token } from '$lib/config.js'
import fetch from 'node-fetch'
import {propOr} from 'ramda'
//const url = 'https://moviereview-api.hyper.io/api/movies'
const moviesURL = 'https://3000-salmon-antlion-fwwak7ju.ws-us08.gitpod.io/api/movies'



//export async function get({ params, query, url }) {
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

  //console.log('app reviews', JSON.stringify(reviews, null, 2))
  movie.reviews = propOr([], "docs", reviews)

  console.log(JSON.stringify(movie, null, 2))

  return {
    body: movie
  }
}
