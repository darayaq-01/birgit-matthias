import type { detailsArtwork } from '@utils/types.d.ts';

import familienaufstellung from '@assets/gallery/stilleben/Familienaufstellung-I-Sept.-2017-Acryl-auf-Leinwand-I-130x90.jpg';
import zitronenUndKürbis from '@assets/gallery/stilleben/Still-Zitronen-und-Kürbis-Okt.-2017-Aquarell.jpg';
import granatäpfel from '@assets/gallery/stilleben/Still-Granatäpfel-Jan.-2018-Tempera-auf-Pappe.jpg';
import äpfelUndTrauben from '@assets/gallery/stilleben/Still-Äpfel-und-Trauben-August-2018-Aquarell.jpg';

export const stillebenData: detailsArtwork[] = [
    {
        id: 1,
        slug: "familienaufstellung",
        title: "Familienaufstellung I",
        imageUrl: familienaufstellung,
        description: "",
        year: 2017,
        price: 0,
        sold: false,
        folder: "stilleben"
    },
    {
        id: 2,
        slug: "zitronenUndKürbis",
        title: "Still: Zitronen und Kürbis",
        imageUrl: zitronenUndKürbis,
        description: "",
        year: 2017,
        price: 0,
        sold: false,
        folder: "stilleben"
    },
    {
        id: 3,
        slug: "granatäpfel",
        title: "Still: Granatäpfel",
        imageUrl: granatäpfel,
        description: "",
        year: 2018,
        price: 0,
        sold: false,
        folder: "stilleben"
    },
    {
        id: 4,
        slug: "äpfelUndTrauben",
        title: "Still: Äpfel und Trauben",
        imageUrl: äpfelUndTrauben,
        description: "",
        year: 2018,
        price: 0,
        sold: false,
        folder: "stilleben"
    }
]

