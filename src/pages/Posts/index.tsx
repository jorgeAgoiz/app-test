import { useEffect } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import { usePost } from '../../context/PostContext'
import usePagination from '../../hooks/usePagination'
import { getPosts } from '../../services/getPosts'
import { PER_PAGE } from '../../utils/constants'
import style from './_styles.module.scss'

const Posts = (): JSX.Element => {
  const { state, dispatch } = usePost()
  const { currentData, currentPage, setCurrentPage } = usePagination(
    state.posts
  )
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    if (state.length <= 0) {
      getPosts()
        .then((data) =>
          dispatch({
            type: 'fetch',
            payload: {
              posts: data,
              length: data.length,
            },
          })
        )
        .catch(() => navigate('/error', { replace: true }))
    }
  }, [])

  const onHandlePrevious = (): void => {
    if (currentPage > 1) {
      return setCurrentPage(currentPage - 1)
    }
  }
  const onHandleNext = (): void => {
    if (currentPage < Math.ceil(state.posts.length / PER_PAGE)) {
      return setCurrentPage(currentPage + 1)
    }
  }

  return (
    <main className={style.main}>
      <h1>Listado de Posts</h1>
      <section className={style.list}>
        {currentData.length > 0 &&
          currentData.map((post) => <PostCard key={post.id} elem={post} />)}
      </section>
      {state.length > 0 && (
        <section className={style.pagination}>
          <button
            className={style.pagination__button}
            onClick={onHandlePrevious}
            disabled={currentPage <= 1}
          >
            <GrLinkPrevious />
          </button>
          <p>
            Página {currentPage} de {Math.ceil(state.posts.length / PER_PAGE)}
          </p>
          <button
            className={style.pagination__button}
            onClick={onHandleNext}
            disabled={currentPage === Math.ceil(state.posts.length / PER_PAGE)}
          >
            <GrLinkNext />
          </button>
        </section>
      )}
    </main>
  )
}

export default Posts
