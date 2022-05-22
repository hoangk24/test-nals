export interface Root {
  data: Blog
}

export interface Blog {
  id: number
  title: string
  content: string
  image: Image
  created_at: string
  updated_at: string
  comments_count: number
}

export interface Image {
  url: string
}
