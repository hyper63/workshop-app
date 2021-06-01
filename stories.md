# User Stories

## Display Home Page

As a user, 
Id like the ability to view the home page and simply search for movies.
so that I can select a movie, review its details, reviews, and reactions. 

### Workflow

1. User navigates to `/`
1. Website displays 'google-like' search textbox and search icon. 
1. User enters movie search criteria and selects 'enter' or clicks search icon. 
1. Website returns movie search results as a list underneath search textbox.  For each movie search result, provide the following info:
  - title
  - year
  - actors
  - genre
  - sum of # of reviews
  - rating average

### Actionable Next Steps

1. User selects a movie from the list of search results.  Website navigates to the movie page `/movies/{id}/index`.  See `Display Movie Page` user story.


## Display Movie Page 

 **route**: `/movies/{id}/index`.

As a user
I'd like the ability to see the movie title, actors, year, genre, average rating, and list of top 5 'most popular' reviews
so that I can view all the movie details and select a review to view the complete review and its associated reactions. 

### Workflow

1. Website displays movie details such as title, actors, year, genre, and average rating.
1. Website displays a list of top 5 'most popular' reviews.
    - 'most popular' is defined as the sum of total reactions, both good and bad.  17 likes, 100 dislikes = 117 total
    - Each review is displayed in an expandable list item.
    - The first n characters of the view are displayed along with an 'expand/contract- more/less' chevron button.
    - Selectiting the 'expand' chevron button on a review reveals: 
        - the entire review within the expanded list item, 
        - a display of likes and dislikes.
1. Website displays an **Add Review** button/icon.
1. Website displays a **View 5 More Reviews** button/icon.

### Actionable Next Steps

1. User may optionally react to an existing review 'inline' via a like or dislike button/icon below the review text.  See `Reaction` user story.
1. User may elect to add a new review.  See `Add Review` user story. 
1. User may elect to view 5 more reviews (infinate scroll).  See `Load More Reviews` user story.




## Reaction

 **route**: `/movies/{id}/index`.

As a user
I'd like the ability to read the entire movie review, view the number of likes and dislikes, and optionally react by selecting either a 'thumbs up' or 'thumbs down' icon button. 
so that I can add my opinion to a good or bad movie review. 

### Workflow

1. User selects the movie review list item from the list of movie reviews
1. Website expands the movie review list item to reveal:
    - the entire review text
    - 'thumbs up' or 'thumbs down' icon buttons
1. User clicks either the 'thumbs up' or 'thumbs down' icon button on the movie review
1. Website verifies the user is authenticated.
1. If authenticated, the website saves the reaction including:
    - the selected movie review id
    - reaction (like or dislike)
    - authenticated user
1. If not authenticated, the website navigates the user to `/login` webpage.  Once logged in the user is navigated back to the `/movies/{id}/index` page, the selected review, and the previously selected like or dislike state is correctly displayed. 
1. User may optionally de-select their previous reaction by clicking the reaction.  See `De-select Reaction` user story.
1. User may optionally reverse their reaction by unliking a liked reaction or liking an unliked reaction.  See `Reverse Reaction` user story. 


### Actionable Next Steps

1. `Login` user story
1. `De-select Reaction` user story
1. `Reverse Reaction` user story.



## Add Review

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 


## Load More Reviews

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 

## De-select Reaction

## Reverse Selection