import { getAllUsers } from '@/services/api.service'
import Link from 'next/link'

const UsersPage = async () => {
  const allUsers = await getAllUsers()

  return (
    <div>
      <ul>
        {allUsers.map((user: any) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
