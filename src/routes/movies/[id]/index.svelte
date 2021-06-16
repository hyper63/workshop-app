
<script context="module">
  import { propOr, length, reject, find, take } from 'ramda';
  let movieId = null
  
  export async function load({ page, fetch }) {
     movieId = page.params.id
     const startindex = 0
     const pagesize = 5
     //const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=${pagesize}`
     const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=1000`
     const movieRes = await fetch(url)

     if (movieRes.ok) {
      const movie = await movieRes.json()
      const reviews = propOr([], 'reviews', movie)
      const showNextPage = length(movie.reviews) < pagesize ? false : true

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
  
  import {loggedInUser} from '$lib/stores'
  import Header from '$lib/header.svelte'  
  import MovieHeader from '$lib/movie-header.svelte'
  import ReviewItem from '$lib/review-item.svelte'
  import ButtonCircle from '$lib/button-circle.svelte'
  import MyReview from '$lib/my-review.svelte'
 
  export let movie 
  export let startindex
  export let pagesize
  export let showNextPage = true
  export let reviews
  
  const myReview = find(r => r.author === $loggedInUser, reviews) || {}
  reviews = take(5, reviews)

  let title = `${movie.title} - ${movie.year}`
  let otherReviews = reject(r => r.author === $loggedInUser, reviews)
  let saveReactionStatus
  let saveReactionError

  async function handleMoreReviews(e) {
    startindex += pagesize
    const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=${pagesize}`
     const movieRes = await fetch(url)
     if (movieRes.ok) {
       //let nextPageReviews = (await movieRes.json()).reviews
       let nextPageReviews = reject(r => r.author === $loggedInUser, (await movieRes.json()).reviews)

       otherReviews = [...otherReviews, ...nextPageReviews]
       showNextPage = length(nextPageReviews) < pagesize ? false : true
     }
  }

  async function handleLoginAttempt() {
      console.log('handleLoginAttempt wired up.')
     const url = `/api/auth/login.json`
     const loginResponse = await fetch(url)
     

     console.log('handleLoginAttempt loginResponse: ', loginResponse)
  }

  async function handleSaveReaction({detail}) {
      
      const res = await fetch(`/api/reactions/post.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(detail)
      })


      if (res.ok) {
        const response = await res.json()
        saveReactionStatus = 'Successfully saved reaction'  
        //setTimeout(() => goto('/admin/cms/faqs'), 1000)
        
      } else {
        saveReactionError = true
        saveReactionStatus = 'Error occured saving reaction'
      }
    }


</script>

<Header {title}/>

<main class="overflow-x-hidden">
    <MovieHeader {movie}/>
    <!-- // {#if loggedInUser && not(isEmpty(review)) && loggedInUser === propOr( null,'author',review)} -->

    <MyReview {handleLoginAttempt} {handleSaveReaction} loggedInUser={$loggedInUser} review={myReview} movieId={movie.id}/>
    <ul>
      {#each otherReviews as review, i (review)}
        <ReviewItem {handleSaveReaction} enableReaction={true} loggedInUser={$loggedInUser} {review} itemId={i}/>
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

