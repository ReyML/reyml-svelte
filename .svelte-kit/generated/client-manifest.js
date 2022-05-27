export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/articles/[slug].svelte"),
	() => import("../../src/routes/articles/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/resume.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"articles": [[0, 3], [1]],
	"resume": [[0, 5], [1]],
	"articles/[slug]": [[0, 2], [1]]
};