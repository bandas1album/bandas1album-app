export type TGetUserResponse = {
  avatar: string
  email: string
  id: number
  name: string
  stats: {
    favorited: number
    listened: number
    published: number
  }
  username: string
}
