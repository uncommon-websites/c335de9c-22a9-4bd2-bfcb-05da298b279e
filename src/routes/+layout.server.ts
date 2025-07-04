// Types
import { CONFIG } from "$lib/content";

export const load = async () => {
	return {
		meta: {
			title: CONFIG.companyName,
			description: CONFIG.description,
			image: CONFIG.image,
			url: CONFIG.url,
			companyName: CONFIG.companyName
		}
	};
};
