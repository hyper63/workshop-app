<script>
  import Header from '$lib/header.svelte'  
  import Button from '$lib/button.svelte'
  import Input from '$lib/input.svelte'
  import MovieSearchResultItem from '$lib/movie-search-result-item.svelte'
  import { propOr, not, isEmpty, isNil } from 'ramda';
  
  
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';

  let searchCriteria = '';
  let searching = null
  let error = false
  let errorStatusMsg = ''
  let searchResultMovies = []
  
  async function handleSubmit(e) {
      searchResultMovies = []
      searching = true
     
      const res = await fetch(`/api/movies/search.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: searchCriteria})
      })
      if (res.ok) {
        searchResultMovies = []
        const response = await res.json()
        
        searchResultMovies= propOr([] ,"matches",response)

        searching = false
        error=false
        errorStatusMsg = ''
  
      } else {
        searchResultMovies = []
        searching = false
        error = true
        errorStatusMsg = 'Error searching movies'
       
      }
  }
</script>
<svelte:head>
  <title>hyper movie reviews and reactions</title>
</svelte:head>
<Header title="hyper movies"/>
  <main class="mt-4 ml-2 md:mt-20 md:ml-24 md:mr-4">
    <form on:submit|preventDefault={handleSubmit}>
      <section class="pl-2">
        <div class="flex flex-col pr-6 items-center">

          <Input bind:value={searchCriteria} name="searchText" styles="w-full" focus=true/>
        
          <div class="mt-4">
            
              <Button type="submit">Search</Button>
           
          </div>
        </div>
      </section>
    </form>
  <section class="mt-4">
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      
        {#if searching}
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61">
            <g out:fly="{{duration: 1000}}" opacity=0.8>
              <path
                in:draw="{{duration: 1000,  easing: quintOut}}"
                style="stroke: yellow; fill: yellow; stroke-width: 1;"
                d="M28.6133 18.5759C29.2167 17.7689 30.5 18.1957 30.5 19.2033V33.5842H19.4821C18.6194 33.5842 18.1264 32.5999 18.643 31.909L28.6133 18.5759Z" 
                fill="white"
              />
              <path
                in:draw="{{duration: 1000, easing: quintOut}}"
                style="stroke: yellow; fill: yellow; stroke-width: 1;"
                d="M32.3868 41.8892C31.7834 42.6962 30.5 42.2694 30.5 41.2618V26.881H41.518C42.3807 26.881 42.8737 27.8652 42.357 28.5561L32.3868 41.8892Z"
                fill="white"
                />
            </g>
          </svg>
          <div class="centered" out:fly="{{y: 0, duration: 500}}">
            {#each 'SEARCHING' as char, i}
              <span
                in:fade="{{delay: 100 + i * 100, duration: 100}}"
              >{char}</span>
            {/each}
          </div>
        
        {:else if !searching && not(isEmpty(searchResultMovies))}
          <ul>
	          {#each searchResultMovies as movie (movie)}
              <MovieSearchResultItem {movie}/>
            {/each}
          </ul>
        {:else if isNil(searching)}
           <p></p>
        {:else if isEmpty(searchResultMovies)}
            <p>No search results</p>
        {/if}
    </div>
  </section>

  </main>
  <style>
    svg {
      width: 100%;
      height: 100%;
    }
  
    path {
      fill: gray;
      opacity: 1;
    }
  
    .centered {
      font-size: 10vw;
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translate(-50%,-50%);
      font-family: 'space';
      letter-spacing: 0.12em;
      color: #676778;
      font-weight: 200;
    }
  
    .centered span {
      will-change: filter;
    }
  </style>