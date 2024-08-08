type Props = { children: React.ReactNode }

const UsersLayout = ({ children }: Props) => {
  return (
    <div>
      users layout start
      {children}
      users layout end
    </div>
  )
}

export default UsersLayout
