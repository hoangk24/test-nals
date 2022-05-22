import { AxiosResponse } from 'axios'
import { IGetBlog } from 'constants/payloads/blog.payload'

type CreateBlog = () => Promise<AxiosResponse<any>>
type GetBlog = (params: IGetBlog) => Promise<AxiosResponse<any>>
type UpdateBlog = () => Promise<AxiosResponse<any>>
type GetBlogDetail = () => Promise<AxiosResponse<any>>
type DeleteBlog = () => Promise<AxiosResponse<any>>
