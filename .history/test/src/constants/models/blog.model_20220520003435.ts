interface Blog {}
export interface Root {
  data: Data
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
