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

const ausstellungenDescription = defineCollection({
    schema: () =>
        z.object({
            title1: z.string().optional(),
            description1: z.string().optional(),
            title2: z.string().optional(),
            description2: z.string().optional(),
            imageUrl: z.string().optional(),
            imageAlt: z.string().optional(),
        })
})


const description = defineCollection({
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            description: z.string().optional(),
        })
})

export const collections = { presse, ausstellungen, collectionImages, events, ausstellungenDescription, description }
