<script>
    export let styles = ''
    export let id = ''
    export let image = 'left'
</script>
  <section {id} class="md:flex pb-16 {styles}">
    {#if image === 'left'}
    <div class="hidden md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
      <slot name="image"></slot>
    </div>
    {/if}
    <div class="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
      <slot name="text"></slot>
    </div>
    {#if image === 'right'}
    <div class="hidden md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
      <slot name="image"></slot>
    </div>
    {/if}
  </section>