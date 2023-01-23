import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePost } from '../context/PostContext'
import { UseEdit } from '../types/hooks'

interface State {
  newTitle: string
  newBody: string
  error: string | null
}

interface Props {
  id: number
  title: string
  body: string
  onCancel: () => void
}

const useEdit = ({ id, title, body, onCancel }: Props): UseEdit => {
  const { dispatch } = usePost()
  const [t, i18n] = useTranslation('global')
  const [newTitle, setNewTitle] = useState<State['newTitle']>(title)
  const [newBody, setNewBody] = useState<State['newBody']>(body)
  const [error, setError] = useState<State['error']>(null)

  const handleChange = (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = evt.currentTarget
    if (name === 'title') {
      setNewTitle(value)
    }
    if (name === 'body') {
      setNewBody(value)
    }
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    if (newTitle.length < 3) {
      return setError(t('posts.edit.error.title'))
    }
    if (newBody.length < 10) {
      return setError(t('posts.edit.error.body'))
    }
    setError(null)
    dispatch({
      type: 'update',
      payload: {
        id,
        title: newTitle,
        body: newBody,
      },
    })
    return onCancel()
  }

  return {
    handleChange,
    handleSubmit,
    error,
  }
}

export default useEdit
