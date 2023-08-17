import { useMemo, useState } from "react"

type PaginationProps<T> = {
  Input: T[]
  perPage: number
}

/**
 * Custom Hook To implement pagination easily
 * @param Input iterator
 * @param perPage number
 * @returns nextPage function
 * @returns previousPage function
 * @returns currentPage number
 * @returns pages number
 * @returns page array
 */
const usePagination = <T extends {}>({
  Input,
  perPage,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [slice, setSlice] = useState({
    start: 0,
    end: perPage,
  })

  const pages = useMemo(
    () => Math.ceil(Input.length / perPage),
    [Input, perPage]
  )

  function nextPage() {
    if (currentPage < pages) {
      setCurrentPage(prev => prev + 1)
      setSlice(prev => ({
        start: prev.start + perPage,
        end: prev.end + perPage,
      }))
    }
  }

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
      setSlice(prev => ({
        start: prev.start - perPage,
        end: prev.end - perPage,
      }))
    }
  }

  return {
    nextPage,
    previousPage,
    currentPage,
    pages,
    page: Input.slice(slice.start, slice.end),
  }
}

export default usePagination
