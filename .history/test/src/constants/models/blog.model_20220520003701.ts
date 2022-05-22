interface Blog {
  id: number
  title: string
  content: string
  image: Image
  created_at: string
  updated_at: string
  comments_count: number
}

interface Image {
  url: string
}
export type { Image, Blog }
