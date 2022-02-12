export const fectchUser = () => {
  const userInfo = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

  return userInfo
}
