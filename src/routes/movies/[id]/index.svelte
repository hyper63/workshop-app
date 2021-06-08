<script context="module">
  let movieId = null
  export async function load({ page, fetch }) {
     movieId = page.params.id
     console.log("Movie Display Page", `/api/movies/${movieId}.json` , JSON.stringify(page))
     const movieRes = await fetch(`/api/movies/${movieId}.json?startindex=0&pagesize=5`)

     if (movieRes.ok) {
      const movie = await movieRes.json()
      return {
        props: {
          movie
        }
      }
     }
  }
</script>
<script>
  //export let movieId
  import Header from '$lib/header.svelte'  
  import MovieHeader from '$lib/movie-header.svelte'
  import ReviewItem from '$lib/review-item.svelte'
  import { propOr } from 'ramda';
  export let movie 
  let title = `${movie.title} - ${movie.year}`
  const reviews = propOr([],"reviews",movie)
</script>

<Header {title}/>

<main class="overflow-x-hidden">
    <MovieHeader {movie}/>
    <ul>
      {#each reviews as review, i (review)}
        <ReviewItem {review} itemId={i}/>
      {/each}
    </ul>
</main>

