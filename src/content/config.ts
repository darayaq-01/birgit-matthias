import { defineCollection, z } from 'astro:content'

const presse = defineCollection({
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            category: z.string(),
            description: z.string().optional(),
            // Transform string to Date object
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            updatedDate: z
                .string()
                .optional()
                .transform((str) => (str ? new Date(str) : undefined)),
            cover: image(),
            coverAlt: z.string().optional(),
            link: z.string().optional(),
        })
})



const ausstellungen = defineCollection({
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            category: z.string(),
            description: z.string().optional(),
            // Transform string to Date object
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            updatedDate: z
                .string()
                .optional()
                .transform((str) => (str ? new Date(str) : undefined)),
            cover: image().optional(),
            coverAlt: z.string().optional()
        })
})
export const collections = { presse, ausstellungen }
