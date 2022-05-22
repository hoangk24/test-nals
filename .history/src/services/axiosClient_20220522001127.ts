import axios, { AxiosRequestConfig } from 'axios'
import { stringify } from 'query-string'
import { BASE_URL } from 'services/apiEndpoint'
export const axiosClient = axios.create({
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
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  return config
})
export const configFormData = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}
// axiosClient.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   async function (error) {
//     const originalRequest = error.config
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       try {
//         const refreshToken = localStorage.getItem('refreshToken')
//         const access_token = await getNewAccessToken({
//           refreshToken,
//         } as any)
//         axios.defaults.headers.common[
//           'Authorization'
//         ] = `Bearer ${access_token.data.data.token.token}`
//         return axiosClient(originalRequest)
//       } catch (error) {
//         Modal.error({
//           title: 'Hết hạn đăng nhập vui lòng đăng nhập lại!',
//           onOk() {
//             localStorage.clear()
//             window.location.href = '/login'
//           },
//         })
//       }
//     }

//     return Promise.reject(error)
//   },
// )
