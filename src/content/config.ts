import { defineCollection, z } from 'astro:content'

const presse = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            title: z.string(),
            category: z.string().optional(),
            description: z.string().optional(),
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
    type: "content",
    schema: () =>
        z.object({
            title: z.string(),
            category: z.string(),
            description: z.string().optional(),
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
    schema: () =>
        z.object({
            title: z.string(),
            sortOrder: z.number().default(0),
            description: z.string().optional(),
            category: z.string()
                .transform(val => val.toLowerCase().trim())
                .pipe(z.enum(['gegenstaendlich', 'abstrakt', 'halbabstrakt', 'startseite'])),
            price: z.number().optional(),
            sold: z.boolean().optional(),
            year: z.number().optional(),
            imageUrl: z.string(),
            imageAlt: z.string(),
            seriesId: z.string().optional(),
            isSeriesCover: z.boolean().default(false),
        })
})

const events = defineCollection({
    schema: () =>
        z.object({
            title: z.string(),
            venue: z.string().optional(),
            dateEvent: z.string(),
            description: z.string().optional(),
            linkEvent: z.string().optional(),
            active: z.boolean().default(true),
        })
})

const ausstellungenDescription = defineCollection({
    schema: () =>
        z.object({
            title1: z.string(),
            description1: z.string().optional(),
            title2: z.string().optional(),
            description2: z.string().optional(),
            imageUrl: z.string().optional(),
            imageAlt: z.string().optional(),
        })
})

const description = defineCollection({
    schema: () =>
        z.object({
            description: z.string(),
        })
})

const uebermich = defineCollection({
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            imageUrl: z.string().optional(),
            imageAlt: z.string().optional(),
        })
})

const video = defineCollection({
    schema: () =>
        z.object({
            title: z.string(),
            videoUrl: z.string(),
            captionsUrl: z.string().optional(),
        })
})

const gdpr = defineCollection({
    type: "content",
    schema: z.object({
        contactList: z.array(z.string()).optional(),
        contactMedia: z.array(z.string()).optional(),
    }),
})

const hero = defineCollection({
    schema: z.object({
        imageUrl: z.string(),
        imageAlt: z.string()
    }),
})

export const collections = {
    presse,
    ausstellungen,
    collectionImages,
    events,
    ausstellungenDescription,
    description,
    uebermich,
    video,
    gdpr,
    hero
}