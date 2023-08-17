import React, {
  createContext,
  useContext,
  ReactNode,
} from "react"
import { ContextProps } from "../types"

const SwitchContext = createContext<ContextProps>({
  on: false,
})

export const useSwitchContext = () =>
  useContext(SwitchContext)

export const SwitchProvider = ({
  children,
  on,
}: {
  children: ReactNode
  on: number | string | boolean
}) => {
  return (
    <SwitchContext.Provider value={{ on }}>
      {children}
    </SwitchContext.Provider>
  )
}
