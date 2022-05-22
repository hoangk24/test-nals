import { IRegisterPayload } from 'constants/payloads/auth.payload'
import { useLoading } from 'hooks/useLoading'
import React from 'react'

export default function useAuth() {
  const loading = useLoading()
  const register = (data: IRegisterPayload) => {}
  return {}
}
