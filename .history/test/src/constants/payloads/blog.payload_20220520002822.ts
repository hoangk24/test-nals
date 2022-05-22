interface CreateBlog {
  title: string
  content: string
  image: any
}
interface GetBlog {
  page: number
  offset: number
}
export type { CreateBlog }
