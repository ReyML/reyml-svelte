<script>
  	import { blur } from 'svelte/transition';

    let active = false
    let activee = true
    const handleClick = () => {
        active = !active
        activee = !activee
    }
</script>

<header class='h-10 flex items-center justify-end w-full mb-8'>
  <nav class="w-full flex items-center justify-between flex-wrap opacity-75 p-6 fixed backdrop-blur-xl">
   <a href='/' class="z-50 flex flex-shrink-0  w-1/2">
    <img src="favicon.png" width="50" height="50" alt="logo" href='/' class="translate-y-4 opacity-75 backdrop-blur-xl">
   </a>
   <div class="flex mt-2 justify-end w-1/2">
      <button class:is-active={active} on:click={handleClick} class="translate-y-4 sticky hamburger hamburger--spring color-white" type="button">
        <span class="hamburger-box">
        <span class="hamburger-inner"></span>
        </span>
      </button>  
     </div>
  </nav>  
  {#if active}       
  <div transition:blur="{{amount: 20}, {duration: 800}}" class='h-screen w-72 py-16 px-8 text-4xl translate-y-80 mt-20 fixed z-10 rounded-lg  hidden' class:hidden={activee} on:click={handleClick}>
    <div class="mx-auto text-gray-200 font-light">
      <ul class="tracking-widest flex justify-center flex-col translate-y-52 items-center gap-y-6 mx-8">
        <li class='hover:list-disc'><a href='/'>Home</a></li>
        <li class='hover:list-disc'><a href='/'>Resume</a></li>
        <li class='hover:list-disc'><a href='/'>About</a></li>
      </ul>
    </div>
  </div>
  {/if}
</header>
