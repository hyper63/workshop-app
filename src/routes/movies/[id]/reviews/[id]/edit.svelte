<script context="module">
  export async function load({ page, fetch, session }) {

    console.log('edit.svelte load')
    const url = `/api/reviews/${page.params.id}.json`
    const token = propOr('', 'movieAPIToken', session)
    const res = await fetch(url, { headers: { authorization: `Bearer ${token}` } })

    
    let review = {}
    let loadStatus = 'loading'
    let errMsg = ''

    console.log('edit.svelte res', res)
    if (res.ok) {
      review = await res.json()
      console.log('edit.svelte review', review)
      loadStatus = 'success'
    } else {
      loadStatus = 'error'
      if (res.status === 500) {
        errMsg = "An error occurred trying to retrieve that review."
      } else if (res.status === 404) {
        errMsg = "That's strange ?! We couldn't find that review."
      } else if (res.status === 401) {
        errMsg = "You don't have permissions to do this."
      } else {
        errMsg = 'Unknown Error'
      }


    }

    return {
        props: {
          loadStatus,
          errMsg,
          session,
          review
        }
      }

  }
</script>

<script>
  import Header from '$lib/header.svelte'
  import ErrorMsg from '$lib/error-msg.svelte'
  import ReviewForm from '$lib/review-form.svelte'
  import { goto } from '$app/navigation'
  import {propOr} from 'ramda'
  export let loadStatus = 'loading'
  export let errMsg = ''
  export let review = {}
  export let session
  const token = propOr('', 'movieAPIToken', session)
  
  let userName = propOr(null, 'userName', session)
  console.log('edit movie userName', userName)

  let submitStatus = null 
  let error = false


  async function handleSubmit({detail}) {
    const res = await fetch(`/api/reviews/${review.id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(detail)
    })

    const response = await res.json()
    console.log('APP handleSumbit response', response)
  // { ok: false, status: 401, message: 'Not Authorized' }
    if (response.ok) {
      
      submitStatus = 'Successfully saved review'  
      
    } else {
      error = true
      if (response.status === 500) {
        submitStatus = "An error occurred trying to save your review."
      } else if (response.status === 404) {
        submitStatus = "That's strange ?! We couldn't find that review."
      } else if (response.status === 401) {
        submitStatus = "You don't have permissions to save the review."
      } else {
        submitStatus = 'Error occured saving review'
      }
    }
    setTimeout(() => goto(`/movies/${review.movieId}`), 1000)

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
