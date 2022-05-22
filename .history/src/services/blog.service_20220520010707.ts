import { AxiosResponse } from 'axios'

type CreateBlog = () => Promise<AxiosResponse<any>>
type GetBlog = () => Promise<AxiosResponse<any>>
type UpdateBlog = () => Promise<AxiosResponse<any>>
type GetBlogDetail = () => Promise<AxiosResponse<any>>
type DeleteBlog = () => Promise<AxiosResponse<any>>



