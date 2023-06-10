import { render, screen } from '@testing-library/react'

import CardAlbum from '.'

describe('<CardAlbum />', () => {
  it('should render the component', () => {
    render(<CardAlbum url="/album/" />)
  })

  it('should show logo if not pass image', () => {
    render(<CardAlbum url="/album/" />)

    expect(screen.getByRole('img').getAttribute('src')).toEqual('logo.svg')
  })

  it('should show album image if passed', () => {
    render(<CardAlbum url="/album/" image="album.png" />)

    expect(screen.getByRole('img').getAttribute('src')).toEqual('album.png')
  })

  it('should has album link', () => {
    render(<CardAlbum url="/album" />)

    expect(screen.getByRole('link').getAttribute('href')).toEqual('/album')
  })
})
