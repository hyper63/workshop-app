<script>
    export let styles = ''
    export let href
    export let txtColor="red"
  </script>
  <a {href} class="font-space text-{txtColor} {styles}">
    <slot></slot>
  </a>
  <style lang="postcss">
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>