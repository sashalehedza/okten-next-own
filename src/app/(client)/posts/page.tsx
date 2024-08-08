import React from 'react'
import { getAllPosts } from '@/services/api.service'

const PostsPage = async () => {
  let posts = await getAllPosts()

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default PostsPage
