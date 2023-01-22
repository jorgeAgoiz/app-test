import { useState } from 'react'
import { Post } from '../../types/post'
import Button from '../Button'
import PostDetails from '../PostDetails'
import style from './_styles.module.scss'

interface State {
  modal: boolean
}
interface Props {
  post: Post
}

const PostCard = ({ post }: Props): JSX.Element => {
  const [modal, setModal] = useState<State['modal']>(false)

  const handleClick = () => {
    setModal(true)
  }

  return (
    <>
      <article className={style.post}>
        <h1 className={style.post__title}>{post.title}</h1>
        <p className={style.post__body}>{post.body}</p>
        <Button text="Editar" type="button" handleClick={handleClick} />
      </article>
      {modal && <PostDetails post={post} handleClose={() => setModal(false)} />}
    </>
  )
}

export default PostCard
