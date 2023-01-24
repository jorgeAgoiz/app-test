import { useTranslation } from 'react-i18next'
import useEdit from '../../hooks/useEdit'
import Button from '../Button'
import style from './styles.module.scss'

interface Props {
  id: number
  title: string
  body: string
  onCancel: () => void
}

const EditPost = ({ id, title, body, onCancel }: Props): JSX.Element => {
  const { handleChange, handleSubmit, error } = useEdit({
    id,
    title,
    body,
    onCancel,
  })
  const [t] = useTranslation('global')

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {error && <p className={style.error}>{error}</p>}
      <input
        onChange={handleChange}
        name="title"
        required
        type="text"
        defaultValue={title}
        className={style.form__title}
        placeholder={t('posts.edit.placeholders.title')!}
      />
      <textarea
        defaultValue={body}
        required
        name="body"
        onChange={handleChange}
        className={style.form__content}
        placeholder={t('posts.edit.placeholders.body')!}
      />
      <div className={style.form__actions}>
        <Button
          variant="basic"
          text={t('posts.edit.buttons.save')}
          type="submit"
          ariaLabel="Guardar cambios"
        />
        <Button
          variant="basic"
          text={t('posts.edit.buttons.cancel')}
          type="button"
          handleClick={onCancel}
          ariaLabel="Cancelar edición"
        />
      </div>
    </form>
  )
}

export default EditPost
