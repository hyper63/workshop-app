<script>
  import Header from '$lib/header.svelte'  
  import Button from '$lib/button.svelte'
  import Input from '$lib/input.svelte'
  import MovieSearchResultItem from '$lib/movie-search-result-item.svelte'
  import { propOr } from 'ramda';
  //let movie = {title:"Caddyshack", actors:["Chase", "Dangerfield", "Murray"], year: "1980", genre:"comedy", avgRating:"3.5"}
  
  let searchCriteria = '';
  let searching = false
  let error = false
  let errorStatusMsg = ''
  let searchResultMovies = []
  async function handleSubmit(e) {
      searchResultMovies = []
      searching = true
      console.log('search home handleSubmit!', {searchCriteria})


      const res = await fetch(`/api/movies/search.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: searchCriteria})
      })
      if (res.ok) {
        const response = await res.json()
        console.log('SEARCH HOME SUBMIT SUCCESS!', {response})
        searchResultMovies= propOr([] ,"matches",response)

        searching = false
        error=false
        errorStatusMsg = ''
        
        
  
      } else {
        searchResultMovies = []
        searching = false
        error = true
        errorStatusMsg = 'Error searching movies'

        console.log("SEARCH HOME SUBMIT FAILURE!", {res})
      }
    
  }




</script>
<svelte:head>
  <title>hyper movie reviews and reactions</title>
</svelte:head>
<Header title="hyper movies"/>

 <!-- <main class="mt-4 ml-4 md:mt-20 md:ml-24 md:mr-4"> -->
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
      <ul class="divide-y divide-gray-200">
        {#each searchResultMovies as movie}
          <MovieSearchResultItem {movie}/>
        {/each}
      </ul>
    </div>
  </section>

  </main>