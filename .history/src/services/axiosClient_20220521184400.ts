import axios, { AxiosRequestConfig } from 'axios'
import { stringify } from 'query-string'
import { BASE_URL } from 'services/apiEndpoint'
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => stringify(params, { encode: false }),
})

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) return res.data
    return res
  },
  (err) => {
    return Promise.reject(err)
  },
)
axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  ;(config?.headers as any).Authorization = `Bearer ${token}`
  return config
})
export const configFormData = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}
export default axiosClient
