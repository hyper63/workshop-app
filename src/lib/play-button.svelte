<script>
    export let txtColor = 'black'
    export let bgColor = 'whitesmoke'
    export let iconColor = '#7C7F86'
    export let href = ''
    
  </script>
  <a {href}>
  <button class="m-0 p-0 flex space-x-2 focus:outline-none" >    
    <div class="p-6 bg-whitesmoke text-{iconColor} hover:bg-{bgColor} rounded-full flex items-center justify-center">
      <svg class="ml-2" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 22.813V0.812988L19 11.313L0 22.813Z" fill="inherit"/>
      </svg>
    </div> 
    <span class="font-mono font-bold text-xl text-black hover:text-{txtColor}">
      <slot></slot>
    </span>
  </button>
  </a>
    
  <style lang="postcss">
    div {
      width: 145px;
      height: 70px;
    }
    button { 
      width: 70px;
      height: 70px;
    }
    svg {
      fill: currentColor;
    }
  </style>
  