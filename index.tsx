import React, {
  ReactNode,
  createContext,
  useContext,
} from "react"

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

type SwitchProps = {
  on: string | boolean | number
  children: ReactNode
}

type ContextProps = {
  on: string | boolean | number
}

const SwitchContext = createContext<ContextProps>({
  on: false,
})

const useSwitchContext = () => useContext(SwitchContext)

const Switch = ({ on, children }: SwitchProps) => {
  return (
    <SwitchContext.Provider value={{ on }}>
      {children}
    </SwitchContext.Provider>
  )
}

const Case = ({
  that,
  children,
}: {
  that: string | number | boolean
  children: ReactNode
}) => {
  const { on } = useSwitchContext()
  return (
    <Show when={on === that} fallback={null}>
      {children}
    </Show>
  )
}

export { For, Show, Switch, Case }
