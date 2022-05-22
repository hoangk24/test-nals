import axios from 'axios'
import { stringify } from 'query-string'
import { BASE_URL } from 'services/apiEndpoint'
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {},
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

export default axiosClient
