export const isMiddleOnScroll = (): boolean => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight
  const documentHeight = document.documentElement.scrollHeight

  const scrollPercentage = ((scrollTop + windowHeight) / documentHeight) * 100

  if (scrollPercentage >= 50) {
    return true
  }

  return false
}
