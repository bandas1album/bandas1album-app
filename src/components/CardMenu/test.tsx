import { render } from '@testing-library/react'

import { CardMenu } from '.'

describe('<CardMenu />', () => {
  it('should render the component', () => {
    render(
      <CardMenu
        title="4 Cabeça"
        subtitle="4-cabeca"
        image="https://cdn.host.com/4-cabeca.png"
      />
    )
  })
})
