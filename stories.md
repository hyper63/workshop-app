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
1. If logged out, the user may elect to login.  See `Login` user story. 
1. If logged in, the user may elect to logout.  See `Logout` user story. 






## Display Movie Page 

**route**: `/movies/{id}/index`.

As a user
I'd like the ability to see the movie title, actors, year, genre, average rating, and list of top 5 'most popular' reviews
so that I can view all the movie details and select a review to view the complete review and its associated reactions. 

### Workflow

1. Website displays movie details such as title, actors, year, genre, and average rating.
1. If authenticated the website displays any existing movie review for the logged in user within a **User Review** section.  
1. If unauthenticated, the website omits the **User Review** section.  
1. Website displays a list of top 5 'most popular' reviews.
    - 'most popular' is defined as the sum of total reactions, both good and bad.  17 likes, 100 dislikes = 117 total
    - Each review is displayed in an expandable list item.
    - The first n characters of the view are displayed along with an 'expand/contract- more/less' chevron button.
    - Selectiting the 'expand' chevron button on a review reveals: 
        - the entire review within the expanded list item, 
        - a sum of likes and dislikes.
1. Website displays an **Add Review** button/icon.
1. Website displays a **View 5 More Reviews** button/icon.

### Actionable Next Steps

1. User may optionally react to an existing review via a like or dislike button/icon below the review text.  See `Reaction` user story.
1. If the user has not provided a review for the current movie, user may elect to add a new review.  See `Add Review` user story. 
1. If the user has provided a review for the current movie, user may elect to edit their review by clicking the review.  See `Edit Review` user story. 
1. User may elect to view 5 more reviews (infinate scroll).  See `View 5 More Reviews` user story.
1. If logged out, the user may elect to login.  See `Login` user story. 
1. If logged in, the user may elect to logout.  See `Logout` user story. 


## Reaction

**route**: `/movies/{id}/index`.
**component**: review list item

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
1. `Reverse Reaction` user story
1. `Add Review` user story






## Add Review

**route**: `/movies/{id}/reviews/add`.

As a user
I'd like the ability to add my own movie review
so that I can show everyone my movie knowledge acumen and superior thought process. 

### Workflow

1. Website displays the Movies Page `/movies/{id}/index`.
1. Website displays the **Add Review** button.
1.  If not authenticated, the website navigates the user to `/login` webpage.  Once logged in the user is navigated back to the `/movies/{id}/reviews/add` page,
1. If authenticated, the website navigates the user to the `/movies/{id}/reviews/add` page.
1. Website displays the **Add Review** page including:
    - review summary multi-line text input box.
    - A series of 5 unselected stars icons.
1. User adds the review including:
    - review summary text
    - clicks a star rating from 1 to 5.
1. Website displays the number of stars selected from 1 to 5 and leaves the remaining stars unselected.
1. User clicks the **Save Review** button.
1. Website submits the following details:
    - movieId 
    - review summary
    - rating (integer from 1 to 5)
    - author (currently logged in user name)
1. Upon successfully saving the movie review, the website navigates the user to the **Movie Page** webpage via `/movies/{id}/index`. 
1. The website 

### Actionable Next Steps

1. 


## Edit Review

**route**: `/movies/{id}/reviews/edit`.

As a user
I'd like the ability to edit my own movie review
so that I can edit my own movie review.

### Workflow

1. Website displays the Movies Page `/movies/{id}/index`.
1. Website displays the **Edit Review** button.
1. User selects the **Edit Review** button.
1.  If not authenticated, the website navigates the user to `/login` webpage.  Once logged in the user is navigated back to the `/movies/{id}/reviews/edit` page,
1. If authenticated, the website navigates the user to the `/movies/{id}/reviews/edit` page

### Actionable Next Steps

1. User logs out.



## View 5 More Reviews

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 






## De-select Reaction. (delete a reaction)

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 




## Reverse Selection (delete and add or its a put)

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 





## Login

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 




## Logout

As a user
I'd like the ability to 
so that 

### Workflow

1. 

### Actionable Next Steps

1. 