<script context="module">
  export async function load({ page, session }) {
   

    const movieId = page.params.id
      return {
        props: {
          movieId,
          session
        }
      }
  }
</script>
<script>
  
  import { toLower, propOr} from 'ramda'
  import Header from '$lib/header.svelte'
  import ReviewForm from '$lib/review-form.svelte'
  import { goto } from '$app/navigation'
  let submitStatus = null 
  let error = false
  export let movieId = null
  export let session

  let userName = propOr(null, 'userName', session)
  let token = propOr('', 'movieAPIToken', session)
  let errMsg = ''
  
  let review = {
      id: `review-${toLower(userName)}-${movieId}`,
      movieId,
      rating: 1,
      summary: "",
      author: userName,
      type: "review"
    }

  async function handleSubmit({detail}) {
    const res = await fetch('/api/reviews/post.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(detail)
    })
    if (res.ok) {
      const response = await res.json()
      submitStatus = 'Successfully saved review'  
      setTimeout(() => goto(`/movies/${review.movieId}`), 1000)
    } else {
      error = true
      if (movie.status === 500) {
        submitStatus = "An error occurred trying to save the review."
      } else if (movie.status === 401) {
        submitStatus = "You don't have permissions to do this."
      } else {
        submitStatus = 'An unknown error occured saving the review'
      }
    }
  }
</script>

<main>
  <Header {userName}/>
  {#if submitStatus}
    <div class="border rounded-lg border-{error ? 'red' : 'green'} p-4 m-16 relative">
      <button class="absolute top-2 right-0" on:click={() => submitStatus = null}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="w-3/4">
        <p>{submitStatus}</p>
      </div>
    </div>
  {/if}
  <ReviewForm {review} on:submit={handleSubmit} />
</main>

