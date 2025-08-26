import type { categories } from '@utils/types.d.ts';

import abstract from '@assets/werke-section/Landscape-rot-Okt.-2017-Acryl-auf-Leinwand-130x90.webp';
import landschaften from '@assets/werke-section/Japanischer-Winter-648x448.webp';
import halbabstrakt from '@assets/werke-section/Early-Spring-Japanische-Frühling.webp';

export const werkeData: categories[] = [
    {
        id: 1,
        slug: "abstrakt",
        title: "Abstrakt",
        imageUrl: abstract,
        description: "Nice abstract painting"
    },
    {
        id: 2,
        slug: "halbabstrakt",
        title: "Halbabstrakt",
        imageUrl: halbabstrakt,
        description: "Nice half abstract painting"
    },
    {
        id: 3,
        slug: "gegenstaendlich",
        title: "Gegenständlich",
        imageUrl: landschaften,
        description: "Nice landscape painting"
    },
]