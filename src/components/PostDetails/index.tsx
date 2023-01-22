import { useState } from 'react'
import { CgCloseR } from 'react-icons/cg'
import { usePost } from '../../context/PostContext'
import { Post } from '../../types/post'
import Button from '../Button'
import EditPost from '../EditPost'
import ReactPortal from '../ReactPortal'
import style from './_styles.module.scss'

interface Props {
  post: Post
  handleClose: () => void
}

const PostDetails = ({ post, handleClose }: Props): JSX.Element => {
  const [edit, setEdit] = useState(false)
  const { dispatch } = usePost()

  const handleDelete = (): void => {
    dispatch({ type: 'delete', payload: { id: post.id } })
  }
  const handleCancel = () => {
    setEdit(false)
  }

  return (
    <ReactPortal wrapperId="modal">
      <dialog className={style.dialog}>
        <div className={style.dialog__close}>
          <CgCloseR
            className={style.dialog__close__icon}
            onClick={handleClose}
            title="Cerrar"
          />
        </div>
        {!edit ? (
          <h1 className={style.dialog__title}>Detalles</h1>
        ) : (
          <h1 className={style.dialog__title}>Editar Post</h1>
        )}
        <section className={style.content}>
          {!edit ? (
            <>
              <h1 className={style.content__title}>{post.title}</h1>
              <h2 className={style.content__body}>{post.body}</h2>
              <div className={style.content__actions}>
                <Button
                  category="basic"
                  text="Editar"
                  type="button"
                  handleClick={() => setEdit(true)}
                />
                <Button
                  category="basic"
                  text="Eliminar"
                  type="button"
                  handleClick={handleDelete}
                />
              </div>
            </>
          ) : (
            <EditPost
              id={post.id}
              title={post.title}
              body={post.body}
              onCancel={handleCancel}
            />
          )}
        </section>
      </dialog>
    </ReactPortal>
  )
}

export default PostDetails
