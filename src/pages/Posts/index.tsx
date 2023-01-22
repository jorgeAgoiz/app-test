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
  const { currentData, currentPage, handleNext, handlePrevious } =
    usePagination()
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

  return (
    <main className={style.main}>
      <h1 className={style.title}>Listado de Posts</h1>
      <section className={style.list}>
        {currentData.length > 0 &&
          currentData.map((post) => <PostCard key={post.id} post={post} />)}
      </section>
      {state.length > 0 && (
        <section className={style.pagination}>
          <button
            className={style.pagination__button}
            onClick={handlePrevious}
            disabled={currentPage <= 1}
          >
            <GrLinkPrevious className={style.pagination__button__icon} />
          </button>
          <p className={style.pagination__text}>
            Página {currentPage} de {Math.ceil(state.posts.length / PER_PAGE)}
          </p>
          <button
            className={style.pagination__button}
            onClick={handleNext}
            disabled={currentPage === Math.ceil(state.posts.length / PER_PAGE)}
          >
            <GrLinkNext className={style.pagination__button__icon} />
          </button>
        </section>
      )}
    </main>
  )
}

export default Posts
