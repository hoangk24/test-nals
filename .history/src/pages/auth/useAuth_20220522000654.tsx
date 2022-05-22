import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ILoginPayload, IRegisterPayload } from 'constants/payloads/auth.payload'
import {
  getProfileAction,
  loginAction,
  registerAction,
  updateProfileAction,
} from 'features/auth/auth.action'
import { setLogIn, setLogOut, setUser } from 'features/auth/authSlice'
import { useLoading } from 'hooks/useLoading'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useAuth() {
  const loading = useLoading()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const login = (data: ILoginPayload) => {
    loading.show()
    dispatch(loginAction(data))
      .then(unwrapResult)
      .then((res: any) => {
        dispatch(setLogIn(res))
      })
      .then(() => {
        getProfile()
        toast.success('Login successfully')
        navigate('/')
        loading.hide()
      })
      .catch((err) => {
        loading.hide()
        toast.error(err.message)
      })
      .finally(() => {
        loading.hide()
      })
  }
  const logout = () => {
    dispatch(setLogOut())
  }

  const getProfile = () => {
    dispatch(getProfileAction({}))
      .then(unwrapResult)
      .then((res: any) => {
        dispatch(setUser(res))
      })
      .catch((err: any) => {
        toast.error(err?.message)
      })
  }

  const updateProfile = (data: any) => {
    loading.show()
    dispatch(updateProfileAction(data))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)
        dispatch(setUser(res))
      })
      .catch((err) => {
        loading.hide()
        toast.error(err?.message)
      })
      .finally(() => loading.hide())
  }
  const register = (data: IRegisterPayload) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    return dispatch(registerAction(formData)).then(unwrapResult)
  }
  return { register, login, logout, updateProfile }
}
