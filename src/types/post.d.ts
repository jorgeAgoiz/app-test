export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export interface PostState {
  posts: Array<Post>
  length: number
}

export interface PostAction {
  type: 'fetch' | 'delete' | 'update'
  payload: PostState
}

export interface PostDispatch {
  dispatch: (action: PostAction) => void
}
