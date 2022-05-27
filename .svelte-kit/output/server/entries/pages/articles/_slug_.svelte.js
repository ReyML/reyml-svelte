import { c as create_ssr_component, e as escape, a as each } from "../../../chunks/index-63d23460.js";
import { GraphQLClient, gql } from "graphql-request";
async function load({ fetch, params }) {
  const { slug } = params;
  const graphcms = new GraphQLClient("https://api-eu-west-2.graphcms.com/v2/cl34lhw8b64q301z8bjyf4g4c/master", { headers: {} });
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
    `;
  const variables = { slug };
  const { post } = await graphcms.request(query, variables);
  return { props: { post } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${$$result.head += `${$$result.title = `<title>${escape(post.title)}</title>`, ""}`, ""}

<div class="${"mx-7 md:mx-16 lg:mx-52 my-16 py-14"}"><button class="${"my-4 rounded-md inter px-3 py-1 bg-[#1C1927]"}"><a href="${"/articles"}">Back</a></button>

  <h1 class="${"text-4xl font-semibold mb-7 text-gray-300"}">${escape(post.title)}</h1>
  <a href="${"/"}" class="${"inline-flex items-center mb-6"}"><span class="${"flex-grow flex flex-col pl-4"}"><span class="${"font-medium text-gray-400"}">${escape(post.author.name)}</span></span></a>
  <div class="${"mb-6 flex justify-between"}"><div>${post.tags ? `${each(post.tags, (tag) => {
    return `<span class="${"py-1 px-2 mr-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"}">${escape(tag)}</span>`;
  })}` : ``}</div>
    <p class="${"text-gray-400 text-xs tracking-widest mt-0.5"}">${escape(new Date(post.date).toDateString())}</p></div>
  <article class="${"text-gray-400 tracking-wider leading-7"}"><!-- HTML_TAG_START -->${post.content.html}<!-- HTML_TAG_END --></article></div>`;
});
export { U5Bslugu5D as default, load };
