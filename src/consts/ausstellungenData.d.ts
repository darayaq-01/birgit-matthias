import type { categories } from '@utils/types.d.ts';

import abstract from '@assets/abstract.webp';
import auftragsarbeiten from '@assets/auftragsarbeiten.webp';
import landschaften from '@assets/landschaften.webp';
import menschen from '@assets/menschen.webp';
import stilleben from '@assets/stilleben.webp';
import halbabstrakt from '@assets/halbabstrakt.webp';

export const austellungenData: categories[] = [
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