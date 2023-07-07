import { render } from '@testing-library/react'
import ListAlbums from '.'

describe('<ListAlbums />', () => {
  it('should render the component', () => {
    render(<ListAlbums albums={[]} handleScroll={() => ''} />)
  })
})
