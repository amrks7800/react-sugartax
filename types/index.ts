import { ReactNode } from "react"

export type ForProps<T> = {
  each: Array<T>
  children: (item: T, i?: number) => JSX.Element
}

export type ShowProps = {
  when: boolean
  fallback: ReactNode | string
  children: ReactNode | (() => string | ReactNode) | string
}
