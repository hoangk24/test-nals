import axios from 'axios'
import { stringify } from 'query-string'
import { BASE_URL } from 'services/apiEndpoint'
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {},
  paramsSerializer: (params) => stringify(params, { encode: false }),
})

axios.interceptors.response.use((res) => {
  if (res.data) return res.data
  return res
})

export default axiosClient
