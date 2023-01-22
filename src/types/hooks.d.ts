export interface UseSignIn {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
  error: string | null
}

export interface UsePagination {
  currentData: Array<Post>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
