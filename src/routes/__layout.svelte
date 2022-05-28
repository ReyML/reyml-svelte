<script>
  import "../app.css"
  import Header from '$lib/Header.svelte'
  import Title from '$lib/title.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <Title />
  <link href="../app.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>
<Header/>
<main class="text-gray-100 space">
  <slot></slot>
</main>
<Footer />