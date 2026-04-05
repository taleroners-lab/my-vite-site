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
    '/images/works/vramke.png',
    '/images/works/tihiy.jpg',
    '/images/works/prisutstvie.jpg',
    '/images/works/linia.jpg',
    '/images/works/nemoi.jpg',
    '/images/works/paranoia.jpg',
    '/images/works/Sloeniy.jpg',
    '/images/works/real.jpg',
    '/images/works/shepot.jpg',
    '/images/works/zakrtiy.jpg',
    '/images/works/dirty.jpg',
    '/images/works/dophamine.jpg',
    '/images/works/kuski.jpg',
    '/images/works/granica2.jpg',
    '/images/works/otgoloski1.jpg',
  ],
  aboutImage: '/images/about/im.jpg'
}
