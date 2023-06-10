import { render, screen } from '@testing-library/react'
import ListAlbums from '.'

describe('<ListAlbums />', () => {
  it('should render the component', () => {
    render(<ListAlbums items={[]} />)
  })

  it('should render the card item', () => {
    const album = {
      artist: '4 Cabeça',
      cover: '4-cabeca.png',
      slug: '4-cabeca',
      title: '4 Cabeça'
    }

    render(<ListAlbums items={[album]} />)

    expect(screen.getByTitle(/4 cabeça/i)).toBeInTheDocument()
  })

  it('should render with more than one card item', () => {
    const album = {
      artist: '4 Cabeça',
      cover: '4-cabeca.png',
      slug: '4-cabeca',
      title: '4 Cabeça'
    }

    const album2 = {
      artist: 'Action',
      cover: 'action.png',
      slug: 'action',
      title: 'Action'
    }

    render(<ListAlbums items={[album, album2]} />)

    expect(screen.getByTitle(/4 cabeça/i)).toBeInTheDocument()
    expect(screen.getByTitle(/action/i)).toBeInTheDocument()
  })
})
