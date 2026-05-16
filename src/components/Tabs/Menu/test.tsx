import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TabsMenu from '.'

describe('<TabsMenu />', () => {
  it('should render the component', () => {
    const client = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    })
    render(
      <QueryClientProvider client={client}>
        <TabsMenu />
      </QueryClientProvider>
    )
  })
})
