interface PropsWithChildren {
  children: React.ReactNode
}

interface IPagination {
  count: number
  next: number
  offset: number
  page: number
  prev: number | null
  total: number
}

export type { PropsWithChildren }