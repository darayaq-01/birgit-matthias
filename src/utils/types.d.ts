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
    imageUrl: any
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

export type linksTypes = {
    name: string;
    url: string;
    imgSrc?: string;
    imgHeight?: number;
    alt?: string;
}