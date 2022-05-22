import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { IRegisterPayload } from 'constants/payloads/auth.payload'
import { registerAction } from 'features/auth/auth.action'
import { useLoading } from 'hooks/useLoading'
import React from 'react'
import { toast } from 'react-toastify'

export default function useAuth() {
  const loading = useLoading()
  const dispatch = useAppDispatch()
  const register = (data: IRegisterPayload) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    loading.show()
    dispatch(registerAction(formData))
      .then(unwrapResult)
      .then((res: any) => {
        toast.success('Đăng ký thành công!')
        loading.hide()
      })
      .catch((err: any) => {
        console.log(err)

        toast.error(err.errors)
        loading.hide()
      })
  }
  return { register }
}
