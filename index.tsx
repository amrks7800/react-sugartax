"use client"

import React from "react"
import {
  ForProps,
  CaseProps,
  ShowProps,
  SwitchProps,
} from "./types"
import {
  SwitchProvider,
  useSwitchContext,
} from "./contexts"

/**
 * A component wrapping the native map method to loop over iterators,
 *  providing performance optimizations, and a lovely syntax
 * @param each iterator
 * @returns ReactNode
 * @children (item: T, i?: number) => JSX.Element
 */
const For = <T extends {}>({
  each,
  children,
}: ForProps<T>) => {
  return <>{each.map((item, i) => children(item, i))}</>
}

/**
 * Perform conditional rendering, according to the boolean condition provided in when prop,
 * if it's true, it will show children, otherwise shows the fallback prop
 * @param when boolean
 * @returns ReactNode
 * @children ReactNode
 */
const Show = ({ when, fallback, children }: ShowProps) => {
  function invokeChildren() {
    if (typeof children === "function") return children()
    return children
  }

  return when ? invokeChildren() : fallback
}

/**
 * Context to wrap the Cases components and provide the comparison operand
 * @param on string | boolean | number
 * @returns ReactNode
 * @children <Cases />
 */
const Switch = ({ on, children }: SwitchProps) => {
  return <SwitchProvider on={on}>{children}</SwitchProvider>
}

/**
 * Shows the the children if the provided that prop match the comparison operand
 * @param that string | boolean | number
 * @returns ReactNode
 * @children ReactNode
 */
const Case = ({ that, children }: CaseProps) => {
  const { on } = useSwitchContext()
  return (
    <Show when={on === that} fallback={null}>
      {children}
    </Show>
  )
}

export { default as usePagination } from "./hooks/usePagination"

export { For, Show, Switch, Case }
