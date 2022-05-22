interface IRegisterPayload {
  'user[name]': string
  'user[email]': string
  password: string
  avatar: any
}

export type { IRegisterPayload }
