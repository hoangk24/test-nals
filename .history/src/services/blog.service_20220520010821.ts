import { AxiosResponse } from 'axios'
import { IGetBlog } from 'constants/payloads/blog.payload'
import { API_ENPOINT } from 'services/apiEndpoint'
import axiosClient from 'services/axiosClient'

type CreateBlog = () => Promise<AxiosResponse<any>>
type GetBlog = (params: IGetBlog) => Promise<AxiosResponse<any>>
type UpdateBlog = () => Promise<AxiosResponse<any>>
type GetBlogDetail = () => Promise<AxiosResponse<any>>
type DeleteBlog = () => Promise<AxiosResponse<any>>

export const getBlog = (params) => axiosClient.get(API_ENPOINT.BLOGS, { params })
