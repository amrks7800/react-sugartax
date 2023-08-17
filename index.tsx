"use client"

import React, {
  ReactNode,
  createContext,
  useContext,
} from "react"
import {
  ForProps,
  CaseProps,
  ContextProps,
  ShowProps,
  SwitchProps,
} from "./types"
import {
  SwitchProvider,
  useSwitchContext,
} from "./contexts"

const For = <T extends {}>({
  each,
  children,
}: ForProps<T>) => {
  return <>{each.map((item, i) => children(item, i))}</>
}

const Show = ({ when, fallback, children }: ShowProps) => {
  function invokeChildren() {
    if (typeof children === "function") return children()
    return children
  }

  return when ? invokeChildren() : fallback
}

const Switch = ({ on, children }: SwitchProps) => {
  return <SwitchProvider on={on}>{children}</SwitchProvider>
}

const Case = ({ that, children }: CaseProps) => {
  const { on } = useSwitchContext()
  return (
    <Show when={on === that} fallback={null}>
      {children}
    </Show>
  )
}

export { For, Show, Switch, Case }
