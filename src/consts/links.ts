import Facebook from '@assets/UI/Facebook_logo-mod.svg';
import Instagram from '@assets/UI/Instagram_logo-mod.svg';

export const links = [
    {
        name: 'Impressum',
        url: '/impresum',
    },
    {
        name: 'Datenschutz',
        url: '/datenschutz',
    },
    {
        name: 'Facebook',
        url: '/',
        imgSrc: Facebook.src,
        imgHeight: Facebook.height,
        alt: 'Logo Facebook',
    },
    {
        name: 'Instagram',
        url: '/',
        imgSrc: Instagram.src,
        imgHeight: Instagram.height,
        alt: 'Logo Instagram',
    },
];