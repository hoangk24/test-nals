import React from 'react'

export default function useComment() {
  const { id } = useParams()
  const [detail, setDetail] = useState<Blog>({} as Blog)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loading = useLoading()
  return {}
}
