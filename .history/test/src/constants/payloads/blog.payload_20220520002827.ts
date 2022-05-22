interface CreateBlog {
  title: string
  content: string
  image: any
}
interface GetBlog {
  page: number
  offset: number
  search: string
}
export type { CreateBlog }
