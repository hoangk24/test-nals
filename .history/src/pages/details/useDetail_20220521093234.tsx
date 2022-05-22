import { useAppDispatch } from 'app/store'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function useDetail() {
  const { id } = useParams()
  const dispatch =useAppDispatch()
  return {}
}
