export const isMiddleOnScroll = (element: HTMLElement): boolean => {
  const listPosition = element.scrollTop + element.clientHeight
  const listTotal = element.scrollHeight

  if ((listPosition / listTotal) * 100 > 50) {
    return true
  }

  return false
}
