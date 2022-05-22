interface PropsWithChildren {
  children: React.ReactNode
}

interface IPagination {
  count: number
  next: number | null
  offset: number
  page: number
  prev: number | null
  total: number[] | number
}

export type { PropsWithChildren, IPagination }
