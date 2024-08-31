import { defineCollection, z } from 'astro:content';

export const collections = {
	posts: defineCollection({
		type: 'data',
		schema: ({ image }) =>
			z.object({
				caption: z.string(),
				date: z.coerce.date(),
				images: z.array(image()),
			}),
	}),
};
