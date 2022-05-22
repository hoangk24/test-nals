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
}
export type { CreateBlog }
