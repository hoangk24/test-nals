import { IUser } from 'constants/models/auth.model'

interface Comment {
  id: number | string
  blog_id: number | string
  content: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
  user: IUser
}

export type { Comment }
