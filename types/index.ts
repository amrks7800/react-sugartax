import React, { ReactNode } from "react"

export type ForProps<T> = {
  each: Array<T>
  children: (item: T, i?: number) => JSX.Element
}

export type ShowProps = {
  when: boolean
  fallback: ReactNode | string
  children: ReactNode | (() => string | ReactNode) | string
}

export type SwitchProps = {
  on: string | boolean | number
  children: ReactNode
}

export type ContextProps = {
  on: string | boolean | number
}

export type CaseProps = {
  that: string | number | boolean
  children: ReactNode
  lt?: boolean
  gt?: boolean
  gte?: boolean
  lte?: boolean
}
