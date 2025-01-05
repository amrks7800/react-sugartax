"use client"
import { ForProps, ShowProps } from "./types"

/**
 * A component wrapping the native map method to loop over iterators,
 *  providing performance optimizations, and a lovely syntax
 * @param each iterator
 * @returns ReactNode
 * @children (item: T, i?: number) => JSX.Element
 */
const For = <T extends {}>({ each, children }: ForProps<T>) => {
  return each.map((item, i) => children(item, i))
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

export { default as usePagination } from "./hooks/usePagination"

export { For, Show }
