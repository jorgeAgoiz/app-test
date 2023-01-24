export interface UseSignin {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
  error: string | null
}

export interface UsePagination {
  currentData: Array<Post>
  currentPage: number
  handleNext: () => void
  handlePrevious: () => void
}

export interface UseEdit {
  handleChange: (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
  error: string | null
}
