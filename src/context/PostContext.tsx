import { createContext, useContext, useReducer } from 'react'
import { ProviderProps } from '../types/auth'
import { Post, PostAction, PostDispatch, PostState } from '../types/post'

const postState: PostState = {
  posts: [],
  length: 0,
}

export const PostContext = createContext<{
  state: PostState
  dispatch: PostDispatch['dispatch']
}>({ state: postState, dispatch: (action: PostAction) => {} })

const postReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case 'fetch': {
      return {
        posts: action.payload.posts!,
        length: action.payload.length!,
      }
    }
    case 'delete': {
      const { id } = action.payload
      const postsUpdated: Array<Post> = state.posts.filter(
        (post) => post.id !== id
      )
      return {
        posts: postsUpdated!,
        length: postsUpdated.length!,
      }
    }
    case 'update': {
      const { id, title, body } = action.payload
      const postsUpdated: Array<Post> = state.posts.map((post) => {
        if (post.id === id) {
          post.title = title!
          post.body = body!
        }
        return post
      })

      return {
        posts: postsUpdated!,
        length: postsUpdated.length!,
      }
    }
    default: {
      return state
    }
  }
}

export const PostProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(postReducer, postState)
  const value = { state, dispatch }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export const usePost = () => {
  const context = useContext(PostContext)
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider')
  }
  return context!
}
