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
            cover: image().refine((img) => img.width >= 100, {
                // change to the actual minimum width
                message: 'Cover image must be at least 1080 pixels wide!'
            }),
            coverAlt: z.string(),
            link: z.string(),
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
            cover: image().refine((img) => img.width >= 100, { // change to the actual minimum width
                message: 'Cover image must be at least 1080 pixels wide!'
            }),
            coverAlt: z.string()
        })
})
export const collections = { presse, ausstellungen }
