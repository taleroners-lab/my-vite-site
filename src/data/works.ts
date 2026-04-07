export interface Work {
  slug: string
  title: string
  year: number
  size: string
  medium: string
  image: string
  description?: string
  status?: 'available' | 'sold'
  seriesOnly?: boolean
}

export const works: Work[] = [
  {
    slug: 'В-РАМКЕ',
    title: 'В-РАМКЕ',
    year: 2025,
    size: '60 × 40 cm',
    medium: 'Акрил, Аэрозоль',
    image: '/images/works/vramke.webp',
    description: 'Тяжесть рамки словно удерживает безмолвие, не позволяя взгляду найти выход.',
    status: 'available'
  },
  {
    slug: 'ПРИСУТСТВИЕ-ОТСУТСТВИЯ',
    title: 'ПРИСУТСТВИЕ-ОТСУТСТВИЯ',
    year: 2025,
    size: '44 × 64 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/prisutstvie.webp',
    description: 'Когда все вокруг слишком правильно, предсказуемо и гладко - появляется "он". Глюк восприятия. Сбой системы. Случайная красота в хаосе. Пусть будет меньше фильтров и больше глюков. Именно в них настоящее.',
    status: 'available'
  },
  {
    slug: 'ЛИНИЯ МЕЖДУ',
    title: 'ЛИНИЯ МЕЖДУ',
    year: 2025,
    size: '58 × 78 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/linia.webp',
    description: 'Иногда злишься на свою бесполезность, а потом просто… принимаешь это. Эта полоса — граница между двумя состояниями',
    status: 'available'
  },
  {
    slug: 'ТИХИЙ КРИК',
    title: 'ТИХИЙ КРИК',
    year: 2025,
    size: '70 × 50 cm',
    medium: 'Акрил, Аэрозоль',
    image: '/images/works/tihiy.webp',
    description: 'Эта работа отражает попытку спрятать внутреннюю боль за лёгкой, почти небрежной фразой "Nevermind" — «Неважно», «Забей». Грубые мазки, подтеки краски и наложенные пластыри на буквах символизируют скрытые раны, которые мы маскируем, говоря, что всё в порядке.',
    status: 'available'
  },
  {
    slug: 'НЕМОЙ ДИАЛОГ',
    title: 'НЕМОЙ ДИАЛОГ',
    year: 2024,
    size: '240 × 120 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/works/nemoi.webp',
    description: 'Почему вас так пугает граффити?Почему безликая серость не вызывает у вас эмоций, но случайные буквы, вписанные в городской пейзаж, приводят в ярость? Почему вы видите в этом только хаос, а не попытку выразить себя?',
    status: 'available'
  },
  {
    slug: 'ПАРАНОЙЯ',
    title: 'ПАРАНОЙЯ',
    year: 2023,
    size: '70 × 50 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/paranoia.webp',
    description: 'Если тебе кажется, что тебя она обошла стороной - значит твоя паранойя на месте .',
    status: 'available'
  },
  {
    slug: 'СЛОЁНЫЙ ТОРТ',
    title: 'СЛОЁНЫЙ ТОРТ',
    year: 2023,
    size: '80 × 60 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/Sloeniy.webp',
    description: '"Эта работа - размышление о нашей жизни в вечной спешке: мы замазываем трещины прошлого яркими мазками, скрываем неудачи броскими красками, но граффити, как и жизнь, не вечно — оно трескается и осыпается. Финал открыт: под слоями краски может оказаться чистая стена — шанс начать сначала — или лишь бледный набросок несбывшегося.',
    status: 'available'
  },
  {
    slug: 'RD',
    title: 'RD',
    year: 2023,
    size: '80 × 60 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/real.webp',
    description: '',
    status: 'available'
  },
  {
    slug: 'ШЁПОТ БЕТОНА',
    title: 'ШЁПОТ БЕТОНА',
    year: 2025,
    size: '30 × 40 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/shepot.webp',
    description: 'Цензура — временнаяИдея — уличная. Выход — всегда найдётся.',
    status: 'available'
  },
  {
    slug: 'ЗАКРЫТЫЙ КОНТУР',
    title: 'ЗАКРЫТЫЙ КОНТУР',
    year: 2026,
    size: '100 × 60 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/zakrtiy.webp',
    description: 'Здесь нет агрессии — есть режим защиты. Нет конфликта — есть дистанция. Нет запроса на одобрение. Это не оборона от мира. Это отказ пускать в своё пространство то, что его искажает.',
    status: 'available'
  },
  {
    slug: 'ГРЯЗНЫЕ ДЕЛА',
    title: 'ГРЯЗНЫЕ ДЕЛА',
    year: 2023,
    size: '70 × 50 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/dirty.webp',
    description: 'Это не граффити. Это исповедь под принуждением. Одни носят свои грязные дела глубоко внутри – и они разъедают их, как кислота. Другие бросают правду в лицо городу - мажут её по стенам, как дешёвую краску. Стена всегда знает правду. Она просто ждёт, когда её закрасят в очередной раз',
    status: 'available'
  },
  {
    slug: 'ALT-TAB',
    title: 'ALT-TAB',
    year: 2026,
    size: '80 × 60 cm',
    medium: 'акрил, аэрозольная краска',
    image: '/images/works/alttab.webp',
    description: '',
    status: 'available'
  },
  {
    slug: 'ДОФАМИНОВАЯ ЯМА',
    title: 'ДОФАМИНОВАЯ ЯМА',
    year: 2024,
    size: '120 × 80 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/dophamine.webp',
    description: 'Самая противоречивая тема взросления- желание испробовать всё. Тогда о последствиях не думаешь. Жизнь состоит не из планов на будущее, а из настоящего момента. Главное- оставить это в том этапе, а не тащить за собой.',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'ТРАГЕДИЯ',
    title: 'ТРАГЕДИЯ',
    year: 2024,
    size: '120 × 80 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/tragedy.webp',
    description: 'Яркие, контрастные цвета, символизирующие те самые взрывные ощущения первой влюбленности. Массивные как шрифт на картине, псевдовзрослые эмоции. Дрожь, неловкость и немного сумашествия Всего мира мало, чтобы вместить твои чувства в этот неповторимый период Зрелость, конечно, эти все карусели победит, но воспоминания останутся',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'ПРЕОДОЛЕНИЕ ПЕРВОГО ПОРОГА',
    title: 'ПРЕОДОЛЕНИЕ ПЕРВОГО ПОРОГА',
    year: 2024,
    size: '120 × 80 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/preodolenir.webp',
    description: 'В моменте приходит осознание то что в этом мире ты НИКТО Кажется что ты ничего не добился и не добьешься. Тебя никто не видит, не замечает, ты один на один с неизбежным принятием себя.',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'КУСКИ',
    title: 'КУСКИ',
    year: 2024,
    size: '70 × 50 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/kuski.webp',
    description: 'Подростковая дружба родившаяся в увлечении уличным искусством и сохранившая себя через десятилетия',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'Граница-2',
    title: 'Граница тишины II',
    year: 2024,
    size: '100 × 60 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/granica2.webp',
    description: 'Часть 2 серии',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'Граница-3',
    title: 'Граница тишины III',
    year: 2024,
    size: '100 × 60 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/granica3.webp',
    description: 'Часть 3 серии',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'Отголоски присутствия 1',
    title: 'Отголоски присутствия 1',
    year: 2025,
    size: '190 × 85 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/otgoloski1.webp',
    description: 'Часть 3 серии',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'Отголоски присутствия 2',
    title: 'Отголоски присутствия 2',
    year: 2025,
    size: '170 × 80 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/otgoloski2.webp',
    description: 'Часть 3 серии',
    status: 'available',
    seriesOnly: true
  },
  {
    slug: 'Отголоски присутствия 3',
    title: 'Отголоски присутствия 3',
    year: 2025,
    size: '190 × 85 cm',
    medium: 'акрил, аэрозоль',
    image: '/images/series/otgoloski3.webp',
    description: 'Часть 3 серии',
    status: 'available',
    seriesOnly: true
  }
]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find(work => work.slug === slug)
}

export function getWorksForGallery(): Work[] {
  return works.filter(work => !work.seriesOnly)
}
