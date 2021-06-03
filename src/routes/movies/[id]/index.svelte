<script context="module">
  let movieId = null
  export async function load({ page, fetch }) {
     movieId = page.params.id
     console.log("Movie Display Page", `/api/movies/${movieId}.json` , JSON.stringify(page))
     const res = await fetch(`/api/movies/${movieId}.json`)
    
     if (res.ok) {
      return {
        props: {
          movie: await res.json()
        }
      }

     }
    //  return { props: {
    //    movieId
    //  }}
  }


</script>
<script>
  //export let movieId
  import Header from '$lib/header.svelte'  
  export let movie 
  console.log('movies/[id]/index.svelte', {movie})

</script>

<Header title={movie.title}/>

<main class="mx-4 my-4 overflow-x-hidden">
    <section class="mt-4">
      <h2>id: {movie.id}</h2>
      <p>year: {movie.year}</p>
      <p>actors: {movie.actors}</p>
      <p>genre: {movie.genre}</p>

    </section>
</main>