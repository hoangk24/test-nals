import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { IRegisterPayload } from 'constants/payloads/auth.payload'
import { registerAction } from 'features/auth/auth.action'
import { useLoading } from 'hooks/useLoading'
import React from 'react'

export default function useAuth() {
  const loading = useLoading()
  const dispatch = useAppDispatch()
  const register = (data: IRegisterPayload) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    loading.show()
    dispatch(registerAction(data))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => loading.hide())
  }
  return { register }
}
