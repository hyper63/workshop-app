<script context="module">
    const moviesId = `roadhouse`

</script> 


<main class="mx-4 my-4 overflow-x-hidden">
    <h1 class="text-green-600 text-6xl">Sitemap</h1>
    <section class="mt-4">
      <h3>Pages</h3>
      <ul class="list-disc ml-8">
        <li><a href="/" class="text-blue-600 underline">Home Movie Search</a></li>
        <li><a href="/login" class="text-blue-600 underline">Login</a></li>
        <li><a href="/logout" class="text-blue-600 underline">Logout</a></li>
        
        <li>
          <a href="/movies/{moviesId}" class="text-blue-600 underline">movie page</a>
          <ul class="list-disc ml-8">
            <li><a href="/movies/{moviesId}/reviews/add" class="text-blue-600 underline">Add movie review</a></li>
            <li><a href="/movies/{moviesId}/reviews/edit" class="text-blue-600 underline">Edit movie review</a></li>
          </ul>
        </li>
        <li><a href="/styleguide" class="text-blue-600 underline">Style Guide</a></li>
      </ul>
    </section>
  </main>
  