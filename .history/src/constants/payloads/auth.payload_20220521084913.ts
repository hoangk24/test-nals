interface IRegisterPayload {
  'user[name]': string
  'user[email]': string
  'user[password]': string
  'user[avatar]': any
}

interface ILoginPayload {
  email: string
  password: 'password'
  remember_me: true
}
export type { IRegisterPayload }
