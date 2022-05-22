import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ILoginPayload, IRegisterPayload } from 'constants/payloads/auth.payload'
import { loginAction, registerAction } from 'features/auth/auth.action'
import { useLoading } from 'hooks/useLoading'
import React from 'react'
import { toast } from 'react-toastify'

export default function useAuth() {
  const loading = useLoading()
  const dispatch = useAppDispatch()
  const login = (data: ILoginPayload) => {
    loading.show()
    dispatch(loginAction(data))
      .then(unwrapResult)
      .then((res: any) => {})
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
