import React from 'react'
import { getAllUsers } from '@/services/api.service'

const PostsPage = async () => {
  let users = await getAllUsers()

  return (
    <div>
      {users.map((value) => (
        <div key={value.id}>{value.email}</div>
      ))}
    </div>
  )
}

export default PostsPage
