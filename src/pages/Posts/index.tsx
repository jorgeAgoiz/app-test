import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import PostCard from '../../components/PostCard'
import { usePost } from '../../context/PostContext'
import usePagination from '../../hooks/usePagination'
import { getPosts } from '../../services/getPosts'
import { PER_PAGE } from '../../utils/constants'
import style from './styles.module.scss'

const Posts = (): JSX.Element => {
  const { state, dispatch } = usePost()
  const { currentData, currentPage, handleNext, handlePrevious } =
    usePagination()
  const navigate: NavigateFunction = useNavigate()
  const [t] = useTranslation('global')

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
      <h1 className={style.title}>{t('posts.list.title')}</h1>
      <section className={style.list}>
        {currentData.length > 0 &&
          currentData.map((post) => <PostCard key={post.id} post={post} />)}
      </section>
      {state.length > 0 && (
        <section className={style.pagination}>
          <Button
            text={t('posts.list.buttons.previous_page')}
            handleClick={handlePrevious}
            disabled={currentPage <= 1}
            type="button"
            category="pagination"
            ariaLabel="Página Anterior"
          >
            <GrLinkPrevious className={style.pagination__icon} />
          </Button>
          <p className={style.pagination__text}>
            {`${t('posts.list.pagination_text.part_one')} ${currentPage} ${t(
              'posts.list.pagination_text.part_two'
            )} ${Math.ceil(state.posts.length / PER_PAGE)}`}
          </p>
          <Button
            text={t('posts.list.buttons.next_page')}
            handleClick={handleNext}
            disabled={currentPage === Math.ceil(state.posts.length / PER_PAGE)}
            type="button"
            category="pagination"
            ariaLabel="Siguiente Página"
          >
            <GrLinkNext className={style.pagination__icon} />
          </Button>
        </section>
      )}
    </main>
  )
}

export default Posts
