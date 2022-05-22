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
interface IDeleteBlog {
  id: number
}

export type { ICreateBlog, IGetBlogPayload as IGetBlog, IGetBlogDetailPayload as IGetBlogDetail, IUpdateBlogPayload as IUpdateBlog, IDeleteBlog }
