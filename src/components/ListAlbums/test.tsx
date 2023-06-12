import { render, screen } from '@testing-library/react'
import ListAlbums from '.'

describe('<ListAlbums />', () => {
  it('should render the component', () => {
    render(<ListAlbums albums={[]} />)
  })

  it('should render the card item', () => {
    const album = {
      id: '0',
      artist: '4 Cabeça',
      cover: {
        url: '4-cabeca.png'
      },
      slug: '4-cabeca',
      title: '4 Cabeça'
    }

    render(<ListAlbums albums={[album]} />)

    expect(screen.getByTitle(/4 cabeça/i)).toBeInTheDocument()
  })

  it('should render with more than one card item', () => {
    const album = {
      artist: '4 Cabeça',
      cover: {
        url: '4-cabeca.png'
      },
      slug: '4-cabeca',
      title: '4 Cabeça'
    }

    const album2 = {
      artist: 'Action',
      cover: {
        url: 'action.png'
      },
      slug: 'action',
      title: 'Action'
    }

    render(<ListAlbums albums={[album, album2]} />)

    expect(screen.getByTitle(/4 cabeça/i)).toBeInTheDocument()
    expect(screen.getByTitle(/action/i)).toBeInTheDocument()
  })
})
