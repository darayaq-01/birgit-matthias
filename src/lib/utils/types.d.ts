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
    imgSrc?: any;
    imgHeight?: number;
    alt?: string;
}

declare namespace Dato {
    type Video = {
        mp4Url?: string;
        muxAssetId?: string;
        streamingUrl: string;
        muxPlaybackId: string;
    };

    type VideoSection = {
        videoSection: {
            videoArtist: {
                video: Video;
            };
        };
    };
}