<script>
    export let value
    export let styles
    export let id = '' 
    export let name = ''
    let focus = false
    </script>
    <div class="flex border-3 p-1 rounded-large {focus ? 'border-blue' : 'border-lightgray'} {styles}">
      <input 
        {name}
        {id}
        on:blur={() => focus = false }
        on:focus={() => focus = true } 
        type="text" on:input  
        class="w-full m-3 p-1 font-mono" 
        bind:value 
      />
    </div>
    <style lang="postcss">
      input:focus {
        outline: none;
      }
    </style>
    