import type { categories } from '@utils/types.d.ts';

import abstract from '@assets/werke-section/Landscape-rot-Okt.-2017-Acryl-auf-Leinwand-130x90.webp';
import auftragsarbeiten from '@assets/werke-section/Porthleven.webp';
import landschaften from '@assets/werke-section/Japanischer-Winter-648x448.webp';
import menschen from '@assets/werke-section/Portrait-768x1024.webp';
import stilleben from '@assets/werke-section/Still-Granatäpfel-Jan.-2018-Tempera-auf-Pappe.webp';
import halbabstrakt from '@assets/werke-section/Early-Spring-Japanische-Frühling.webp';

export const werkeData: categories[] = [
    {
        id: 1,
        slug: "abstrakte-malerei",
        title: "Abstrakte Malerei",
        imageUrl: abstract,
        description: "Nice abstract painting"
    },
    {
        id: 2,
        slug: "auftragsarbeiten",
        title: "Auftragsarbeiten",
        imageUrl: auftragsarbeiten,
        description: "Nice realistic painting"
    },
    {
        id: 3,
        slug: "landschaften",
        title: "Landschaften",
        imageUrl: landschaften,
        description: "Nice landscape painting"
    },
    {
        id: 4,
        slug: "menschen",
        title: "Menschen",
        imageUrl: menschen,
        description: "Nice people painting"
    },
    {
        id: 5,
        slug: "stilleben",
        title: "Stilleben",
        imageUrl: stilleben,
        description: "Nice still life painting"
    },
    {
        id: 6,
        slug: "halbabstrakt",
        title: "Halbabstrakt",
        imageUrl: halbabstrakt,
        description: "Nice half abstract painting"
    }
]