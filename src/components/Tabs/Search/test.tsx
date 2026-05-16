import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TabsSearch from '.'

describe('<TabsSearch/>', () => {
  it('should render the component', () => {
    const client = new QueryClient({
      defaultOptions: { queries: { retry: false } }
    })
    render(
      <QueryClientProvider client={client}>
        <TabsSearch focus={false} />
      </QueryClientProvider>
    )
  })
})
