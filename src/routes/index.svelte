<script>
  import Footer from "$lib/Footer.svelte"
  import { onMount, onDestroy, getAllContexts, tick } from "svelte"
  import { afterNavigate } from "$app/navigation"

  afterNavigate(() => {
    const mq = window.matchMedia("(min-width: 800px)")
    if (mq.matches) {
      let particles = Particles.init({
        selector: ".background",
        color: ["#DA0463", "#F8BBD0", "#B2FEFA"],
        connectParticles: false,
        speed: 0.1,
        sizeVariations: 10,
      })
    }
  })

  const handleClick = () => {
    let about = document.querySelector(".toTop")
    about.scrollIntoView({ behavior: "smooth" })
  }
</script>

<svelte:head>
  <title>Reynol Martínez</title>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
</svelte:head>
<div class="border-0 toTop">
  <div id="parallax" class="flex justify-center items-center ">
    <div class="flex flex-col gap-y-5 -translate-y-2">
      <div
        class="max-w-sm md:max-w-lg mx-12 py-4 px-8 z-50 shadow-lg shadow-pink-800 rounded-lg my-20"
      >
        <div class=" flex justify-center md:justify-end -mt-16">
          <img
            alt="profile pic"
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="/me.JPG"
          />
        </div>
        <div class="tracking-wider ">
          <h2 class="text-gray-100 text-3xl font-semibold inter">About Me</h2>
          <p class="mt-2 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<canvas class="background" />
<!--Simon section-->
<section class="bg-section py-10 sm:py-16 md:py-24 flex justify-center mx-8">
  <div
    class="container animatable"
    id="projects"
    style="animation-play-state: running;"
  >
    <div class="flex flex-col items-center w-full max-w-7xl m-auto">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl inter p-2"
      >
        Projects
      </h2>
      <div class="flex flex-col w-full mt-8">
        <div class="w-auto lg:mx-56 my-2">
          <a
            href="https://urbanemoji.info"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#1C1927] flex h-40 justify-center md:h-52 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="flex flex-col  max-w-md items-center justify-center mt-4 px-1"
            >
              <h2
                class="text-white text-xl sm:text-3xl font-bold font-heading text-center sm:text-left"
              >
                UrbanEmoji
              </h2>
              <p
                class="text-gray-300 tracking-wider text-md sm:text-lg md:text-xl space text-center mt-2"
              >
                The fastest way to get an Emoji combo or phrase. Just type and
                search, from movies, meme, songs, anime, popular phrases and
                much more, try it!.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<button
  on:click={handleClick}
  class="sticky z-50 hover:scale-110 duration-300 bottom-2 left-5 mb-2 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="46"
    fill="#DB3864"
    class="bi bi-arrow-up-circle"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
    />
  </svg>
</button>

<style>
  #parallax {
    /*   position: relative; */
    width: 100%;
    height: 94vh;
    /* background-image: 
  url(/parallax/cool.png); */
    /* background-repeat: repeat;
  background-position: center;
  background-position: 50% 50%;
 */
  }

  .background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>
