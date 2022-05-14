import vercel from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
  },
  preprocess: preprocess({
    preserve: ["ld+json"],
  }),
}

export default config
