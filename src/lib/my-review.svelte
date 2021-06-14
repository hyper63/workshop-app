<script>
    import {isEmpty, not, propOr} from 'ramda'
    import ReviewItem from '$lib/review-item.svelte'
    import LinkBtn from '$lib/link-button.svelte'
    export let movieId = null
    export let review = {}
    export let loggedInUser = null

   console.log({loggedInUser, review})
</script>
<div>
    <!-- // Review List Item (logged in and && review exists for currently logged in user) -->
    {#if loggedInUser && not(isEmpty(review)) && loggedInUser === propOr( null,'author',review)}
        <div class="bg-lightblue">
            <h3 class="text-gray-900 text-sm font-medium truncate">My Review</h3>
            <ul>
                <ReviewItem {review} bgColor="lightblue"/>
            </ul>
            <section class="pl-2 pb-4">
                <div class="flex flex-col pr-6 items-center">          
                <div class="mt-4 mb-4">
                    <LinkBtn href="/movies/{movieId}/reviews/{review.id}/edit">Edit My Review</LinkBtn>
                </div>
                </div>
            </section>
        </div>  
    {:else if loggedInUser && isEmpty(review)}
        <section class="pl-2 pb-4">
            <div class="flex flex-col pr-6 items-center">          
            <div class="mt-4">
                <LinkBtn href="/movies/review/add">Add My Review</LinkBtn>
            </div>
            </div>
        </section>
    {:else}
        <section class="pl-2 pb-4">
            <div class="flex flex-col pr-6 items-center">          
            <div class="mt-4">
                <LinkBtn href="/login">Login</LinkBtn>
            </div>
            </div>
        </section>
    {/if}

    
        
      
</div>