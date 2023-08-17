import React, { ReactNode } from "react"

type ForProps<T> = {
  each: Array<T>
  children: (item: T, i?: number) => JSX.Element
}

const For = <T extends {}>({
  each,
  children,
}: ForProps<T>) => {
  return <>{each.map((item, i) => children(item, i))}</>
}

type ShowProps = {
  when: boolean
  fallback: ReactNode | string
  children: ReactNode | (() => string | ReactNode) | string
}

const Show = ({ when, fallback, children }: ShowProps) => {
  function invokeChildren() {
    if (typeof children === "function") return children()
    return children
  }

  return when ? invokeChildren() : fallback
}

export { For, Show }
