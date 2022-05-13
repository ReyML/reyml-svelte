<script context="module">
  import { gql, GraphQLClient } from "graphql-request"

  export async function load() {
    const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
      headers: {},
    })

    const query = gql`
      query PostsIndex {
        posts {
          id
          title
          slug
          date
          excerpt
        }
      }
    `

    const { posts } = await graphcms.request(query)

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

<div class="px-5 py-10 ">
  <div class=" mt-12 px-8 pb-36 flex justify-center ">
    <div class=" space tracking-wider leading-6 max-w-lg">
      <h1 class="text-2xl font-extrabold text-gray-200 mb-4">Articles</h1>
      <div class="text-lg text-gray-300 leading-normal spaced-y-6 space">
        <p>
          I intend to post some articles during my journey as a web developer.
          Sadly right now I don't have any practical content posted yet. So I
          hope you like some of the default templates found in GraphCMS :)
        </p>
      </div>
      <ul>
        {#each posts as post}
          <li>
            <div class="mt-12 spaced-y-10 space tracking-wider leading-6">
              <div>
                <div>
                  <a
                    class="text-lg text-gray-300 font-bold no-underline hover:underline"
                    href="/articles/{post.slug}">{post.title}</a
                  >
                </div>
                <p class="text-gray-400 text-base leading-normal mt-1">
                  {post.excerpt}
                </p>
                <p>{post.date}</p>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
