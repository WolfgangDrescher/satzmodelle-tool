import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        pieces: defineCollection({
            source: 'satzmodelle/*.yaml',
            type: 'data',
            schema: z.object({
                title: z.string(),
                tags: z.array(z.string())
                scorePath: z.string(),
            }),
        }),
    },
});