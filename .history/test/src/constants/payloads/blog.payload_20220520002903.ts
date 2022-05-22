interface CreateBlog {
  title: string
  content: string
  image: any
}
interface GetBlog {
  page: number
  offset: number
  search: string
  sort_by: string
  sort_direction: 'asc' | 'desc'
}
export type { CreateBlog }
