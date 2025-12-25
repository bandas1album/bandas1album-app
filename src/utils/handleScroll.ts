export const handleScroll = (el: EventTarget, fn: () => void) => {
  const $list = el as HTMLUListElement
  const isEnd = $list.scrollTop + $list.clientHeight >= $list.scrollHeight
  if (isEnd) {
    fn()
  }
}
