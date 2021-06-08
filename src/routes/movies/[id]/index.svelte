<script context="module">
  let movieId = null
  import { propOr, length } from 'ramda';
  export async function load({ page, fetch }) {
     movieId = page.params.id
     const startindex = 0
     const pagesize = 2
     const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=${pagesize}`
     const movieRes = await fetch(url)

     if (movieRes.ok) {
      const movie = await movieRes.json()
      const reviews = propOr([], 'reviews', movie)
      const showNextPage = length(reviews) < pagesize ? false : true
      return {
        props: {
          movie,
          reviews,
          startindex,
          pagesize,
          showNextPage
        }
      }
     }
  }
</script>



<script>
  import Header from '$lib/header.svelte'  
  import MovieHeader from '$lib/movie-header.svelte'
  import ReviewItem from '$lib/review-item.svelte'
  import ButtonCircle from '$lib/button-circle.svelte'
  
  export let movie 
  export let startindex
  export let pagesize
  export let showNextPage = true
  let title = `${movie.title} - ${movie.year}`
  export let reviews
  

  async function handleMoreReviews(e) {
    startindex += pagesize
    const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=${pagesize}`
     const movieRes = await fetch(url)
     if (movieRes.ok) {
       const nextPageReviews = (await movieRes.json()).reviews
       reviews = [...reviews, ...nextPageReviews]
       showNextPage = length(nextPageReviews) < pagesize ? false : true
     }
  }
</script>

<Header {title}/>

<main class="overflow-x-hidden">
    <MovieHeader {movie}/>
    <ul>
      {#each reviews as review, i (review)}
        <ReviewItem {review} itemId={i}/>
      {/each}
      
    </ul>

    {#if showNextPage}
      <div class="fab center pt-2 pb-4">
        <ButtonCircle on:click={handleMoreReviews}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </ButtonCircle>
      </div>
    {/if}
</main>


<style style lang="postcss">
  .fab.center {
    display: flex;
    justify-content: center;
  }
</style>

