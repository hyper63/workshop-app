<script context="module">
  export async function load({page, session}) {

    console.log('page.path', page.path, 'session.username', session.username)
    if (/^\/movies\/(.*)\/reviews\/(.*)/.test(page.path) && session.username === '') {
      return { redirect: '/', status: 302 }
    }
    return { props: {} }
  }
</script>

<script>
  import "../app.postcss";
</script>

<slot />
