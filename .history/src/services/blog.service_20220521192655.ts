import { AxiosResponse } from 'axios'
import { ICreateBlogPayload, IGetBlogPayload } from 'constants/payloads/blog.payload'
import { API_ENPOINT } from 'services/apiEndpoint'
import { configFormData, axiosClient } from 'services/axiosClient'

type CreateBlog = (body: ICreateBlogPayload) => Promise<AxiosResponse<any>>
type IGetBlog = (params: IGetBlogPayload) => Promise<AxiosResponse<any>>
type UpdateBlog = (id: string, body: any) => Promise<AxiosResponse<any>>
type GetBlogDetail = (id: string) => Promise<AxiosResponse<any>>
type DeleteBlog = () => Promise<AxiosResponse<any>>

export const getBlog: IGetBlog = (params) => axiosClient.get(API_ENPOINT.BLOGS, { params })

export const getBlogDetail: GetBlogDetail = (id) => axiosClient.get(`${API_ENPOINT.BLOGS}/${id}`)

export const createBlog: CreateBlog = (body) =>
  axiosClient.post(API_ENPOINT.BLOGS, body, configFormData)

export const updateBlog: UpdateBlog = (id, body) =>
  axiosClient.post(`${API_ENPOINT.BLOGS}/${id}`, body, configFormData)
