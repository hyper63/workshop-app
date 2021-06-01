<script>
    export let type = 'button'
    export let bgColor = 'blue'
    export let txtColor = 'white'
    export let styles = ''
    export let hyperBolt = true
    export let hoverBgColor ='purple'
      
    </script>
    <button 
      on:click 
      type={type} 
      class="space-x-4 text-{txtColor} bg-{bgColor} hover:bg-{hoverBgColor} focus:ring-{bgColor} {styles}">
        <div>
          <slot></slot>
        </div>
        {#if (hyperBolt)}
          <div>
            <svg aria-hidden="true" width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7812 5.68799H6.70312L8.21484 1.15283C8.35547 0.590332 7.93359 0.0629883 7.40625 0.0629883H2.34375C1.92188 0.0629883 1.53516 0.379395 1.5 0.80127L0.375 9.23877C0.304688 9.76611 0.691406 10.188 1.21875 10.188H5.36719L3.75 17.0435C3.64453 17.5708 4.03125 18.063 4.55859 18.063C4.875 18.063 5.15625 17.9224 5.29688 17.6411L11.4844 6.95361C11.8359 6.42627 11.4141 5.68799 10.7812 5.68799Z" fill="{txtColor}"/>
            </svg>
          </div>
        {/if}
        
    </button>
    <style style lang="postcss">
      button {
      }
    </style>