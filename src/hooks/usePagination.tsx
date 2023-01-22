import { useEffect, useState } from 'react'
import { UsePagination } from '../types/hooks'
import { Post } from '../types/post'
import { PER_PAGE } from '../utils/constants'

interface State {
  currentData: Array<Post>
  currentPage: number
}

const usePagination = (data: Array<Post>): UsePagination => {
  const [currentData, setCurrentData] = useState<State['currentData']>([])
  const [currentPage, setCurrentPage] = useState<State['currentPage']>(1)

  useEffect(() => {
    if (data.length > 0) {
      setCurrentData(
        data.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
      )
    }
    return (): void => {}
  }, [currentPage, data])

  return {
    currentData,
    currentPage,
    setCurrentPage,
  }
}

export default usePagination
