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
  }


</script>
<script>
  //export let movieId
  import Header from '$lib/header.svelte'  
  import MovieHeader from '$lib/movie-header.svelte'
  export let movie 
  let title = `${movie.title} - ${movie.year}`

  movie = {...movie, avgRating: movie.avgRating || 'N/A'}

  //let {actors, year, genre, avgRating, summary, bannerURL } = movie
</script>

<Header {title}/>

<main class="overflow-x-hidden">
    <MovieHeader {movie}/>
</main>

