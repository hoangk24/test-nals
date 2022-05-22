import { AxiosResponse } from 'axios'
import { GetCommentPayload } from 'constants/payloads/comment.payload'

type GetProfile = (params: GetCommentPayload) => Promise<AxiosResponse<any>>
