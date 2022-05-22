interface PropsWithChildren {
  children: React.ReactNode;
  [x: string]: any
}

interface extends PropsWithChildren{}
export type { PropsWithChildren }
