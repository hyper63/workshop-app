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


TODO 


## List My Review

As a logged in user
I want the ability to view my review of a movie on the movie page
so that I can review my review and optionally edit the review.

Tasks

- Mock the currently logged in user as a prop?
- Create MyReview svelte component that houses a single Review Item
  - My Review Section (!)
    - Review List Item (logged in and && review exists for currently logged in user)
        - Review summary
        - count of likes and dislikes
        - Edit My Review Button
    - Add My Review Button (loggedn in && no review exists for currently logged in user)
- In the movie page, Filter the reviews for the logged in current user.  If exists, display the MyReview svelte component. 
- If not logged in then display Login button.


## Edit My Review


## Add Reaction

As a user 
Id like to add a reaction 
so that I can like or dislike another user's movie review.

### curve balls
- If I liked/disliked a reaction, then the button/graphic should be filled. 
- If I change an existing reaction, then I will need to PUT otherwise POST.

### restrictions

- Filter out my review from the typical list of reviews.
- if I am the user who wrote the review, then I can not add a reaction. 

### Tasks





