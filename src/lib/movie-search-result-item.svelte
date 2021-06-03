<script>
 import { equals, cond, always, T} from 'ramda'
 export let movie = {}
 let {id, title, actors, year, genre, avgRating} = movie
 
 avgRating = avgRating || 0
 //scifi action
 const calcGenreColor =  cond([
  [equals('comedy'),   always('green')],
  [equals('horror'), always('black')],
  [equals('drama'), always('blue')],
  [equals('romance'), always('lightred')],
  [equals('action'), always('red')],
  [equals('scifi'), always('purple')],
  [T,           always('darkgray')]
])


const genreColor = calcGenreColor(genre)
</script>

<li class="px-4 py-4 sm:px-6">
  
    <a href="/movies/{id}" class="block hover:bg-gray-50">
      <div >
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-orange truncate">
            {title}
          </p>
          <div class="ml-2 flex-shrink-0 flex">
            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-{genreColor} text-whitesmoke">
              {genre}
            </p>
          </div>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
          <div class="sm:flex">
            <p class="flex items-center text-sm text-gray-500">
              <!-- Heroicon name: solid/users -->
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {actors}
            </p>
            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
              <!-- Heroicon name: solid/location-marker -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              
                  {avgRating}
              
              
            </p>
          </div>
          <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <!-- Heroicon name: solid/calendar -->
            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            <p>
              <time datetime="2020-01-07">{year}</time>
            </p>
          </div>
        </div>
      </div>

      
    </a>
  </li>