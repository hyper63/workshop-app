<script>
    export let type = 'button'
    export let bgColor = 'blue'
    export let txtColor = 'white'
    export let styles = ''
    export let hoverBgColor ='purple'
      
    </script>
    <button on:click 
        type={type} 
        class="p-3 
            border 
            border-transparent 
            rounded-full 
            shadow-sm 
            text-{txtColor} 
            bg-{bgColor} 
            hover:bg-{hoverBgColor} 
            focus:outline-none 
            focus:ring-2 
            focus:ring-offset-2 
            focus:ring-{bgColor} 
            {styles}">
       
        <slot></slot>   
    </button>

 





