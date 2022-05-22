interface IUser {
  avatar: { url: string }
  created_at: Date
  email: string
  name: string
  updated_at: Date
}

interface Token {
  token: string
  refresh_token?: string
}
export type { IUser, Token }
