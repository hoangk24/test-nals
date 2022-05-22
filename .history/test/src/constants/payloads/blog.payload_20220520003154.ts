interface CreateBlog {
  title: string
  content: string
  image: any
}
interface GetBlog {
  page?: number
  offset?: number
  search?: string
  sort_by?: 'id' | 'title' | 'content' | 'created_at' | 'updated_at'
  sort_direction?: 'asc' | 'desc'
}
interface GetBlogDetail {
  id: number
}
interface UpdateBlog {
  id: string
  update: {
    title: string
  }
}
export type { CreateBlog, GetBlog, GetBlogDetail }
