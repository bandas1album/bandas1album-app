import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Tabs from '.'

const renderTabs = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: { retry: false }
    }
  })
  return render(
    <QueryClientProvider client={client}>
      <Tabs />
    </QueryClientProvider>
  )
}

describe('<Tabs/>', () => {
  it('should render the component', () => {
    renderTabs()
  })

  it('should open tab search on clicking search icon', async () => {
    renderTabs()

    const openButton = screen.getByLabelText('Abrir aba de busca')
    expect(openButton.getAttribute('aria-controls')).toEqual(
      'tabs-panel-search'
    )
    expect(openButton.getAttribute('aria-expanded')).toEqual('false')

    fireEvent.click(openButton)

    const tab = screen.getByLabelText('Aba de busca')
    expect(tab).not.toHaveAttribute('hidden')
    expect(screen.getByLabelText('Fechar aba de busca').getAttribute('aria-expanded')).toEqual(
      'true'
    )
  })

  it('should close tab search on clicking search icon', async () => {
    renderTabs()

    fireEvent.click(screen.getByLabelText('Abrir aba de busca'))
    fireEvent.click(screen.getByLabelText('Fechar aba de busca'))

    expect(screen.getByLabelText('Abrir aba de busca').getAttribute('aria-expanded')).toEqual(
      'false'
    )
    expect(document.getElementById('tabs-panel-search')).toHaveAttribute('hidden')
  })

  it('should open tab menu on clicking menu icon', async () => {
    renderTabs()

    const openButton = screen.getByLabelText('Abrir aba de menu')
    expect(openButton.getAttribute('aria-controls')).toEqual('tabs-panel-menu')

    fireEvent.click(openButton)

    const tab = screen.getByLabelText('Aba de menu')
    expect(tab).not.toHaveAttribute('hidden')
    expect(screen.getByLabelText('Fechar aba de menu').getAttribute('aria-expanded')).toEqual(
      'true'
    )
  })

  it('should close tab menu on clicking menu icon', async () => {
    renderTabs()

    fireEvent.click(screen.getByLabelText('Abrir aba de menu'))
    fireEvent.click(screen.getByLabelText('Fechar aba de menu'))

    expect(screen.getByLabelText('Abrir aba de menu').getAttribute('aria-expanded')).toEqual(
      'false'
    )
    expect(document.getElementById('tabs-panel-menu')).toHaveAttribute('hidden')
  })

  it('should close search tab on clicking logo', async () => {
    renderTabs()

    fireEvent.click(screen.getByLabelText('Abrir aba de busca'))
    fireEvent.click(screen.getByLabelText('Voltar para a homepage'))

    expect(screen.getByLabelText('Abrir aba de busca').getAttribute('aria-expanded')).toEqual(
      'false'
    )
  })

  it('should close menu tab on clicking logo', async () => {
    renderTabs()

    fireEvent.click(screen.getByLabelText('Abrir aba de menu'))
    fireEvent.click(screen.getByLabelText('Voltar para a homepage'))

    expect(screen.getByLabelText('Abrir aba de menu').getAttribute('aria-expanded')).toEqual(
      'false'
    )
  })

  it('should close open tab on Escape', () => {
    renderTabs()

    fireEvent.click(screen.getByLabelText('Abrir aba de busca'))
    expect(screen.getByLabelText('Fechar aba de busca').getAttribute('aria-expanded')).toEqual(
      'true'
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.getByLabelText('Abrir aba de busca').getAttribute('aria-expanded')).toEqual(
      'false'
    )
    expect(document.getElementById('tabs-panel-search')).toHaveAttribute('hidden')
  })
})
