import { AxiosResponse } from 'axios'
import { GetCommentPayload } from 'constants/payloads/comment.payload'

type GetComment = (params: GetCommentPayload) => Promise<AxiosResponse<any>>
