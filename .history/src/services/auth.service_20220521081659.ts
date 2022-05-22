import { AxiosResponse } from 'axios'
import { IRegisterPayload } from 'constants/payloads/auth.payload'
import { API_ENPOINT } from 'services/apiEndpoint'
import axiosClient, { configFormData } from 'services/axiosClient'

type Register = (body: any) => Promise<AxiosResponse<{data:IUser}>>

export const register: Register = (body) =>
  axiosClient.post(API_ENPOINT.AUTHORIZATION.REGISTER, body, configFormData)
