import { useEffect, useState } from 'react'
import { usePost } from '../context/PostContext'
import { UsePagination } from '../types/hooks'
import { Post } from '../types/post'
import { PER_PAGE } from '../utils/constants'

interface State {
  currentData: Array<Post>
  currentPage: number
}

const usePagination = (): UsePagination => {
  const { state } = usePost()
  const [currentData, setCurrentData] = useState<State['currentData']>([])
  const [currentPage, setCurrentPage] = useState<State['currentPage']>(1)

  useEffect(() => {
    if (state.length > 0) {
      setCurrentData(
        state.posts.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
      )
    }
    return (): void => {}
  }, [currentPage, state.length])

  const handlePrevious = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNext = (): void => {
    if (currentPage < Math.ceil(state.posts.length / PER_PAGE)) {
      setCurrentPage(currentPage + 1)
    }
  }

  return {
    currentData,
    currentPage,
    handleNext,
    handlePrevious,
  }
}

export default usePagination
