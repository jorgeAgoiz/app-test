import { Post } from '../types/post'
import { JSON_PLACEHOLDER_URL } from '../utils/constants'

export const getPosts = (): Promise<Array<Post>> => {
  return fetch(JSON_PLACEHOLDER_URL).then((response) => response.json())
}
