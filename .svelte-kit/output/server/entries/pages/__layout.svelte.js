import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-63d23460.js";
var app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${""}">${``} 
  <nav class="${"flex justify-between border-0 flex-nowrap w-full backdrop-blur-md fixed z-50"}"><div class="${"flex justify-start"}"><a href="${"/"}" class="${"-translate-x z-50 flex flex-shrink-0 "}"><img src="${"/code1.png"}" height="${"40"}" width="${"45"}" alt="${"logo"}" class="${""}">
      <p class="${"inter scale-95 flex items-center whitespace-pre text-xl tracking-wider leading-6 text-gray-200 font-bold"}">Reynol Mart\xEDnez
      </p></a></div>
    <div class="${"flex justify-center"}"><button class="${["sticky hamburger hamburger--spring color-white", ""].join(" ").trim()}" type="${"button"}"><span class="${"hamburger-box"}"><span class="${"hamburger-inner"}"></span></span></button></div></nav>
      <div class="${["text-xl z-10 hidden fixed mx-auto w-full", "hidden"].join(" ").trim()}"><div class="${"flex items-center justify-center flex-wrap h-screen z-50 text-gray-200 font-light"}"><ul class="${"z-50 text-3xl tracking-wider text-gray-200 font-normal flex flex-col md:flex-row flex-wrap gap-y-6 gap-x-12"}"><li class="${"hover:scale-125 duration-75"}"><a href="${"/"}">Home</a></li>
          <li class="${"hover:scale-125 duration-7"}"><a href="${"/resume"}">Resume</a></li>
          <li class="${"hover:scale-125 duration-75"}"><a href="${"/articles"}">Articles</a></li>
          <li class="${"hover:scale-125 duration-75 "}"><a href="${"mailto:laraveowling@gmail.com"}" target="${"_blank"}">Contact me</a></li></ul></div></div></header>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Reyml" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<title>${escape(title)}</title>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"my-5 border-t-2 border-gray-900 h-16 bottom-0 left-0 right-0 relative flex justify-center flex-col gap-2 items-center flex-wrap w-full"}"><div class="${"text-center flex justify-center items-center text-slate-100"}"><p>\xA9 2022 Reyml</p></div>
  <div class="${"flex flex-row gap-2"}"><a href="${"https://twitter.com/_illidari"}" target="${"_blank"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"white"}" class="${"bi bi-twitter"}" viewBox="${"0 0 16 16"}"><path d="${"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}"></path></svg></a>
    <a href="${"https://github.com/ReyML"}" target="${"_blank"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"white"}" class="${"bi bi-github"}" viewBox="${"0 0 16 16"}"><path d="${"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}"></path></svg></a>
    <a href="${"https://t.me/Musashi_M"}" target="${"_blank"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"white"}" class="${"bi bi-telegram"}" viewBox="${"0 0 16 16"}"><path d="${"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}"></path></svg></a></div></footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${validate_component(Title, "Title").$$render($$result, {}, {}, {})}<link href="${"../app.css"}" rel="${"stylesheet"}" data-svelte="svelte-1iy6w1p"><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1iy6w1p"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1iy6w1p"><link href="${"https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk:wght@400;500;600;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1iy6w1p">`, ""}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"text-gray-100 space"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
