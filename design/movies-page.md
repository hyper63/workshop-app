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
            - Review summary
            - count of likes and dislikes
            - 'thumbs up' button(!)
            - 'thumbs down' button(!)
  - List 5 More Reviews button
    - Review List

## On Load

1. Get movie id from path 
1. getMovie(movie id) => CurrentMovie - API call to `GET /api/movies/:id` --> `./api/movies/[id].get`
1. loggedIn ? getMyReview(movie id) => MyReview (Review)
    - API call to `GET /api/reviews` --> `.api/reviews.get` --> `core.reviews.byUser(user)`
    - Filter reviews by the movie retrieved from `getMovie()`.
1. getMovieReviews(movie id, start=0, end=4) => Listing 5 Reviews using start and end
    - API Call to `` --> `` --> ``
    - Filter reviews using `start` and `end` params

