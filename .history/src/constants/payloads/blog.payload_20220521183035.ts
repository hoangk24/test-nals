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
interface IGetBlogDetail {
  id: number
}
interface IUpdateBlog {
  id: string
  update: Partial<ICreateBlog>
}
interface IDeleteBlog {
  id: number
}

export type { ICreateBlog, IGetBlogPayload as IGetBlog, IGetBlogDetail, IUpdateBlog, IDeleteBlog }
