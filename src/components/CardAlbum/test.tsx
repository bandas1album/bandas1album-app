import { render, screen } from '@testing-library/react'

import CardAlbum from '.'

describe('<CardAlbum />', () => {
  it('should render the component', () => {
    render(
      <CardAlbum artist="4 Cabeça" slug="4-cabeca" cover="" title="4 Cabeça" />
    )
  })

  it('should show logo if not pass image', () => {
    render(
      <CardAlbum artist="4 Cabeça" slug="4-cabeca" cover="" title="4 Cabeça" />
    )

    expect(screen.getByRole('img').getAttribute('src')).toEqual('logo.svg')
  })

  it('should show album image if passed', () => {
    render(
      <CardAlbum
        artist="4 Cabeça"
        slug="4-cabeca"
        cover="4-cabeca.png"
        title="4 Cabeça"
      />
    )

    expect(screen.getByRole('img').getAttribute('src')).toEqual('4-cabeca.png')
  })

  it('should has album link', () => {
    render(
      <CardAlbum artist="4 Cabeça" slug="4-cabeca" cover="" title="4 Cabeça" />
    )

    expect(screen.getByRole('link').getAttribute('href')).toEqual(
      '/album/4-cabeca'
    )
  })
})
