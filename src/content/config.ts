import { defineCollection, z } from 'astro:content'

const presse = defineCollection({
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            category: z.string(),
            description: z.string().optional(),
            // Transform string to Date object
            pubDate: z
                .union([z.string(), z.date()])
                .optional()
                .transform((val) => (val ? new Date(val) : undefined)),
            updatedDate: z
                .union([z.string(), z.date()])
                .optional()
                .transform((val) => (val ? new Date(val) : undefined)),
            cover: z.string().optional(),
            coverAlt: z.string().optional(),
            link: z.string().optional(),
        })
})



const ausstellungen = defineCollection({
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            category: z.string(),
            description: z.string().optional(),
            // Transform string to Date object
            pubDate: z
                .union([z.string(), z.date()])
                .optional()
                .transform((val) => (val ? new Date(val) : undefined)),
            updatedDate: z
                .union([z.string(), z.date()])
                .optional()
                .transform((val) => (val ? new Date(val) : undefined)).optional(),
            cover: z.string().optional(),
            coverAlt: z.string().optional()
        })
})

const collectionImages = defineCollection({
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            slug: z.string(),
            description: z.string().optional(),
            category: z.string(),
            price: z.number().optional(),
            sold: z.boolean().optional(),
            year: z.number().optional(),
            imageUrl: z.string().optional(),
            imageAlt: z.string().optional()
        })
})
export const collections = { presse, ausstellungen, collectionImages }
