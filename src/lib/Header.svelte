<script>
  	import { blur } from 'svelte/transition';

    let active = false
    let activee = true
    const handleClick = () => {
        active = !active
        activee = !activee
    }
</script>

<header class='h-1 flex items-center justify-end w-full mb-8'>
  <nav class="w-full flex items-center justify-between bg-transparent flex-wrap backdrop-blur-md p-6 fixed">
   <a href='/' class="z-50 flex flex-shrink-0  w-1/2">
    <img src="Inicio.png" width="50" height="50" alt="logo" href='/' class=" scale-95 translate-y-7 rounded-full">
   </a>
   <div class="flex mt-2 justify-end w-1/2">
      <button class:is-active={active} on:click={handleClick} class="translate-y-7 sticky hamburger hamburger--spring color-white" type="button">
        <span class="hamburger-box">
        <span class="hamburger-inner"></span>
        </span>
      </button>  
     </div>
  </nav>  
  {#if active}       
  <div transition:blur="{{amount: 20}, {duration: 800}}" class=' h-screen w-72 py-16 text-xl translate-y-80 mt-20 fixed z-10 hidden' class:hidden={activee} on:click={handleClick}>
    <div class=" text-gray-200 font-light">
      <ul class="tracking-widest text-[#B5387B] font-bold flex flex-col translate-y-52 items-end px-3 gap-y-6">
        <li class='hover:list-disc bg-gray-100 rounded-lg py-1 px-2'><a href='/'>Home</a></li>
        <li class='hover:list-disc bg-gray-100 rounded-lg py-1 px-2'><a href='/resume'>Resume</a></li>
        <li class='hover:list-disc bg-gray-100 rounded-lg py-1 px-2'><a href='https://rb.gy/enaq3a' target="_blank">OnlyFans</a></li>
        <li class='hover:list-disc bg-gray-100 rounded-lg py-1 px-2'><a href='/'>About</a></li>
      </ul>
    </div>
  </div>
  {/if}
</header>
