import { defineCollection, z } from 'astro:content'
import { version } from 'typescript'

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
            slug: z.string().optional(),
            description: z.string().optional(),
            category: z.string(),
            price: z.number().optional(),
            sold: z.boolean().optional(),
            year: z.number().optional(),
            imageUrl: z.string().optional(),
            imageAlt: z.string().optional()
        })
})

const events = defineCollection({
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            venue: z.string().optional(),
            dateEvent: z.string(),
            description: z.string().optional(),
            linkEvent: z.string().optional(),
            active: z.boolean().default(() => true),
        })
})

export const collections = { presse, ausstellungen, collectionImages, events }
