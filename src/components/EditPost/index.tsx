import useEdit from '../../hooks/useEdit'
import Button from '../Button'
import style from './_styles.module.scss'

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

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        {error && <p className={style.error}>{error}</p>}
        <input
          onChange={handleChange}
          name="title"
          required
          type="text"
          defaultValue={title}
          className={style.form__title}
        />
        <textarea
          defaultValue={body}
          required
          name="body"
          onChange={handleChange}
          className={style.form__content}
        />
        <div className={style.form__actions}>
          <Button category="basic" text="Guardar" type="submit" />
          <Button
            category="basic"
            text="Cancelar"
            type="button"
            handleClick={onCancel}
          />
        </div>
      </form>
    </>
  )
}

export default EditPost
