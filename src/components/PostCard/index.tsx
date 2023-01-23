import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Post } from '../../types/post'
import Button from '../Button'
import PostDetails from '../PostDetails'
import style from './styles.module.scss'

interface State {
  modal: boolean
}
interface Props {
  post: Post
}

const PostCard = ({ post }: Props): JSX.Element => {
  const [modal, setModal] = useState<State['modal']>(false)
  const [t] = useTranslation('global')

  const handleClick = (): void => {
    setModal(true)
  }

  return (
    <>
      <article className={style.post}>
        <h1 className={style.post__title}>{post.title}</h1>
        <p className={style.post__body}>{post.body}</p>
        <Button
          category="basic"
          text={t('posts.card.buttons.details')}
          type="button"
          handleClick={handleClick}
        />
      </article>
      {modal && <PostDetails post={post} handleClose={() => setModal(false)} />}
    </>
  )
}

export default PostCard
