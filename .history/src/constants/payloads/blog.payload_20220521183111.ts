interface ICreateBlog {
  title: string
  content: string
  image: any
}
interface IGetBlogPayload {
  page?: number
  offset?: number
  search?: string
  sort_by?: 'id' | 'title' | 'content' | 'created_at' | 'updated_at'
  sort_direction?: 'asc' | 'desc'
}
interface IGetBlogDetailPayload {
  id: number
}
interface IUpdateBlogPayload {
  id: string
  update: Partial<ICreateBlog>
}
interface IDeleteBlogPayload {
  id: number
}

export type {
  ICreateBlog,
  IGetBlogPayload,
  IGetBlogDetailPayload,
  IUpdateBlogPayload,
  IDeleteBlogPayload,
}
