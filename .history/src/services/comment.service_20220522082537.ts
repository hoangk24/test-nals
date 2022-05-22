import { AxiosResponse } from 'axios'
import { CreateCommentPayload, GetCommentPayload } from 'constants/payloads/comment.payload'
import { API_ENPOINT } from 'services/apiEndpoint'
import { axiosClient } from 'services/axiosClient'

type GetComment = (id: string, params: GetCommentPayload) => Promise<AxiosResponse<any>>
type CreateComment = (id: string, body: CreateCommentPayload) => Promise<AxiosResponse<any>>

export const getComment: GetComment = (id, params) =>
  axiosClient.get(`${API_ENPOINT.BLOGS}/${id}/comments`, { params })
export const createComment: CreateComment = (id, body) =>
  axiosClient.post(`${API_ENPOINT.BLOGS}/${id}/comments`, { body })
