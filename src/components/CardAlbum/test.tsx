import { render, screen } from '@testing-library/react'

import CardAlbum from '.'

describe('<CardAlbum />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardAlbum />)

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
