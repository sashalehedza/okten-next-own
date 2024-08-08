// app/comment/[id]/page.tsx
import React from 'react'
import { getCommentById } from '@/services/api.service'

const PostPage = async ({ params }: { params: { id: string } }) => {
  const comment = await getCommentById(params.id)

  return (
    <div>
      <h1>{comment.body}</h1>
    </div>
  )
}

export default PostPage
