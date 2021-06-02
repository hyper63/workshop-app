<script>
  import Header from '$lib/header.svelte'  
  import Button from '$lib/button.svelte'
   import Input from '$lib/input.svelte'
  //import Section from '$lib/section.svelte'
</script>
<svelte:head>
  <title>hyper movie reviews and reactions</title>
</svelte:head>
<Header title="hyper search"/>

<main class="mt-4 ml-4 md:mt-20 md:ml-24 md:mr-4">
  <section class="pl-4">
    <div class="flex flex-col pr-4 items-center">

      <Input name="foo" styles="w-full" focus=true/>
     
      <div class="mt-4">
        <a class="" href="/movies/roadhouse">
          <Button>Search</Button>
        </a>
      </div>
    </div>
  </section>

   <!-- <Section id="data" styles="md:mt-96" image="right">
   <span slot="text">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl px-4 md:text-center md:text-5xl">Data Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
          API powered data access:
        </p>
        <ul class="font-mono md:mt-8 bg-black text-white rounded-lg p-8">
          <li><span class="text-green"># Create </span><br />{'POST /data/{app} -d {...}'}</li>
          <li><span class="text-green"># Read </span><br />{'GET /data/{app}/:id'}</li>
          <li><span class="text-green"># Update </span><br />{'PUT /data/{app}/:id -d {...}'}</li>
          <li><span class="text-green"># Delete </span><br />{'DELETE /data/{app}/:id'}</li>
          <li><span class="text-green"># Query </span><br />{'POST /data/{app}/_query -d { selector }'}</li>
        </ul>
      </div>
    </span>
    <span slot="image">
      <img src="data-lg.svg" alt="data" /> 
    </span> 
  </Section> -->
  </main>