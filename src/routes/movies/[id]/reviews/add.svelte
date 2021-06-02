<script context="module">
    let movieId = null
    export async function load({ page }) {
       movieId = page.params.id
       console.log("Hello", JSON.stringify(page))
      
       return { props: {
         movieId
       }}
    }
  
  
  </script>
  <script>
    export let movieId
  
  </script>
  
  <main class="mx-4 my-4 overflow-x-hidden">
      <h1 class="text-green-600 text-6xl">Add Review for {movieId}</h1>
      <section class="mt-4">
        
      </section>
  </main>