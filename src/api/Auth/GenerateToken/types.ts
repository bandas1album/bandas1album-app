export type TGenerateTokenParams = {
  username: string
  password: string
}

export type TGenerateTokenResponse = {
  token: string
  user_email: string
  user_nicename: string
  user_display_name: string
}
