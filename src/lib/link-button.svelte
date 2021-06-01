<script>
    export let href
    export let bgColor = 'active-blue'
    export let txtColor = 'white'
    export let styles = ''
  </script>
  <a {href} class="bg-{bgColor} text-{txtColor} {styles}">
    <slot></slot>
  </a>
  <style>
    a {
      
      display: inline-flex;
      align-items: center;
      border-radius: 0.375rem;
      border-width: 1px;
      border-color: transparent;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-family: PT Mono;
      font-size: 1rem;
      line-height: 1.5rem;
      --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  </style>