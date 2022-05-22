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
    // dispatch(registerAction(data))
  }
  return {}
}
