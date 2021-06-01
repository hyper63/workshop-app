# User Stories

## Display Home Page / Search Movies

As a user, 
Id like the ability to view the home page 
so that I can simply search for movies, select a movie, review its details, reviews, and reactions. 

### Workflow

1. User navigates to `/`
1. Website displays 'google-like' search textbox and search icon. 
1. User enters movie search criteria and selects 'enter' or clicks search icon. 
1. As the user types, the website returns movie search results as a list underneath search textbox.


### Actionable Next Steps

1. User selects a movie from the list of search results.  Website navigates to the movie page `/movies/{id}/index`.  See `Display Movie Page` user story.
1. If logged out, the user may elect to login.  See `Login` user story. 
1. If logged in, the user may elect to logout.  See `Logout` user story. 






## Display Movie Page 

**route**: `/movies/{id}/index`.

As a user
I'd like the ability to see the movie title, actors, year, genre, average rating, and list of top 5 'most popular' reviews
so that I can view all the movie details, view my own review, and select a review to view the complete review and its associated reactions. I may also list additional reviews, 5 at a time. 

### Workflow

1. Website displays movie details such as title, actors, year, genre, and average rating.
1. If unauthenticated, the website omits the **My Review Section**.  
1. If authenticated and an existing movie review exists for the logged in user, the website displays the movie review for the logged in user within a **My Review Section**.
1. If authenticated and no existing movie review exists for the logged in user, provide an **Add Review** button.
1. Website displays a list of top 5 'most popular' reviews.  See **List 5 Reviews**.
1. Website displays a **List 5 More Reviews** button/icon.

### Actionable Next Steps

1. If the user is logged in they may **Add Reaction** to another user's existing review.
1. If the user is logged in and has not provided a review for the current movie, user may elect to **Add My Review**. 
1. If the user is logged in and has provided a review for the current movie, user may elect to **Edit My Review** by simply clicking the review.  
1. User may elect to **List 5 More Reviews**  (infinate scroll).
1. If logged out, the user may elect to **login**.
1. If logged in, the user may elect to **logout**. 


## Add Reaction

**route**: `/movies/{id}/index`.
**component**: review list item

As a user
I'd like the ability to read another user's entire movie review, view the number of likes and dislikes, and optionally react by selecting either a 'thumbs up' or 'thumbs down' icon button. 
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
1. User may optionally **De-select Reaction** by clicking the reaction.
1. User may optionally **Reverse Reaction** by unliking a liked reaction or liking an unliked reaction.  

### Actionable Next Steps

1. Login
1. De-select Reaction
1. Reverse Reaction
1. Add My Review



## Add My Review

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
1. The website displays the review on the **Movie Page**  within the **User Review** section, above the top 5 movie reviews.

### Actionable Next Steps

1. Edit Review


## Edit My Review

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



## List 5 Reviews

As a user
I'd like the ability to view a list of the 5 most popular reviews
so that see which review have the most reactions.

'most popular' is defined as the sum of total reactions, both good and bad.  17 likes, 100 dislikes = 117 total

For each movie search result, provide the following info:
  - title
  - year
  - actors
  - genre
  - sum of # of reviews
  - rating average

Each review is displayed in an expandable list item.
- The first n characters of the view are displayed along with an 'expand/contract- more/less' chevron button.
- Selecting the 'expand' chevron allows the user to **View Review Details**.
- Selecting the **more reviews** button lists the next 5 popular reviews below the existing listing of previously viewed reviews (infinate scroll).  See **List Next 5 Popular Reviews**.

### Actionable Next Steps

1. View Review Details
1. List Next 5 Popular Reviews
1. Add Review

## List 5 More Reviews

As a user
I'd like the ability to view the next 5 most popular reviews
so that continue to view reviews and possibly react to the reviews

### Workflow

1. User is on the Movie Page (`/movies/{id}/index`).
1. User selects the **more reviews** (List 5 More Reviews) button.
1. Website retrieves the next 5 reviews
1. Website appends the list of reviews to the bottom of the existing displayed reviews. See **List 5 Reviews**.

### Actionable Next Steps

1. See **List 5 Reviews** actionbable next steps. 





## View My Review

As a logged in user,
I'd like to see my own review within a **User Review** section
so that I can read my review, edit my review, and view a count of like and dislike reactions from other users

## View Review Details

As a user
I'd like the ability to select a movie review and view its details
so that I can read the entire review, react to another user's review or add my own review.

- Selecting the 'expand' chevron allows the user to **View Review Details**.
    - the entire review within the expanded list item, 
    - A thumbs up (like) icon along with a count of likes for the selected review.
    - A thumbs down (unlike) icon along with a count of unlikes for the selected review.





## De-select Reaction. (delete a reaction)

As a user
I'd like the ability to deselect my reaction so that 
so that I can remove the reaction from the movie review. 

### Workflow

1. The user is assumed to be logged in.
1. The user toggles the selected reaction. 
1. The website sends a request to delete the reaction to the API. 
1. The website updates the UI by unselecting the appropriate like or unlike button. 

### Actionable Next Steps

1. Add Reaction
1. Add Reaction
1. Add Movie Review
1. Edit Movie Review
1. Reverse Reaction





## Reverse Reaction (delete and add or its a put)

As a user
I'd like the ability to reverse my reaction to a movie review
so that I can elect to unlike my previously liked reaction to like my previously unlike reaction.

### Workflow

1. The user is assumed to be logged in.
1. The user selects the unselected reaction (either like or unlike)
1. The website updates the reaction by issuing a put to the API. 
1. The website updates the UI by unselecting the appropriate reaction and selecting the opposite reaction.

### Actionable Next Steps

1. De-select Reaction





## Login

As a user
I'd like the ability to login to the website
so that I can
1. Add Reaction
1. De-select Reaction
1. Reverse Reaction
1. Add Movie Review
1. Edit Movie Review


### Workflow

1. User attempts a protected action or clicks the **login** menu item.
1. Website determines if user is logged in.
1. If unauthenticated, the website redirects the user to the `\login` page.
1. After successfully logging in the website navigates to the appropriate page associated with the protected action.
1. The website attempts to perform the protected action.
1. The website updates the UI to reflect the action. 
1. The website updates the menu to **logout**. 
1. The website displays the user name next to **logout**.


### Actionable Next Steps

1. Logout




## Logout

As a user
I'd like the ability to logout so that another user my not us
so that I can prevent another person from performing a protection actions such as adding a reaction or adding a movie review. 

### Workflow

1. User clicks the **logout** menu item.
1. The website navigates the user to the **Display Home Page / Search Movies** webpage.
1. The website removes the **User Review** section from the page.
1. The website updates the menu to **login**. 
1. The website removes the user's login name.

### Actionable Next Steps

1. Login