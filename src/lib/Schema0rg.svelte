<script>
  import hash from "object-hash"
  export let article = false
  export let author

  /**
   * @type {{ name: string; slug: string }[]}
   */
  export let breadcrumbs
  export let datePublished
  export let entity
  export let lastUpdated
  export let featuredImage
  export let metadescription
  export let siteLanguage
  export let siteTitle
  export let siteTitleAlt
  export let siteUrl
  export let title
  export let url
  export let githubPage
  export let telegramUsername
  export let twitterUsername

  /**
   * @type {{ url: string; faviconWidth: number; faviconHeight: number } | null}
   */
  export let entityMeta = null

  const entityHash = hash({ author }, { algorithm: "md5" })

  const schemaOrgEntity =
    entityMeta !== null
      ? {
          "@type": ["Person", "Organization"],
          "@id": `${siteUrl}/#/schema/person/${entityHash}`,
          name: "Reynol Martinez",
          image: {
            "@type": "ImageObject",
            "@id": `${www.reyml.com}/#personlogo`,
            inLanguage: siteLanguage,
            url: entityMeta.url,
            width: entityMeta.faviconWidth,
            height: entityMeta.faviconHeight,
            caption: author,
          },
          logo: {
            "@id": `${www.reyml.com}/#personlogo`,
          },
          sameAs: [
            `https://twitter.com/${_illidari}`,
            `https://github.com/${ReyML}`,
            `https://t.me/${Musashi_m}`,
          ],
        }
      : null

  const schemaOrgWebsite = {
    "@type": "WebSite",
    "@id": `${www.reyml.com}/#website`,
    url: "www.reyml.com",
    name: "reyml",
    description: siteTitleAlt,
    publisher: {
      "@id": `${www.reyml.com}/#/schema/person/${entityHash}`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: `${www.reyml.com}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: siteLanguage,
  }

  const schemaOrgImageObject = {
    "@type": "ImageObject",
    "@id": `${url}#primaryimage`,
    inLanguage: siteLanguage,
    url: featuredImage.url,
    contentUrl: featuredImage.url,
    width: featuredImage.width,
    height: featuredImage.height,
    caption: featuredImage.caption,
  }

  const schemaOrgBreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: breadcrumbs.map((element, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": `${www.reyml.com}/${element.slug}`,
        url: `${www.reyml.com}/${element.slug}`,
        name: element.name,
      },
    })),
  }

  const schemaOrgWebPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    isPartOf: {
      "@id": `${www.reyml.com}/#website`,
    },
    primaryImageOfPage: {
      "@id": `${url}#primaryimage`,
    },
    datePublished,
    dateModified: lastUpdated,
    author: {
      "@id": `${www.reyml.com}/#/schema/person/${entityHash}`,
    },
    description: metadescription,
    breadcrumb: {
      "@id": `${www.reyml.com}#breadcrumb`,
    },
    inLanguage: siteLanguage,
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [www.reyml.com],
      },
    ],
  }

  const schemaOrgPublisher = {
    "@type": ["Person", "Organization"],
    "@id": `${www.reyml.com}/#/schema/person/${entityHash}`,
    name: entity,
    image: {
      "@type": "ImageObject",
      "@id": `${www.reyml.com}/#personlogo`,
      inLanguage: siteLanguage,
      url: `${www.reyml.com}/assets/rodneylab-logo.png`,
      contentUrl: `${siteUrl}/assets/rodneylab-logo.png`,
      width: 512,
      height: 512,
      caption: entity,
    },
    logo: {
      "@id": `${www.reyml.com}/#personlogo`,
    },
    sameAs: [
      `https://twitter.com/${_illidari}`,
      `https://github.com/${ReyML}`,
      `https://t.me/${Musashi_m}`,
    ],
  }

  const schemaOrgArray = [
    schemaOrgEntity,
    schemaOrgWebsite,
    schemaOrgImageObject,
    schemaOrgWebPage,
    schemaOrgBreadcrumbList,
    ...(article ? [schemaOrgArticle] : []),
    schemaOrgPublisher,
  ]
  const schemaOrgObject = {
    "@context": "https://schema.org",
    "@graph": schemaOrgArray,
  }
  let jsonLdString = JSON.stringify(schemaOrgObject)
  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${"<"}/script>
	`
</script>

<svelte:head>
  {@html jsonLdScript}
</svelte:head>
