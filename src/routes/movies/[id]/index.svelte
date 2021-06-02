<script context="module">
  let movieId = null
  export async function load({ page, fetch }) {
     movieId = page.params.id
     console.log("Hello", JSON.stringify(page))
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
  export let movie = {}


</script>

<main class="mx-4 my-4 overflow-x-hidden">
    <h1 class="text-green-600 text-6xl">Movie</h1>
    <section class="mt-4">
      <h2>id: {movie.id} - title: {movie.title}</h2>
      <p>year: {movie.year}</p>
      <p>actors: {movie.actors}</p>
      <p>genre: {movie.genre}</p>

    </section>
</main>