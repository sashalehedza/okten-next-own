import { getPostById, getPostComments } from '@/services/api.service'

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(params.id)
  const comments = await getPostComments(params.id)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment: any) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostPage
