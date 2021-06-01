<script>
    export let value
    export let styles
    let focus = false
    </script>
    <div class="flex border-3 p-1 rounded-large {focus ? 'border-blue' : 'border-lightgray'} {styles}">
      <input 
        on:blur={() => focus = false }
        on:focus={() => focus = true } 
        type="text" on:input 
        class="w-full m-3 p-1 font-mono" 
        bind:value 
      />
      <button 
        class="font-space {focus ? 'text-white' :'text-black' } {focus ? 'bg-blue' : 'bg-lightgray'}"
        type="button" on:click>
        <span class="mr-3">Search</span>
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7539 15.6372L14.2383 12.1216C14.0625 11.981 13.8516 11.8755 13.6406 11.8755H13.0781C14.0273 10.645 14.625 9.09814 14.625 7.37549C14.625 3.36768 11.3203 0.0629883 7.3125 0.0629883C3.26953 0.0629883 0 3.36768 0 7.37549C0 11.4185 3.26953 14.688 7.3125 14.688C9 14.688 10.5469 14.1255 11.8125 13.1411V13.7388C11.8125 13.9497 11.8828 14.1606 12.0586 14.3364L15.5391 17.8169C15.8906 18.1685 16.418 18.1685 16.7344 17.8169L17.7188 16.8325C18.0703 16.5161 18.0703 15.9888 17.7539 15.6372ZM7.3125 11.8755C4.81641 11.8755 2.8125 9.87158 2.8125 7.37549C2.8125 4.91455 4.81641 2.87549 7.3125 2.87549C9.77344 2.87549 11.8125 4.91455 11.8125 7.37549C11.8125 9.87158 9.77344 11.8755 7.3125 11.8755Z" fill="inherit"/>
    </svg>
      </button>
    </div>
    <style lang="postcss">
      svg {
        fill: currentColor;
      }
      input:focus {
        outline: none;
      }
    </style>