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
  description="I’m a developer working on Front-end for the moment"
  canonical="https://www.reyml.com/"
  openGraph={{
    url: "https://www.reyml.com/",
    title: "Reynol Martínez",
    description: "Front-end Developer",
    images: [
      {
        url: "https://www.reyml.com/triforce.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
      {
        url: "https://www.reyml.com/triforce.png",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
      },
      { url: "https://www.reyml.com/triforce.png" },
      { url: "https://www.reyml.com/triforce.png" },
    ],
    site_name: "Reyml",
  }}
  twitter={{
    handle: "@reyml.com",
    site: "@reyml.com",
    cardType: "summary_large_image",
    title: "Reyml | Reynol Martinez",
    description: "I’m a developer working on Front-end for the moment",
    image: "https://www.reyml.com/code1.png",
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

<div class="h-screen items-center flex w-full justify-center">
  <div
    class="translate-y-48 max-w-sm md:max-w-lg w-full mx-6 md:translate-y-0"
  >
    <div class=" flex justify-center md:justify-end ">
      <img
        alt="profile pic"
        class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        src="/me1.jpg"
      />
    </div>
    <div class="tracking-wider ">
      <h2
        class:is-active={active}
        class="text-gray-300 text-3xl font-semibold inter active"
      >
        Web Developer
      </h2>
      <h2 class="font-sans">Why hire me</h2>
      <ul class="mt-2 text-gray-400 font-sans text-md">
        <li>
          <span class="text-red-200 font-bold">Communicative</span> - I come
          from a customer service background so I have a deep appreciation for
          clear communication. I keep my clients updated frequently and I can
          translate technical concepts into words that anyone can understand.
        </li>
        <li>
          <span class="text-red-200 font-bold">Detail orientated</span> - I am thorough
          and caring to ensure that the final product matches your specifications.
        </li>
        <li>
          <span class="text-red-200 font-bold">Time</span> - I understand the importance
          of projects being delivered on time and I will treat deadlines with maximum
          respect.
        </li>
      </ul>
      <ul>
        <br />
        <p class="text-red-200">Core expertise</p>
        <div class="flex flex-row flex-wrap gap-x-4 text-gray-400">
          <li>Javascript</li>
          <li>Tailwindcss</li>
          <li>SvelteKit</li>
          <li>React</li>
          <li>11ty</li>
          <li>GraphCMS</li>
          <li>Firebase</li>
        </div>
      </ul>
    </div>
  </div>
</div>

<canvas class="background" />

<section class=" items-center flex justify-center mt-48">
  <div class="my-16 mx-4 sm:mx-14 md:mx-24 lg:mx-72 pt-12" id="projects">
    <h2
      class="text-center pb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl inter toProjects activee"
    >
      Projects
    </h2>
    <a
      href="https://urbanemoji.info"
      target="_blank"
      rel="noopener noreferrer"
      class="md:p-10 p-4 sm:p-6 flex flex-col justify-center items-start shadow-pink-500 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div class="md:mx-14">
        <p class="text-gray-400 font-mono">Javascript</p>
        <h2 class="text-gray-400 text-xl sm:text-3xl font-bold font-heading ">
          UrbanEmoji
        </h2>
        <p
          class="text-gray-500 tracking-wider text-md sm:text-lg md:text-xl space mt-2 flex flex-wrap"
        >
          The fastest way to get an Emoji combo or phrase. Just type and search,
          from movies, meme, songs, anime, popular phrases and much more, try
          it!.
        </p>
      </div>
    </a>
  </div>
</section>

<style>
  .background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>
