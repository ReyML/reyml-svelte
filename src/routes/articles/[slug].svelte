<script context="module">
  import { gql, GraphQLClient } from "graphql-request"

  export async function load({ fetch, params }) {
    const { slug } = params
    const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
      headers: {},
    })

    const query = gql`
      query PostPageQuery($slug: String!) {
        post(where: { slug: $slug }) {
          title
          date
          content {
            html
          }
          tags
          author {
            id
            name
          }
        }
      }
    `

    const variables = {
      slug: slug,
    }

    const { post } = await graphcms.request(query, variables)

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="mx-7 md:mx-16 lg:mx-52 my-16 py-14">
  <button class="my-4 rounded-md inter px-3 py-1 bg-[#1C1927]"
    ><a href="/articles">Back</a></button
  >

  <h1 class="text-4xl font-semibold mb-7 text-gray-300">{post.title}</h1>
  <a href="/" class="inline-flex items-center mb-6">
    <span class="flex-grow flex flex-col pl-4">
      <span class="font-medium text-gray-400">{post.author.name}</span>
    </span></a
  >
  <div class="mb-6 flex justify-between">
    <div>
      {#if post.tags}
        {#each post.tags as tag}
          <span
            class="py-1 px-2 mr-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"
            >{tag}</span
          >
        {/each}
      {/if}
    </div>
    <p class="text-gray-400 text-xs tracking-widest mt-0.5">
      {new Date(post.date).toDateString()}
    </p>
  </div>
  <article class="text-gray-400 tracking-wider leading-7">
    {@html post.content.html}
  </article>
</div>
