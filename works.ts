export interface Work {
  slug: string
  title: string
  year: number
  size: string
  medium: string
  image: string
  description?: string
  status?: 'available' | 'sold'
}

export const works: Work[] = [
  {
    slug: 'В-РАмке',
    title: 'В-РАмке',
    year: 2025,
    size: '60 × 40 cm',
    medium: 'Акрил, Аэрозоль',
    image: '/images/works/vramke.jpg',
    description: 'Тяжесть рамки словно удерживает безмолвие, не позволяя взгляду найти выход.',
    status: 'available'
  },
  {
    slug: 'urban-silence',
    title: 'Urban Silence',
    year: 2024,
    size: '120 × 80 cm',
    medium: 'Acrylic on canvas',
    image: '/images/works/work-2.jpg',
    description: 'An exploration of stillness within the urban landscape. Empty streets at dawn, when the city holds its breath before the day begins.',
    status: 'available'
  },
  {
    slug: 'autumn-reflections',
    title: 'Autumn Reflections',
    year: 2023,
    size: '90 × 70 cm',
    medium: 'Oil on canvas',
    image: '/images/works/work-3.jpg',
    description: 'The mirror-like surface of a forest pond reflects the golden canopy above. A meditation on nature\'s perfect symmetry.',
    status: 'sold'
  },
  {
    slug: 'passage-of-time',
    title: 'Passage of Time',
    year: 2023,
    size: '100 × 120 cm',
    medium: 'Mixed media on canvas',
    image: '/images/works/work-4.jpg',
    description: 'Layers of translucent color build upon each other, creating depth and dimension. The work explores how moments accumulate into memory.',
    status: 'available'
  },
  {
    slug: 'silent-garden',
    title: 'Silent Garden',
    year: 2023,
    size: '60 × 80 cm',
    medium: 'Oil on canvas',
    image: '/images/works/work-5.jpg',
    description: 'A walled garden at twilight, where nature and human cultivation coexist in peaceful harmony. The play of light and shadow creates a sense of enclosure and contemplation.',
    status: 'available'
  },
  {
    slug: 'winter-morning',
    title: 'Winter Morning',
    year: 2022,
    size: '70 × 90 cm',
    medium: 'Acrylic on canvas',
    image: '/images/works/work-6.jpg',
    description: 'Fresh snow blankets the landscape in pristine white. Bare trees cast delicate shadows across the frozen ground, capturing the quiet beauty of winter.',
    status: 'sold'
  },
  {
    slug: 'coastal-dream',
    title: 'Coastal Dream',
    year: 2022,
    size: '100 × 80 cm',
    medium: 'Oil on canvas',
    image: '/images/works/work-7.jpg',
    description: 'Where land meets sea, a misty atmosphere blurs the boundaries. The horizon dissolves into soft grays and blues.',
    status: 'available'
  },
  {
    slug: 'forgotten-corner',
    title: 'Forgotten Corner',
    year: 2022,
    size: '80 × 60 cm',
    medium: 'Mixed media on canvas',
    image: '/images/works/work-8.jpg',
    description: 'An abandoned courtyard reclaimed by nature. Ivy climbs weathered walls, and wildflowers bloom in cracks of stone.',
    status: 'available'
  }
]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find(work => work.slug === slug)
}
