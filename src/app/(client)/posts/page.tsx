import { getAllPosts } from '@/services/api.service'
import Link from 'next/link'

const PostsPage = async () => {
  let posts = await getAllPosts()

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default PostsPage
