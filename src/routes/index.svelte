<script>
  import Header from '$lib/header.svelte'  
  import Button from '$lib/button.svelte'
  import Input from '$lib/input.svelte'
</script>
<svelte:head>
  <title>hyper movie reviews and reactions</title>
</svelte:head>
<Header />

<main class="w-full flex justify-between mt-4 ml-4 md:mt-20 md:ml-24 md:mr-4">
  <section class="splash bg-no-repeat pl-4 md:pl-24 md:pr-24">
    <div class="mt-8 md:mt-20 md:w-3/4">
      <Input/><a href="https://docs.hyper.io/getting-started"><Button>Search</Button></a>

    </div> 
  </section>
  </main>