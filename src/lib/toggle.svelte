<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    let txtColor = "black"
    export let iconColor = '#7C7F86'
    export let toggleEnabled = false
    export let enabledColor = "purple"
    export let disabledColor = "lightgray"
    export let data = null
    function saveToggle (e) {
        toggleEnabled = !toggleEnabled
        const editedToggleData = {...data, active: toggleEnabled }
        dispatch('toggleSave', editedToggleData)
    }
</script>
  <!-- This example requires Tailwind CSS v2.0+ -->
<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
<button on:click={saveToggle} type="button" class="m-0 p-0 bg-{toggleEnabled ? enabledColor : disabledColor}   border-2 border-transparent rounded-full cursor-pointer h-7 w-12 transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{iconColor}-500" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
    <span class="translate-x-{toggleEnabled ? 5: 0} pointer-events-none relative inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
      <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
      <span class="opacity-{toggleEnabled ? 0 : 100} ease-{toggleEnabled ? "out" : "in"} duration-{toggleEnabled ? 100 : 200} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
        <svg class="h-4 w-4 text-{txtColor}-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>

      <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
      <span class="opacity-{toggleEnabled ? 100 : 0} ease-{toggleEnabled ? "in" : "out"} duration-{toggleEnabled ? 200 : 100} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
        <svg class="h-4 w-4 text-{iconColor}-600" fill="currentColor" viewBox="0 0 12 12">
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
        </svg>
      </span>
    </span>
  </button>