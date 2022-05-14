<script>
  import { afterNavigate } from "$app/navigation"
  import { MetaTags, JsonLd } from "svelte-meta-tags"

  afterNavigate(() => {
    const mq = window.matchMedia("(min-width: 700px)")
    if (mq.matches) {
      let particles = Particles.init({
        selector: ".background",
        color: ["#DA0463", "#F8BBD0", "#B2FEFA"],
        connectParticles: false,
        speed: 0.1,
        sizeVariations: 10,
      })
    } else {
      let particles = Particles.init({
        selector: ".background",
        color: ["#DA0463", "#F8BBD0", "#B2FEFA"],
        connectParticles: false,
        speed: 0.1,
        sizeVariations: 10,
        maxParticles: 13,
      })
    }
  })
  let active = true
  const handleClick = () => {
    let about = document.querySelector(".toTop")
    let projects = document.querySelector(".toProjects")

    if (active) {
      projects.scrollIntoView({ behavior: "smooth" })
    } else if (!active) {
      about.scrollIntoView({ behavior: "smooth" })
    }
    active = !active
  }
</script>

<svelte:head>
  <title>Reynol Martínez</title>
  <link rel="canonical" href="https://reyml.com" />
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
</svelte:head>

<MetaTags
  title="Reynol Martínez"
  titleTemplate="%s | Reynol Martínez"
  description="Indie maker trying to learn many things at once. I know, I have to focus. I hope Google shows this description :)"
  canonical="https://www.reyml.com/"
  openGraph={{
    url: "https://www.reyml.com/",
    title: "Reynol Martínez",
    description: "Home page",
    site_name: "Reyml",
  }}
  twitter={{
    handle: "@handle",
    site: "@reyml.com",
    cardType: "summary_large_image",
    title: "Reyml website",
    description:
      "Indie maker trying to learn many things at once. I know, I have to focus. I hope Google shows this description :)",
    image: "code1.png",
    imageAlt: "Twitter image alt",
  }}
  robotsProps={{
    noarchive: true,
    nosnippet: true,
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
    notranslate: true,
    noimageindex: true,
    unavailableAfter: "25 Jun 2010 15:00:00 PST",
  }}
/>

<div class="border-0 toTop">
  <div id="parallax" class="flex justify-center items-center ">
    <div class="flex flex-col gap-y-5 -translate-y-2 text-white rounded-md">
      <div class="max-w-sm md:max-w-lg mx-8 py-4 px-2 z-50 rounded-lg my-20">
        <div class=" flex justify-center md:justify-end -mt-16">
          <img
            alt="profile pic"
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="/me.JPG"
          />
        </div>
        <div class="tracking-wider ">
          <h2
            class:is-active={active}
            class="text-gray-300 text-3xl font-semibold inter active"
          >
            About Me
          </h2>
          <p class="mt-2 md:text-gray-400">
            I am a creative developer, who aims to work with small businesses
            and communities to bring their passions to life. I offer development
            services of web applications or websites!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<canvas class="background" />

<section
  class="bg-section sm:py-16 md:py-24 flex justify-center mx-8 md:-translate-y-12 -translate-y-16"
>
  <div
    class="container animatable"
    id="projects"
    style="animation-play-state: running;"
  >
    <div class="flex flex-col items-center w-full max-w-7xl m-auto">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl inter p-2 toProjects activee"
      >
        Projects
      </h2>
      <div class="flex flex-col items-center w-full mt-8">
        <div class="lg:mx-56 my-2">
          <a
            href="https://urbanemoji.info"
            target="_blank"
            rel="noopener noreferrer"
            class=" shadow-pink-500 flex h-52 md:h-72 justify-center items-center rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div
              class="flex flex-col max-w-2xl justify-center items-start mt-4 px-5"
            >
              <p class="text-gray-400 flex font-mono">Javascript</p>
              <h2
                class="text-gray-400 text-xl sm:text-3xl font-bold font-heading text-center sm:text-left"
              >
                UrbanEmoji
              </h2>
              <p
                class="text-gray-500 tracking-wider text-md sm:text-lg md:text-xl space mt-2"
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
  class="active fixed rounded-full z-50 hover:scale-110 duration-300 bottom-2 left-5 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    fill="#DB3864"
    class="bi bi-chevron-expand"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
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
