<script>
	import { blur } from 'svelte/transition'

  let active = false
  let activee = true

  const handleClick = () => {
    active = !active
    activee = !activee
  }
</script>

<header class="">
  {#if active}
    <div
      transition:blur={{ amount: 0 }, { duration: 100 }}
      class:hidden={activee}
      on:click={handleClick}
      class="blur-lg backdrop-blur-md z-10 hidden  top-0 bottom-0 left-0 right-0 "
    >
    </div>
  {/if} 
  <nav
    class="flex justify-between border-0 flex-nowrap w-full backdrop-blur-md z-50 "
  >
  <div class='flex justify-start'>
    <a href="/" class=" -translate-x z-50 flex flex-shrink-0 ">
      <img
        src="/code1.png"
        height="40"
        width="45"
        alt="logo"
        class=""
      />
      <p
        class=" inter scale-95 flex items-center whitespace-pre text-xl tracking-wider leading-6 text-gray-200 font-bold"
      >
        Reynol Martínez
      </p>
    </a>
  </div>
    <div class="">
     <button
        class:is-active={active}
        on:click={handleClick}
        class=" hamburger hamburger--spring color-white"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner" />
        </span>
      </button>
    </div>
  </nav>
      <div
      class="text-xl z-10 hidden  mx-auto w-full" 
      class:hidden={activee}
      on:click={handleClick}
    >
      <div class="flex items-center justify-center flex-wrap h-screen z-50 text-gray-200 font-light">
        <ul
          class="z-50 text-3xl tracking-wider text-gray-200 font-normal flex flex-col md:flex-row flex-wrap gap-y-6 gap-x-12"
        >
          <li
            class="hover:scale-125 duration-75"
          >
            <a href="/">Home</a>
          </li>
          <li
            class="hover:scale-125 duration-7"
          >
            <a href="/resume">Resume</a>
          </li>
          <li
            class="hover:scale-125 duration-75"
          >
            <a href="/articles">Articles</a>
          </li>
          <li
            class="hover:scale-125 duration-75 "
          >
            <a href="mailto:laraveowling@gmail.com" target="_blank"
              >Contact me</a
            >
          </li>
        </ul>
      </div>
    </div>
</header>
