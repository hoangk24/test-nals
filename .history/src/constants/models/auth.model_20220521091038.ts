interface IUser {
  avatar: { url: string }
  created_at: Date
  email: string
  name: string
  updated_at: Date
}

interface Token {
  token: string
  refresh_token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMzcsImV4cCI6MTY1MzcwMzc3M30.TnuxvVk4sw5i1WFULP7R9TNpm2yMDWMt8-W6XfIxYXs'
}
export type { IUser }
