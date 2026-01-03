export type TCreateUserParams = {
  name: string
  username: string
  email: string
  password: string
}
export type TCreateUserResponse = {
  id: number
  message: string
}
