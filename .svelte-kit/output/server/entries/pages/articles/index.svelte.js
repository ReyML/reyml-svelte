import { c as create_ssr_component, a as each, e as escape } from "../../../chunks/index-63d23460.js";
import { GraphQLClient, gql } from "graphql-request";
async function load() {
  const graphcms = new GraphQLClient("https://api-eu-west-2.graphcms.com/v2/cl34lhw8b64q301z8bjyf4g4c/master", { headers: {} });
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
    `;
  const { posts } = await graphcms.request(query);
  return { props: { posts } };
}
const Articles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div class="${"px-5 py-10 "}"><div class="${"mt-12 px-8 pb-36 flex justify-center "}"><div class="${"space tracking-wider leading-6 max-w-lg"}"><h1 class="${"text-2xl font-extrabold text-gray-200 mb-4"}">Articles</h1>
      <div class="${"text-lg text-gray-300 leading-normal spaced-y-6 space"}"><p>I intend to post some articles during my journey as a web developer.
          Sadly right now I don&#39;t have any practical content posted yet. So I
          hope you like some of the default templates found in GraphCMS :)
        </p></div>
      <ul>${each(posts, (post) => {
    return `<li><div class="${"mt-12 spaced-y-10 space tracking-wider leading-6"}"><div><div><a class="${"text-lg text-gray-300 font-bold no-underline hover:underline"}" href="${"/articles/" + escape(post.slug)}">${escape(post.title)}</a></div>
                <p class="${"text-gray-400 text-base leading-normal mt-1"}">${escape(post.excerpt)}</p>
                <p>${escape(post.date)}</p>
              </div></div>
          </li>`;
  })}</ul></div></div></div>`;
});
export { Articles as default, load };
