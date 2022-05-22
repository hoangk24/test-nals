import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ILoginPayload, IRegisterPayload } from 'constants/payloads/auth.payload'
import { loginAction, registerAction } from 'features/auth/auth.action'
import { setLogIn } from 'features/auth/authSlice'
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
    dispatch(loginAction(data))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)

        dispatch(setLogIn(res.data))
        toast.success('Đăng nhập thành công!')
        navigate('/')
      })
      .catch((err: any) => {
        toast.error(err.message)
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
  return { register, login }
}
