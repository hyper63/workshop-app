<script>
    export let review = {}
    export let itemId = 1
    let {id, movieId, rating, summary, author, counts} = review
    rating = rating || 'N/A'
    summary = summary || ''
    author = author || 'N/A'
    const bgColor = itemId % 2 === 0 ? "white" : 'whitesmoke'
</script>

<li class="col-span-1 bg-{bgColor} shadow ">
  <div class="w-full flex items-center justify-between p-4 space-x-2">
    <div class="flex-1 ">
      <div class="flex items-center space-x-3">
        <h3 class="text-gray-900 text-sm font-medium truncate">{author}</h3>
        <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{rating} stars</span>
      </div>
      <p class="mt-1 text-gray-500 text-sm">{summary}</p>
    </div>
  </div>
  <div class="pb-4">
    <div class="-mt-px flex ">
      <div class="w-0 flex-1 flex">
        <a href="#" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span class="ml-3">Like ({counts.like})</span>
        </a>
      </div>
      <div class="-ml-px w-0 flex-1 flex">
        <a href="#" class="relative w-0 flex-1 inline-flex items-center justify-center text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
          </svg>
          <span class="ml-3">Dislike ({counts.dislike})</span>
        </a>
      </div>
    </div>
  </div>
</li>