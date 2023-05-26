import azure from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: azure({
			customStaticWebAppConfig: {
				routes: [
					{
						"route": "/hire?/message",
						methods: ["POST"]
					},
					{
						"route": "/hire",
						methods: ["POST", "GET"]
					}
				]
			}
		}),
	}
};

export default config;
