interface IRegisterPayload {
  'user[name]': string
  'user[email]': string
  'user[password]': string
  'user[avatar]': any
}

interface ILoginPayload {
  email: string
  password: string
  remember_me: boolean
}
export type { IRegisterPayload, ILoginPayload }
