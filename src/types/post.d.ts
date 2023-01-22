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

export interface Payload {
  id?: number
  title?: string
  body?: string
  posts?: Array<Post>
  length?: number
}

export interface PostAction {
  type: 'fetch' | 'delete' | 'update'
  payload: Payload
}

export interface PostDispatch {
  dispatch: (action: PostAction) => void
}
