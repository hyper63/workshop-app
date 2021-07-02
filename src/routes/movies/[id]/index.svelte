<script context="module">
  
  import { propOr, length, reject, find, take } from 'ramda';
  let movieId = null
  
  export async function load({ page, fetch, session }) {
    movieId = page.params.id
     
    const startindex = 0
    const pagesize = 5
    let movie = {}
    let reviews = []
    let showNextPage = true
    let loadStatus = 'loading'
    let errMsg = ''

     //console.log('session', session)
     //const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=${pagesize}`
     /*
      const user = req.query.get('user') || ''
      const scope = req.query.get('scope') || ''
     */
    const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=1000&user=${'tripott'}&scope=${'foo'}`
    const movieRes = await fetch(url)
    movie = await movieRes.json()
 
  

    if (movie.ok) {    
      reviews = propOr([], 'reviews', movie)
      showNextPage = length(movie.reviews) < pagesize ? false : true
      loadStatus = 'success'

    } else {
      console.log('movie not ok', movie)
      loadStatus = 'error'
      if (movie.status === 500) {
        errMsg = "An error occurred trying to retrieve that movie."
      } else if (movie.status === 404) {
        errMsg = "That's strange ?! We couldn't find that movie."
      } else {
        errMsg = 'Unknown Error'
      }
    }

     return {
        props: {
          loadStatus,
          errMsg,
          movie,
          reviews,
          startindex,
          pagesize,
          showNextPage,
          session,
          pagePath : page.path
        }
      }
  }
</script>


<script>
  import { loginRedirectTo } from '$lib/stores';
  import Header from '$lib/header.svelte'  
  import MovieHeader from '$lib/movie-header.svelte'
  import ReviewItem from '$lib/review-item.svelte'
  import ButtonCircle from '$lib/button-circle.svelte'
  import MyReview from '$lib/my-review.svelte'
  import ErrorMsg from '$lib/error-msg.svelte'
  export let loadStatus = 'loading'
  export let errMsg = ''
  export let movie 
  export let startindex
  export let pagesize
  export let showNextPage = true
  export let reviews
  export let session
  export let pagePath

  //console.log('BEFORE MOVIE PAGE loginRedirectTo', $loginRedirectTo)

  loginRedirectTo.update(() => pagePath)

  //console.log('AFTER MOVIE PAGE loginRedirectTo', $loginRedirectTo)

  let userName = propOr(null, 'username', session)

  //const enableReaction = userName ? true: false
  
  const myReview = find(r => r.author === userName, reviews) || {}
  reviews = take(5, reviews)

  let title = `${movie.title} - ${movie.year}`
  let otherReviews = reject(r => r.author === userName, reviews)
  let saveReactionStatus
  let saveReactionError

  async function handleMoreReviews(e) {
    startindex += pagesize
    const url = `/api/movies/${movieId}.json?startindex=${startindex}&pagesize=${pagesize}`
     const movieRes = await fetch(url)
     if (movieRes.ok) {
       //let nextPageReviews = (await movieRes.json()).reviews
       let nextPageReviews = reject(r => r.author === userName, (await movieRes.json()).reviews)

       otherReviews = [...otherReviews, ...nextPageReviews]
       showNextPage = length(nextPageReviews) < pagesize ? false : true
     }
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
<main class="overflow-x-hidden">
{#if loadStatus === 'loading'}
  <Header title="Loading" {userName} {pagePath}/> 
{:else if loadStatus==='error'}
  <Header title="Error" {userName} {pagePath}/> 
  <ErrorMsg {errMsg}/>
{:else if loadStatus==='success'}

  <Header {title} {userName} {pagePath}/>
  
    <MovieHeader {movie} {userName} />
    <!-- // {#if loggedInUser && not(isEmpty(review)) && loggedInUser === propOr( null,'author',review)} -->

    <MyReview {handleSaveReaction} {userName} review={myReview} movieId={movie.id} {pagePath}/>
    <ul>
      {#each otherReviews as review, i (review)}
        <ReviewItem {handleSaveReaction} {userName} {review} itemId={i}/>
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

{/if}
</main>

<style style lang="postcss">
  .fab.center {
    display: flex;
    justify-content: center;
  }
</style>

