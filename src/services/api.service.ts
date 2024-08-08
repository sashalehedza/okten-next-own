import { User } from '@/models/User'
import { Post } from '@/models/Post'
import { Comment } from '@/models/Comment'

export const getAllUsers = async (): Promise<User[]> => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (value) => value.json()
  )
  return response
}

export const getUserById = async (id: string): Promise<User> => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((value) => value.json())
  return response
}

export const getUserPosts = async (id: string): Promise<Post[]> => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  ).then((value) => value.json())
  return response
}

export const getAllPosts = async (): Promise<Post[]> => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (value) => value.json()
  )
  return response
}

export const getPostById = async (id: string): Promise<Post> => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((value) => value.json())
  return response
}

export const getPostComments = async (id: string): Promise<Comment[]> => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((value) => value.json())
  return response
}

export const getAllComments = async (): Promise<Comment[]> => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  ).then((value) => value.json())
  return response
}

export const getCommentById = async (id: string): Promise<Comment> => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  ).then((value) => value.json())
  return response
}
