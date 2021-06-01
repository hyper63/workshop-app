
<script>
    export let txtColor = 'blue'
    export let bgColor = 'lightblue'
    export let hoverTextColor = 'white'
  </script>
  <button on:click class="text-{txtColor} bg-{bgColor} hover:bg-{txtColor} hover:text-{hoverTextColor}">
    <slot></slot>
  </button>
  <style lang="postcss">
    button {
      @apply rounded-sm inline justify-center;
      font-size: 14px;
      height: 38px;
      width: 89px;
      margin: 0;
      padding: 0;
    }
  </style>