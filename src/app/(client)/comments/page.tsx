import { getAllComments } from '@/services/api.service'
import Link from 'next/link'

const CommentsPage = async () => {
  let comments = await getAllComments()

  return (
    <div>
      {comments.map((comment: any) => (
        <div key={comment.id}>
          <Link href={`/comments/${comment.id}`}>{comment.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default CommentsPage
