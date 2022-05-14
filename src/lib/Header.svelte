<script>
  import { blur } from "svelte/transition"

  let active = false
  let activee = true
  const handleClick = () => {
    active = !active
    activee = !activee
  }
</script>

<header class="h-1 flex items-center justify-end w-full mb-14">
  <nav
    class="w-full flex items-center justify-between border-0 flex-wrap backdrop-blur-md p-6 fixed z-50"
  >
    <a href="/" class="-translate-x-3 z-50 flex flex-shrink-0 w-1/2">
      <img
        src="/code1.png"
        height="40"
        width="45"
        alt="logo"
        class="translate-y-7"
      />
      <p
        class="inter scale-95 translate-y-9 whitespace-pre text-xl tracking-wider leading-6 text-gray-200 font-bold"
      >
        Reynol Martínez
      </p>
    </a>
    <div class="flex mt-2 justify-end">
      <button
        class:is-active={active}
        on:click={handleClick}
        class="p-2 translate-y-7 sticky hamburger hamburger--spring color-white"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner" />
        </span>
      </button>
    </div>
  </nav>
  {#if active}
    <div
      transition:blur={({ amount: 0 }, { duration: 500 })}
      class=" h-screen w-72 py-16 text-xl translate-y-80 mt-20 fixed z-10 hidden"
      class:hidden={activee}
      on:click={handleClick}
    >
      <div class=" z-50 text-gray-200 font-light">
        <ul
          class="z-50 tracking-widest text-gray-600 font-normal flex flex-col translate-y-52 items-end px-3 gap-y-6"
        >
          <li
            class="hover:list-disc hover:scale-125 duration-75 bg-gray-100 rounded-lg py-1 px-2"
          >
            <a href="/">Home</a>
          </li>
          <li
            class="hover:list-disc hover:scale-125 duration-75 bg-gray-100 rounded-lg py-1 px-2"
          >
            <a href="/resume">Resume</a>
          </li>
          <li
            class="hover:list-disc hover:scale-125 duration-75 bg-gray-100 rounded-lg py-1 px-2"
          >
            <a href="/articles">Articles</a>
          </li>
          <li
            class="hover:list-disc hover:scale-125 duration-75 bg-gray-100 rounded-lg py-1 px-2"
          >
            <a href="https://rb.gy/enaq3a" target="_blank">OnlyFans</a>
          </li>
          <li
            class="hover:list-disc hover:scale-125 duration-75 bg-gray-100 rounded-lg py-1 px-2"
          >
            <a href="mailto:laraveowling@gmail.com" target="_blank"
              >Contact me</a
            >
          </li>
        </ul>
      </div>
    </div>
  {/if}
</header>
