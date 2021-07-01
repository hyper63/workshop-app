import sveltePreprocess from "svelte-preprocess"

const config = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss"
			},
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
