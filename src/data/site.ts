export interface SiteData {
  artistName: string
  email: string
  instagram: string
  aboutText: string
  artistStatement: string
  heroImages: string[]
  aboutImage: string
}

export const siteData: SiteData = {
  artistName: 'Elisey H',
  email: 'taleroners@gmail.com',
  instagram: 'https://instagram.com/elis_paint_',
  aboutText: `Художник на стыке граффити и фактурной живописи`,
  artistStatement: `Мои работы рождаются на стыке уличной энергетики и камерной работы в мастерской.
Я беру язык граффити — шрифт, ритм, яркость — и замедляю его, пропуская через личные темы дружбы, взросления и поиска себя.

Для меня граффити — это состояние юношеской открытости. На холсте этот «райтер» учится говорить не с городом, а с конкретным зрителем — искать не ярлык, а диалог.

Мои работы — это пересечение уличной дерзости и искренности личного дневника.
`,
  heroImages: [
    '/images/works/vramke.webp',
    '/images/works/tihiy.webp',
    '/images/works/prisutstvie.webp',
    '/images/works/linia.webp',
    '/images/works/nemoi.webp',
    '/images/works/paranoia.webp',
    '/images/works/Sloeniy.webp',
    '/images/works/real.webp',
    '/images/works/shepot.webp',
    '/images/works/zakrtiy.webp',
    '/images/works/dirty.webp',
    '/images/works/alttab.webp',
    '/images/series/dophamine.webp',
    '/images/series/kuski.webp',
    '/images/series/granica2.webp',
    '/images/series/otgoloski1.webp',
    '/images/series/preodolenir.webp',
    '/images/series/GRANICA1.webp',
    '/images/series/otgoloski.webp'
  ],
  aboutImage: '/images/about/im.jpg'
}
