<script>
    let active = false
    const handleClick = () => {
        scroll(0,0)
        active = !active
    }
</script>

<header class='h-14 flex items-center w-full'>
  <nav class="w-full flex items-center justify-between flex-wrap opacity-75 p-6 fixed backdrop-blur-xl">
   <div class="z-50 flex items-left flex-shrink-0  w-1/2">
    <img src="favicon.png" width="50" height="50" alt="logo" href='/' class="opacity-75 backdrop-blur-xl">
   </div>
   <div class="flex mt-5 justify-end w-1/2">
      <button class:is-active={active} on:click={handleClick} class="sticky hamburger hamburger--spring color-white" type="button">
        <span class="hamburger-box">
        <span class="hamburger-inner"></span>
        </span>
      </button>  
     </div>
  </nav>
</header>