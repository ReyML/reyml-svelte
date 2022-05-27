export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","code1.png","me1.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"start-0bd981bd.js","js":["start-0bd981bd.js","chunks/index-6f1d4f7a.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "sitemap.xml",
				pattern: /^\/sitemap\.xml$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/sitemap.xml.js')
			},
			{
				type: 'page',
				id: "articles",
				pattern: /^\/articles\/?$/,
				names: [],
				types: [],
				path: "/articles",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "resume",
				pattern: /^\/resume\/?$/,
				names: [],
				types: [],
				path: "/resume",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
