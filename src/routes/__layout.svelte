<script context="module">
  export async function load({page, session}) {

    if (/^\/movies\/(.*)\/reviews\/(.*)/.test(page.path) && session.userName === '') {
      return { redirect: '/', status: 302 }
    }
    return { props: {} }
  }
</script>

<script>
  import "../app.postcss";
</script>

<slot />
