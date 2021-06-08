# Movies Page Design

As a user
I'd like the ability to see the movie title, actors, year, genre, average rating, and list of top 5 'most popular' reviews
so that I can view all the movie details, view my own review, and select a review to view the complete review and its associated reactions. I may also list additional reviews, 5 at a time.   See **[Display Movie Page](./stories.md#display-movie-page)** user story for more details.

## Components

(!) -- Requires Login

- Movie Page
  - Movie Header Section
    - title
    - actors
    - year
    - genre
    - average rating
  - My Review Section (!)
    - Review List Item (review exists)
        - Review summary
        - count of likes and dislikes
        - Edit My Review Button
    - Add My Review Button (no review exists)
  - List Top 5 reviews
    - Review List
        - Review List Item 
            - [x] Review summary
            - [x] count of likes and dislikes
            - 'thumbs up' button(!)
            - 'thumbs down' button(!)
  - List 5 More Reviews button
    - Review List


MONDAY TODO 

- Top 5
  - get all reviews 
  - sort by counts.count in desc order of popularity. https://ramdajs.com/docs/#sortWith
  - return page of reviews using a startIndex, pageSize .  See js below
    - startIndex=0, pageSize=5
    - next call startIndex=5, pageSize = 5 
  
  
  - TODO: 
  show 'next' down arrow in UI.  if count of reviews in page is lt the page size then youre at the last page and dont show the next button arrow.  
  - when next arrow is clicked, get next page of reviews and append to current list of reviews in the ui.

- More Top 5

- Calculate Stars/Rating average bases upon the TOTAL number of ratings for EVERY SINGLE REVIEW for the movie.  (query in api has a limit, ouch)
  - calculate the average for the movie using the cache.
- convert Rating to heroicon Stars on the movies-page's review-item oooh hard.  See lib/stars-rating.svelte



## On Load

1. Get movie id from path 
1. `getMovie(movie id) => CurrentMovie` - API call to `GET /api/movies/:id` --> `./api/movies/[id].get`
1. `loggedIn ? getMyReview(movie id) => MyReview (Review)`
    - API call to `GET /api/reviews` --> `.api/reviews.get` --> `core.reviews.byUser(user)`
    - Filter reviews by the movie retrieved from `getMovie()`.
1. `getMovieReviews(movie id, start=0, end=4) => Listing 5 Reviews` using start and end
    - API Call to `GET /api/movies/:id/reviews` --> `.api/movies/[id]/reviews.js` --> `core.reviews.byMovie(id)`
    - Filter reviews using `start` and `end` params
1. `calcMovieStatistics(movie, arrReviews) => movie stats object` with these props. 
    - `avgRating` - used to provide average rating within Movie Header Section


// reactions
app.get('/api/reviews/:id/reactions', reactionsByReview)

const reactionsByReview = require('./api/reviews/[id]/reactions.js').get

/api/reviews/[id]/reactions.js GET
  - core.reactions.byReview(params.id)

