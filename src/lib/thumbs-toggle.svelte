<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher();

  import {isNil} from 'ramda'
  export let movieId = null
  export let reviewId = null
  export let likesCount = null
  export let dislikesCount = null
  export let currentUsersReaction = null
  export let loggedInUser = null
  export let enableReaction = false

//console.log('ThumbToggle', {currentUsersReaction})

  // {"id": "reaction-1-review-1-commando", "reviewId": "review-1-commando-1", "reaction": "dislike", "user": "Arnold"}
  function saveLike () {
    if (isNil(currentUsersReaction) && enableReaction) {
      console.log('saveLike!!!')
      dispatch('saveReaction', {"id": `reaction-${loggedInUser}-review-${reviewId}-${movieId}`, reviewId, reaction: 'like', "user": loggedInUser})
    }
  }

  function saveDislike () {
    if (isNil(currentUsersReaction) && enableReaction) {
      console.log('saveDISLike!!!')    
      dispatch('saveReaction', {"id": `reaction-${loggedInUser}-review-${reviewId}-${movieId}`, reviewId, reaction: 'dislike', "user": loggedInUser})
    }
  }

</script>

<div class="pb-4">
    <div class="-mt-px flex ">
      <div on:click={saveLike} class="w-0 flex-1 flex">
        <a href="#" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"> 
            {#if currentUsersReaction === 'like'}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg> 
            {:else}        
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            {/if}   
          <span class="ml-3">Like ({likesCount})</span>
        </a>
      </div>
      <div on:click={saveDislike} class="-ml-px w-0 flex-1 flex">
        <a href="" class="relative w-0 flex-1 inline-flex items-center justify-center text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
          {#if currentUsersReaction === 'dislike'}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
          {:else}        
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
          {/if} 
          <span class="ml-3">Dislike ({dislikesCount})</span>
        </a>
      </div>
    </div>
  </div>