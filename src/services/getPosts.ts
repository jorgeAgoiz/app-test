import { Post } from '../types/post'

export const getPosts = (): Promise<Array<Post>> => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  )
}
