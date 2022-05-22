interface PropsWithChildren {
  children: React.ReactNode
}

interface IPagination {
  count: number
  next: number
  offset: number
  page: number
  prev: number
  total: number
}

export type { PropsWithChildren }
