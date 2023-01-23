import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CgCloseR } from 'react-icons/cg'
import { usePost } from '../../context/PostContext'
import { Post } from '../../types/post'
import Button from '../Button'
import EditPost from '../EditPost'
import ReactPortal from '../ReactPortal'
import style from './styles.module.scss'

interface Props {
  post: Post
  handleClose: () => void
}

const PostDetails = ({ post, handleClose }: Props): JSX.Element => {
  const [edit, setEdit] = useState(false)
  const { dispatch } = usePost()
  const [t] = useTranslation('global')

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
            title={t('posts.card.buttons.close')!}
            aria-label="Cerrar Post"
            role="button"
          />
        </div>
        {!edit ? (
          <h1 className={style.dialog__title}>
            {t('posts.card.titles.details')}
          </h1>
        ) : (
          <h1 className={style.dialog__title}>{t('posts.card.titles.edit')}</h1>
        )}
        <section className={style.content}>
          {!edit ? (
            <>
              <h1
                role="heading"
                aria-label="Título del Post"
                className={style.content__title}
              >
                {post.title}
              </h1>
              <h2
                role="heading"
                aria-label="Contenido del Post"
                className={style.content__body}
              >
                {post.body}
              </h2>
              <div className={style.content__actions}>
                <Button
                  category="basic"
                  text={t('posts.card.buttons.edit')}
                  type="button"
                  handleClick={() => setEdit(true)}
                  ariaLabel="Editar el Post"
                />
                <Button
                  category="basic"
                  text={t('posts.card.buttons.delete')}
                  type="button"
                  handleClick={handleDelete}
                  ariaLabel="Eliminar el Post"
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
