interface PropsWithChildren {
  children: React.ReactNode
}

interface IPagination {
  count: number
  next: number | null
  offset: number
  page: number
  prev: number | null
  total: number
}
interface IDropdownOption {
  label: string
  value: string
}
export type { PropsWithChildren, IPagination, IDropdownOption }
