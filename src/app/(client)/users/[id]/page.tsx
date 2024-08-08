import { getUserById, getUserPosts } from '@/services/api.service'
import Link from 'next/link'

const UserPage = async ({ params }: { params: { id: string } }) => {
  const user = await getUserById(params.id)
  const posts = await getUserPosts(params.id)

  return (
    <div>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <h2>Posts by {user.username}:</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage
