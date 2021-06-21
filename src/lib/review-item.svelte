<script>
    import ThumbsToggle from '$lib/thumbs-toggle.svelte'
    import { find, propEq, propOr, isNil, not } from 'ramda';
    export let review = {}
    export let itemId = 1
    //export let enableReaction = false
    let {id, movieId, rating, summary, author, counts, reactions} = review
    export let userName = null
    export let handleSaveReaction
    const currentUsersReviewReaction = find(propEq('user', userName), reactions)
    const currentUsersReaction = propOr(null, 'reaction', currentUsersReviewReaction)

    // let the current logged in user click thumbs up/down the user has not reacted to the current review
    //const enableReaction = not(isNil(userName)) && isNil(currentUsersReaction)

  
    export let enableReaction = userName && (author !== userName) && isNil(currentUsersReaction)
    rating = rating || 'N/A'
    summary = summary || ''
    author = author || 'N/A'
    export let bgColor 
    bgColor = bgColor ? bgColor:  itemId % 2 === 0 ? "white" : 'whitesmoke'

    console.log('review-item: ', review.movieId, 'review id: ', review.id, 'author', author, 'currentUsersReviewReaction', currentUsersReviewReaction)
   console.log('enableReaction', enableReaction)
   console.log('review', review)
   console.log('currentUsersReviewReaction', currentUsersReviewReaction)
   // console.log('isNil(currentUsersReaction)', isNil(currentUsersReaction))
    //console.log('isNil(currentUsersReaction) && enableReaction:', isNil(currentUsersReaction) && enableReaction)
</script>

<li class="col-span-1 bg-{bgColor}">
  <div class="w-full flex items-center justify-between p-4 space-x-2">
    <div class="flex-1 ">
      <div class="flex items-center space-x-3">
        <h3 class="text-gray-900 text-sm font-medium truncate">{author}</h3>
        <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{rating} stars</span>
      </div>
      <p class="mt-1 text-gray-500 text-sm">{summary}</p>
    </div>
  </div>
  
  <ThumbsToggle  {enableReaction} {currentUsersReaction} {userName} on:saveReaction={handleSaveReaction} movieId={movieId} reviewId={id} likesCount={counts.like} dislikesCount={counts.dislike} />
</li>