import { AxiosResponse } from 'axios'
import { GetCommentPayload } from 'constants/payloads/comment.payload'
import { API_ENPOINT } from 'services/apiEndpoint'
import { axiosClient } from 'services/axiosClient'

type GetComment = (id:string,params: GetCommentPayload) => Promise<AxiosResponse<any>>



export const getComment = (params)=>axiosClient.get(`${API_ENPOINT.BLOGS}/${}`)
