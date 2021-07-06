<script>
    import Input from '$lib/input.svelte'
    import { createEventDispatcher } from 'svelte'
    export let review = {}
    const dispatch = createEventDispatcher()


    console.log('review form HEY HEY HEY')

    function submit(e) {

      console.log('SUBMIT dispatching submit')
       dispatch('submit', {
        "id": review.id || `review-${review.author}-${review.movieId}`,
        "movieId": review.movieId,
        "rating": parseInt(review.rating, 10),
        "summary": review.summary,
        "author": review.author,
        "type": "review"
      })
    }
  
  </script>
  <div class="ml-4 mr-4 mt-4">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form on:submit|preventDefault={submit}>
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="summary" class="block text-sm font-medium text-gray-700">
                    Review
                  </label>
                  <div class="mt-1">
                    <textarea bind:value={review.summary} id="summary" name="summary" rows="10" class="shadow-sm focus:ring-black focus:border-blue mt-1 block w-full sm:text-sm border-lightgray p-4 border-3 rounded-lg"></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Your brief movie review summary.
                  </p>
                </div>
              </div>
  
              <div>
                <label for="rating" class="block text-sm font-medium text-gray-700">
                   Rating
                </label>
                <div class="mt-1 flex rounded-md shadow-sm w-full">
                    <Input bind:value={review.rating} styles="w-full" name="rating" id="rating" />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Enter your movie rating from 1 (bad) to 5 (good).
                </p>
              </div>
            </div>
           
            <div class="px-4 py-3 bg-gray-50 sm:px-6 flex justify-between items-center">
              <a href={`/movies/${review.movieId}`}>Cancel</a>
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  