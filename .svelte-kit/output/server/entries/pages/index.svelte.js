import { c as create_ssr_component, e as escape, b as add_attribute, a as each, d as spread, f as escape_object, v as validate_component } from "../../chunks/index-63d23460.js";
const MetaTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let updatedTitle;
  let { title = "" } = $$props;
  let { titleTemplate = "" } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { robotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = robotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTemplate === void 0 && $$bindings.titleTemplate && titleTemplate !== void 0)
    $$bindings.titleTemplate(titleTemplate);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.robotsProps === void 0 && $$bindings.robotsProps && robotsProps !== void 0)
    $$bindings.robotsProps(robotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  updatedTitle = titleTemplate ? titleTemplate.replace(/%s/g, title) : title;
  return `${$$result.head += `${$$result.title = `<title>${escape(updatedTitle)}</title>`, ""}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1v2a5gq"><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}${robotsParams}`, 0)} data-svelte="svelte-1v2a5gq">${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1v2a5gq">` : ``}${canonical ? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)} data-svelte="svelte-1v2a5gq">` : ``}${mobileAlternate ? `<link rel="${"alternate"}"${add_attribute("media", mobileAlternate.media, 0)}${add_attribute("href", mobileAlternate.href, 0)} data-svelte="svelte-1v2a5gq">` : ``}${languageAlternates && languageAlternates.length > 0 ? `${each(languageAlternates, (languageAlternate) => {
    return `<link rel="${"alternate"}"${add_attribute("hreflang", languageAlternate.hrefLang, 0)}${add_attribute("href", languageAlternate.href, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="${"twitter:card"}"${add_attribute("content", twitter.cardType, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.site ? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.handle ? `<meta name="${"twitter:creator"}"${add_attribute("content", twitter.handle, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)} data-svelte="svelte-1v2a5gq">` : ``}
    ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : ``}${facebook ? `<meta property="${"fb:app_id"}"${add_attribute("content", facebook.appId, 0)} data-svelte="svelte-1v2a5gq">` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-1v2a5gq">
      ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="${"profile:first_name"}"${add_attribute("content", openGraph.profile.firstName, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.profile.lastName ? `<meta property="${"profile:last_name"}"${add_attribute("content", openGraph.profile.lastName, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.profile.username ? `<meta property="${"profile:username"}"${add_attribute("content", openGraph.profile.username, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.profile.gender ? `<meta property="${"profile:gender"}"${add_attribute("content", openGraph.profile.gender, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${each(openGraph.book.authors, (author) => {
    return `<meta property="${"book:author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.book.isbn ? `<meta property="${"book:isbn"}"${add_attribute("content", openGraph.book.isbn, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.book.releaseDate ? `<meta property="${"book:release_date"}"${add_attribute("content", openGraph.book.releaseDate, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.book.tags && openGraph.book.tags.length ? `${each(openGraph.book.tags, (tag) => {
    return `<meta property="${"book:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.article.section ? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video.actors && openGraph.video.actors.length ? `${each(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="${"video:actor"}"${add_attribute("content", actor.profile, 0)} data-svelte="svelte-1v2a5gq">` : ``}
            ${actor.role ? `<meta property="${"video:actor:role"}"${add_attribute("content", actor.role, 0)} data-svelte="svelte-1v2a5gq">` : ``}`;
  })}` : ``}

        ${openGraph.video.directors && openGraph.video.directors.length ? `${each(openGraph.video.directors, (director) => {
    return `<meta property="${"video:director"}"${add_attribute("content", director, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.video.writers && openGraph.video.writers.length ? `${each(openGraph.video.writers, (writer) => {
    return `<meta property="${"video:writer"}"${add_attribute("content", writer, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.video.duration ? `<meta property="${"video:duration"}"${add_attribute("content", openGraph.video.duration.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.video.releaseDate ? `<meta property="${"video:release_date"}"${add_attribute("content", openGraph.video.releaseDate, 0)} data-svelte="svelte-1v2a5gq">` : ``}

        ${openGraph.video.tags && openGraph.video.tags.length ? `${each(openGraph.video.tags, (tag) => {
    return `<meta property="${"video:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}

        ${openGraph.video.series ? `<meta property="${"video:series"}"${add_attribute("content", openGraph.video.series, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : ``}`}`}`}` : ``}

    ${openGraph.title || updatedTitle ? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title || updatedTitle, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.description || description ? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description || description, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-1v2a5gq">
        ${image.alt ? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}`;
  })}` : ``}

    ${openGraph.videos && openGraph.videos.length ? `${each(openGraph.videos, (video) => {
    return `<meta property="${"og:video"}"${add_attribute("content", video.url, 0)} data-svelte="svelte-1v2a5gq">
        ${video.alt ? `<meta property="${"og:video:alt"}"${add_attribute("content", video.alt, 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.width ? `<meta property="${"og:video:width"}"${add_attribute("content", video.width.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.height ? `<meta property="${"og:video:height"}"${add_attribute("content", video.height.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.secureUrl ? `<meta property="${"og:video:secure_url"}"${add_attribute("content", video.secureUrl.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}
        ${video.type ? `<meta property="${"og:video:type"}"${add_attribute("content", video.type.toString(), 0)} data-svelte="svelte-1v2a5gq">` : ``}`;
  })}` : ``}

    ${openGraph.locale ? `<meta property="${"og:locale"}"${add_attribute("content", openGraph.locale, 0)} data-svelte="svelte-1v2a5gq">` : ``}

    ${openGraph.site_name ? `<meta property="${"og:site_name"}"${add_attribute("content", openGraph.site_name, 0)} data-svelte="svelte-1v2a5gq">` : ``}` : ``}${additionalMetaTags && additionalMetaTags.length > 0 ? `${each(additionalMetaTags, (tag) => {
    return `<meta${spread([escape_object(tag)], {})} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}${(additionalLinkTags == null ? void 0 : additionalLinkTags.length) ? `${each(additionalLinkTags, (tag) => {
    return `<link${spread([escape_object(tag)], {})} data-svelte="svelte-1v2a5gq">`;
  })}` : ``}`, ""}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#parallax.svelte-b2zq1n{width:100%;height:94vh}.background.svelte-b2zq1n{position:absolute;display:block;top:0;left:0;z-index:0}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Reynol Mart\xEDnez</title>`, ""}<link rel="${"canonical"}" href="${"https://reyml.com"}" data-svelte="svelte-1mir6p6"><script src="${"https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"}" data-svelte="svelte-1mir6p6"><\/script>`, ""}

${validate_component(MetaTags, "MetaTags").$$render($$result, {
    title: "Reynol Mart\xEDnez",
    titleTemplate: "%s | Reynol Mart\xEDnez",
    description: "I\u2019m a developer working on Front-end for the moment",
    canonical: "https://www.reyml.com/",
    openGraph: {
      url: "https://www.reyml.com/",
      title: "Reynol Mart\xEDnez",
      description: "Front-end Developer",
      images: [
        {
          url: "https://www.reyml.com/triforce.png",
          width: 800,
          height: 600,
          alt: "Og Image Alt"
        },
        {
          url: "https://www.reyml.com/triforce.png",
          width: 900,
          height: 800,
          alt: "Og Image Alt Second"
        },
        {
          url: "https://www.reyml.com/triforce.png"
        },
        {
          url: "https://www.reyml.com/triforce.png"
        }
      ],
      site_name: "Reyml"
    },
    twitter: {
      handle: "@reyml.com",
      site: "@reyml.com",
      cardType: "summary_large_image",
      title: "Reyml | Reynol Martinez",
      description: "I\u2019m a developer working on Front-end for the moment",
      image: "https://www.reyml.com/code1.png",
      imageAlt: "Twitter image alt"
    },
    robotsProps: {
      noarchive: true,
      nosnippet: true,
      maxSnippet: -1,
      maxImagePreview: "none",
      maxVideoPreview: -1,
      notranslate: true,
      noimageindex: true,
      unavailableAfter: "25 Jun 2010 15:00:00 PST"
    }
  }, {}, {})}

<div class="${"border-0"}"><div id="${"parallax"}" class="${"flex justify-center items-center  svelte-b2zq1n"}"><div class="${"flex flex-col gap-y-5 -translate-y-2 text-white rounded-md"}"><div class="${"max-w-sm md:max-w-lg mx-8 py-4 px-2 z-50 rounded-lg my-20"}"><div class="${"flex justify-center md:justify-end -mt-16"}"><img alt="${"profile pic"}" class="${"w-20 h-20 object-cover rounded-full border-2 border-indigo-500"}" src="${"/me1.jpg"}"></div>
        <div class="${"tracking-wider "}"><h2 class="${["text-gray-300 text-3xl font-semibold inter active", "is-active"].join(" ").trim()}">About Me
          </h2>
          <p class="${"mt-2 md:text-gray-400"}">I am a creative developer, who aims to work with small businesses
            and communities to bring their passions to life. I offer development
            services of web applications or websites!
          </p></div></div></div></div></div>

<canvas class="${"background svelte-b2zq1n"}"></canvas>

<section class="${"bg-section sm:py-16 md:py-24 flex justify-center mx-8 md:-translate-y-12 -translate-y-16"}"><div class="${"container animatable"}" id="${"projects"}" style="${"animation-play-state: running;"}"><div class="${"flex flex-col items-center w-full max-w-7xl m-auto"}"><h2 class="${"bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl inter p-2 toProjects activee"}">Projects
      </h2>
      <div class="${"flex flex-col items-center w-full mt-8"}"><div class="${"lg:mx-56 my-2"}"><a href="${"https://urbanemoji.info"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"shadow-pink-500 flex h-52 md:h-72 justify-center items-center rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2"}"><div class="${"flex flex-col max-w-2xl justify-center items-start mt-4 px-5"}"><p class="${"text-gray-400 flex font-mono"}">Javascript</p>
              <h2 class="${"text-gray-400 text-xl sm:text-3xl font-bold font-heading text-center sm:text-left"}">UrbanEmoji
              </h2>
              <p class="${"text-gray-500 tracking-wider text-md sm:text-lg md:text-xl space mt-2"}">The fastest way to get an Emoji combo or phrase. Just type and
                search, from movies, meme, songs, anime, popular phrases and
                much more, try it!.
              </p></div></a></div></div></div></div>
</section>`;
});
export { Routes as default };
