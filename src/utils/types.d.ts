export type categories = {
    id: number
    slug: string // part of the URL slug
    title: string
    imageUrl: any
    description?: string
    height?: number
    width?: number
}

export type detailsArtwork = {
    id: number
    slug: string
    folder?: string
    title: string
    imageUrl: string
    description?: string
    year?: number
    price?: number
    sold?: boolean
}

export type dataCTA = {
    title: string
    description?: string
    venue: string
    date: string
    link?: string
}