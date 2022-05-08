<script>
  import "../app.css"
  import Header from '$lib/Header.svelte'
  import Title from '$lib/title.svelte'
</script>

<svelte:head>
  <Title />
  <link href="../app.css" rel="stylesheet">
</svelte:head>
<Header/>
<main>
  <slot></slot>
</main>