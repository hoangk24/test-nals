import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ILoginPayload, IRegisterPayload } from 'constants/payloads/auth.payload'
import { getProfileAction, loginAction, registerAction } from 'features/auth/auth.action'
import { setLogIn, setLogOut, setUser } from 'features/auth/authSlice'
import { useLoading } from 'hooks/useLoading'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function useAuth() {
  const loading = useLoading()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const login = (data: ILoginPayload) => {
    loading.show()
    new Promise((resolve, reject) => {
      dispatch(loginAction(data))
        .then(unwrapResult)
        .then((res: any) => resolve(res))
    })
      .then((res: any) => {
        dispatch(setLogIn(res))
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .then(() => {
        dispatch(getProfileAction({}))
          .then(unwrapResult)
          .then((res: any) => {
            return res
          })
      })
      .then((res: any) => {
        console.log(res)
        // dispatch(setUser(res))
      })
      .then(() => {
        loading.hide()
        toast.success('Đăng nhập thành công!')
        // navigate('/')
      })
      .catch((err) => {
        loading.hide()
        toast.error(err.message)
      })
      .finally(() => loading.hide())
  }
  const logout = () => {
    dispatch(setLogOut())
  }

  const getProfile = () => {
    dispatch(getProfileAction({}))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)

        // dispatch(setUser())
      })
  }
  const register = (data: IRegisterPayload) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    return dispatch(registerAction(formData)).then(unwrapResult)
  }
  return { register, login, logout }
}
