<script>
    
    import {isEmpty, not, propOr} from 'ramda'
    import ReviewItem from '$lib/review-item.svelte'
    import LinkButton from '$lib/link-button.svelte'
    import NavButton from '$lib/nav-button.svelte'
    export let movieId = null
    export let review = {}
    export let userName
    export let handleSaveReaction
    export let pagePath
</script>
<div>
    <!-- // Review List Item (logged in and && review exists for currently logged in user) -->
    {#if userName && not(isEmpty(review)) && userName === propOr( null,'author',review)}
        <div class="bg-lightblue">
            <h3 class="text-gray-900 text-sm font-medium truncate">My Review</h3>
            <ul>
                <ReviewItem {handleSaveReaction} {userName} {review} bgColor="lightblue" enableReaction={false}/>
            </ul>
            <section class="pl-2 pb-4">
                <div class="flex flex-col pr-6 items-center">          
                <div class="mt-4 mb-4">
                    <LinkButton href="/movies/{movieId}/reviews/{review.id}/edit">Edit My Review</LinkButton>
                </div>
                </div>
            </section>
        </div>  
    {:else if userName && isEmpty(review)}
        <section class="pl-2 pb-4">
            <div class="flex flex-col pr-6 items-center">          
            <div class="mt-4">
                <LinkButton href="/movies/{movieId}/reviews/add">Add My Review</LinkButton>
            </div>
            </div>
        </section>
    {:else}
        <section class="pl-2 pb-4">
            <div class="flex flex-col pr-6 items-center">          
            <div class="mt-4">
                <!-- <a class="font-space uppercase text-sm" href="/login">Login</a> -->
                <LinkButton href="/login?redirectTo={pagePath}">Login to Add Your Review</LinkButton>
            </div>
            </div>
        </section>
    {/if}
</div>