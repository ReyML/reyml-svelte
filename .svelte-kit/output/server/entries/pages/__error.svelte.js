import { c as create_ssr_component, e as escape } from "../../chunks/index-63d23460.js";
function load({ error, status }) {
  return { props: { props: { error, status } } };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error, status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `<div class="${"flex items-center justify-center py-12"}"><div class="${"bg-white bg-transparent rounded-md flex items-center justify-center mx-4 md:w-2/3"}"><div class="${"flex flex-col items-center py-16"}"><img class="${"px-4 hidden md:block"}" alt="${"a 404 error"}" src="${"https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"}">
      <img class="${"md:hidden"}" alt="${"a 404 error"}" src="${"https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"}">
      <h1 class="${"px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800"}">OOPS!
      </h1>
      <p>${escape(error)}</p>
      <p class="${"px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600"}">No signal here! we cannot find the page you are looking for
      </p>
      <button class="${"mx-4 h-10 w-44 rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800"}"><a href="${"/"}">Go Back</a></button></div></div></div>

${$$result.head += `${$$result.title = `<title>${escape(status)}</title>`, ""}`, ""}
&gt;`;
});
export { _error as default, load };
