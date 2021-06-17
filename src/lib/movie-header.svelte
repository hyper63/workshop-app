<script>
    import Stars from '$lib/stars-rating.svelte'
    import { equals, cond, always, T, propOr} from 'ramda'
    export let movie = {}
    export let userName 
    let {actors, genre, avgRating, summary, bannerURL } = movie

    avgRating = avgRating || 'N/A'
    summary = summary || ''
    bannerURL = bannerURL || ''
    actors = actors || []
    
    const calcGenreColor =  cond([
        [equals('comedy'),   always('green')],
        [equals('horror'), always('darkgray')],
        [equals('drama'), always('blue')],
        [equals('romance'), always('lightred')],
        [equals('action'), always('red')],
        [equals('scifi'), always('purple')],
        [T, always('lightgray')]
    ])
    const genreColor = calcGenreColor(genre)
    const stars = propOr( null,'stars',movie)
    

</script>

<!-- <div class="relative bg-indigo-800"> -->
  <div class="bg-white pt-4 lg:py-24">
    <div class="pb-16 bg-{genreColor} lg:pb-0 lg:z-10 lg:relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="relative lg:-my-8">
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
          <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div class="aspect-w-10 aspect-h-6 rounded-l shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img class="object-cover lg:h-full lg:w-full" src={bannerURL} alt="">
            </div>
          </div>
        </div>
        <div class="mt-4 lg:m-0 lg:col-span-2 lg:pl-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <p class="mt-4 text-1l font-medium text-white">
                  {summary}
                </p>
              </div>
              <Stars rating={stars} bgColor={genreColor}/>
              <footer class="mt-4">    
                <p class="text-base font-small text-whitesmoke">Actors: {actors}</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>