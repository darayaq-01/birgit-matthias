import { getCollection, type CollectionEntry } from 'astro:content';

// Tipos de colecciones de galerías - usar 'any' para las keys y luego castear
type GalleryCollectionName =
    | 'gallery_gegenstaendlich'
    | 'gallery_abstrakt'
    | 'gallery_halbabstrakt'
    | 'gallery_startseite';

// Usar CollectionEntry con las strings directas
type GalleryEntry =
    | CollectionEntry<'gallery_gegenstaendlich'>
    | CollectionEntry<'gallery_abstrakt'>
    | CollectionEntry<'gallery_halbabstrakt'>
    | CollectionEntry<'gallery_startseite'>;

const GALLERY_COLLECTIONS = [
    'gallery_gegenstaendlich',
    'gallery_abstrakt',
    'gallery_halbabstrakt',
    'gallery_startseite'
] as const;

/**
 * Obtiene todas las imágenes de todas las galerías
 */
export async function getAllGalleryImages(): Promise<GalleryEntry[]> {
    const collections = await Promise.all([
        getCollection('gallery_gegenstaendlich'),
        getCollection('gallery_abstrakt'),
        getCollection('gallery_halbabstrakt'),
        getCollection('gallery_startseite')
    ]);

    return collections.flat() as GalleryEntry[];
}

/**
 * Obtiene todas las imágenes excluyendo startseite
 */
export async function getMainGalleryImages(): Promise<GalleryEntry[]> {
    const allImages = await getAllGalleryImages();
    return allImages.filter(entry => entry.data.category !== 'startseite');
}

/**
 * Obtiene imágenes de una categoría específica
 */
export async function getImagesByCategory(category: string): Promise<GalleryEntry[]> {
    switch (category.toLowerCase()) {
        case 'gegenstaendlich':
            return (await getCollection('gallery_gegenstaendlich')) as GalleryEntry[];
        case 'abstrakt':
            return (await getCollection('gallery_abstrakt')) as GalleryEntry[];
        case 'halbabstrakt':
            return (await getCollection('gallery_halbabstrakt')) as GalleryEntry[];
        case 'startseite':
            return (await getCollection('gallery_startseite')) as GalleryEntry[];
        default:
            return [];
    }
}

/**
 * Obtiene una imagen específica por slug y categoría
 */
export async function getImageBySlug(category: string, slug: string): Promise<GalleryEntry | undefined> {
    const images = await getImagesByCategory(category);
    return images.find(img => img.slug === slug);
}

/**
 * Obtiene imágenes de una serie específica
 */
export async function getSeriesImages(category: string, seriesId: string): Promise<GalleryEntry[]> {
    const images = await getImagesByCategory(category);
    return images
        .filter(img => img.data.seriesId === seriesId)
        .sort((a, b) => a.data.sortOrder - b.data.sortOrder);
}

/**
 * Obtiene la imagen de portada de una serie
 */
export async function getSeriesCoverImage(category: string, seriesId: string): Promise<GalleryEntry | undefined> {
    const images = await getImagesByCategory(category);
    return images.find(
        img => img.data.seriesId === seriesId && img.data.isSeriesCover
    );
}

/**
 * Extrae el nombre de categoría desde el nombre de la colección
 */
export function getCategoryFromCollection(collectionName: string): string {
    return collectionName.replace('gallery_', '');
}

/**
 * Obtiene todas las series únicas por categoría
 */
export async function getAllSeriesByCategory(category: string): Promise<string[]> {
    const images = await getImagesByCategory(category);
    const seriesIds = new Set(
        images
            .filter(img => img.data.seriesId)
            .map(img => img.data.seriesId!)
    );
    return Array.from(seriesIds);
}