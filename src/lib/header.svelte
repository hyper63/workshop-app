<script>
    //import { goto } from '$app/navigation'
    
    import LinkButton from '$lib/link-button.svelte'
    //import NavButton from '$lib/nav-button.svelte'
    let mobileMenu = false
    export let userName 
    export let pagePath

    
    pagePath = pagePath || '/'
    

    function mobile() {
      mobileMenu = !mobileMenu
    }
    
    function isCurrentPage(ref) {
      return window.location.pathname === ref ? 'active' : 'link'
    }

    export let title = "hyper movies"

    //console.log('header ', {pageUrlPath})
</script>
    <header class="flex justify-between mt-4 ml-4 md:mt-20 md:ml-24 md:mr-4">
      <a href="/">
      <section class="flex items-center width-full">
        <!-- logo -->
        <img src="/logo.svg" alt="hyper logo" />
        <!-- name -->
        <h3 class="ml-3">{title}</h3>
      </section>
      </a>
      <section class="md:hidden">
        <button 
          aria-expanded="{mobileMenu ? 'true' : 'false'}"
          aria-label="mobile-menu" 
          class="border-0 mr-4 focus:outline-none" 
          on:click={() => mobile()}
          >
          <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H30M30 8.5H0M0 16H30" stroke="#1286F6" stroke-width="2"/>
          </svg>
        </button>
      </section>
      <nav class="hidden md:w-1/2 md:block  items-center space-x-4">
       
        {#if userName} 
        Logged in as: {userName}
        <LinkButton href="/logout?redirectTo={pagePath}">Logout</LinkButton>
        <!-- <a class="font-space uppercase text-sm" href="/logout">Logout</a> -->
        {:else}
        <!-- <a class="font-space uppercase text-sm" href="/login">Login</a> -->
        <LinkButton href="/login?redirectTo={pagePath}">Login</LinkButton>
        {/if}
        <!-- <a class="font-space uppercase text-sm" href="/login"><NavButton>Login</NavButton></a> -->
        
      </nav>
    
    </header>
    {#if mobileMenu}
    <div class="sm:hidden mx-4" id="mobile-menu">
      <div class="pt-2 pb-3 space-y-1">
          
        <!-- <NavButton><a href="/login">Login</a></NavButton> -->
        {#if userName} 
        Logged in as: {userName}
        <!-- <a class="font-space uppercase text-sm" href="/logout">Logout</a> -->
        <LinkButton href="/logout?redirectTo={pagePath}">Logout</LinkButton>
        {:else}
        <!-- <a class="font-space uppercase text-sm" href="/login">Login</a> -->
        <LinkButton href="/login?redirectTo={pagePath}">Login</LinkButton>
        {/if}
      </div>
    </div>
    {/if}
    
    <style lang="postcss">
      .active {
        @apply bg-lightgreen border-green text-green block pl-3 pr-4 py-2 border-l-4 text-base font-medium;
      }
      .link {
        @apply border-transparent text-gray hover:bg-whitesmoke hover:border-gray hover:text-darkgray block pl-3 pr-4 py-2 border-l-4 text-base font-medium; 
      }
    </style>