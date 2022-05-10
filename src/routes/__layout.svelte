<script>
  import "../app.css"
  import Header from '$lib/Header.svelte'
  import Title from '$lib/title.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <Title />
  <link href="../app.css" rel="stylesheet">
</svelte:head>
<Header/>
<main class="text-gray-100">
  <slot></slot>
</main>