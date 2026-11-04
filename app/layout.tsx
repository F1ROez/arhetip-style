import type {CSSProperties} from 'react';
import type { Metadata } from 'next';
import './globals.css';
const BASE=process.env.NEXT_PUBLIC_BASE_PATH||'';
const origin=process.env.NEXT_PUBLIC_SITE_URL||'https://f1roez.github.io/arhetip-style';
export const metadata:Metadata={
 metadataBase:new URL(origin+'/'),
 title:'Архетип стиля — семейные парикмахерские в Архангельске',
 description:'Женские, мужские и детские стрижки, окрашивание и уход за волосами. Три парикмахерские в Архангельске. Запись через Telegram и ВКонтакте.',
 alternates:{canonical:origin},
 icons:{icon:BASE+'/favicon.svg',shortcut:BASE+'/favicon.svg'},
 openGraph:{type:'website',locale:'ru_RU',url:origin,siteName:'Архетип стиля',title:'Архетип стиля — Ваш стиль. Ваш характер.',description:'Три семейные парикмахерские в Архангельске. Стрижки, цвет и уход. Запись через Telegram и ВКонтакте.',images:[{url:BASE+'/photos/05.jpg',width:1440,height:960,alt:'Команда парикмахерской «Архетип стиля»'}]},
 twitter:{card:'summary_large_image',title:'Архетип стиля — парикмахерские в Архангельске',images:[BASE+'/photos/05.jpg']}
};
const locations=[
 {id:'70000001033888235',street:'Воскресенская улица, 8',phone:'+79626622929',lat:64.539986,lon:40.525281,closes:'20:00'},
 {id:'70000001041311034',street:'проспект Ломоносова, 16 к1',phone:'+79642902929',lat:64.529787,lon:40.561697,closes:'20:00'},
 {id:'70000001067955701',street:'Московский проспект, 46',phone:'+79600039229',lat:64.531625,lon:40.615595,closes:'21:00'}
];
const structuredData={'@context':'https://schema.org','@graph':locations.map(location=>({
 '@type':'HairSalon','@id':origin+'/#branch-'+location.id,name:'Архетип стиля',url:origin,telephone:location.phone,image:origin+'/photos/05.jpg',
 address:{'@type':'PostalAddress',streetAddress:location.street,addressLocality:'Архангельск',addressCountry:'RU'},
 geo:{'@type':'GeoCoordinates',latitude:location.lat,longitude:location.lon},
 hasMap:'https://2gis.ru/arkhangelsk/firm/'+location.id,
 openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'10:00',closes:location.closes}]
}))};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru" style={{'--brand-mask':`url("${BASE}/brand-wordmark.png")`} as CSSProperties}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>{children}</body></html>}
