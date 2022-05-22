import { AxiosResponse } from 'axios'
import { IRegisterPayload } from 'constants/payloads/auth.payload'

type Register = (body: IRegisterPayload) => Promise<AxiosResponse<any>>
