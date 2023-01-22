import { useState } from 'react'
import { Post } from '../../types/post'
import Button from '../Button'
import PostDetails from '../PostDetails'
import style from './_styles.module.scss'

interface Props {
  elem: Post
}

const PostCard = ({ elem }: Props) => {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true)
  }

  return (
    <>
      <article className={style.post}>
        <h1 className={style.post__title}>{elem.title}</h1>
        <p className={style.post__body}>{elem.body}</p>
        <Button text="Editar" type="button" handleClick={handleClick} />
      </article>
      {modal && <PostDetails />}
    </>
  )
}

export default PostCard
