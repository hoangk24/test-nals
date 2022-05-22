import { AxiosResponse } from 'axios'
import { IUser, Token } from 'constants/models/auth.model'
import { ILoginPayload, IRegisterPayload } from 'constants/payloads/auth.payload'
import { API_ENPOINT } from 'services/apiEndpoint'
import axiosClient, { configFormData } from 'services/axiosClient'

type Register = (body: any) => Promise<AxiosResponse<{ data: IUser }>>
type Login = (body: ILoginPayload) => Promise<AxiosResponse<{ data: Token }>>

export const register: Register = (body) =>
  axiosClient.post(API_ENPOINT.AUTHORIZATION.REGISTER, body, configFormData)

export const login: Login = (body) => axiosClient.post(API_ENPOINT.AUTHORIZATION.LOGIN, body)
