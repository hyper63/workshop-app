<script>

    import OpenStar from '$lib/star-open.svelte'
    import Star from '$lib/star-filled.svelte'
    import { times, inc } from 'ramda'
    export let rating = 0
    export let bgColor = 'red'
    const createStarData = stars => times(x => ({"item": inc(x), starType: inc(x) <= stars ? "filled" : "open"  }), 5)
    const starData = createStarData(rating)

</script>

<div class="bg-{bgColor} pt-4 flex">

    {#each starData as star}
        {#if (star.starType==="filled")}
            <Star/>
        {:else}
            <OpenStar/>
        {/if}
	{/each}
    
</div>