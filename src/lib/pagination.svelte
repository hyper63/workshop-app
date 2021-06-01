<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();
  
    export let pages = 3
    export let color = 'red'
    export let styles = ''
      
    let inactive = 'lightgray'
    let buttonList = times(pages, () => inactive)
      
    let active = 0
  
    $: {
      buttonList = buttonList.map((v, i) => i === active ? color : inactive) 
    }
    function toggle(b) {
      return () => {
        active = b
        dispatch('click', { index: active })
      }
    }
  
    function times(c, fn) {
      let result = []  
      for (var i = 0; i < c; i++) {
        result.push(fn(i)) 
      }
      return result
    }
  </script>
  <div class="flex {styles}">
    {#each buttonList as b, i}
      <button on:click={toggle(i)} class="bg-{b}"></button>
    {/each}
  </div>
  <style lang="postcss">
  
    button {
      @apply rounded-full;
      height: 16px;
      width: 16px;
      margin: 8px 4px;
      padding: 0;
    }
  </style>
  