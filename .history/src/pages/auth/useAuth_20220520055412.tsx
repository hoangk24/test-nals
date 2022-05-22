import { useAppDispatch } from 'app/store'
import { IRegisterPayload } from 'constants/payloads/auth.payload'
import { useLoading } from 'hooks/useLoading'
import React from 'react'

export default function useAuth() {
  const loading = useLoading()
  const dispatch = useAppDispatch()
  const register = (data: IRegisterPayload) => {}
  return {}
}
