import { fireEvent, render, screen } from '@testing-library/react'

import Tabs from '.'

describe('<Tabs/>', () => {
  it('should render the component', () => {
    render(<Tabs />)
  })

  it('should open tab search on clicking search icon', async () => {
    render(<Tabs />)

    fireEvent.click(screen.getByLabelText('Abrir aba de busca'))

    const tab = await screen.getByLabelText('Aba de busca')

    expect(tab.getAttribute('aria-expanded')).toEqual('true')
  })

  it('should close tab search on clicking search icon', async () => {
    render(<Tabs />)

    fireEvent.click(screen.getByLabelText('Abrir aba de busca'))

    fireEvent.click(screen.getByLabelText('Fechar aba de busca'))

    const tab = await screen.getByLabelText('Aba de busca')

    expect(tab.getAttribute('aria-expanded')).toEqual('false')
  })

  it('should open tab menu on clicking menu icon', async () => {
    render(<Tabs />)

    fireEvent.click(screen.getByLabelText('Abrir aba de menu'))

    const tab = await screen.getByLabelText('Aba de menu')

    expect(tab.getAttribute('aria-expanded')).toEqual('true')
  })

  it('should close tab menu on clicking menu icon', async () => {
    render(<Tabs />)

    fireEvent.click(screen.getByLabelText('Abrir aba de menu'))

    fireEvent.click(screen.getByLabelText('Fechar aba de menu'))

    const tab = await screen.getByLabelText('Aba de menu')

    expect(tab.getAttribute('aria-expanded')).toEqual('false')
  })

  it('should close search tab on clicking logo', async () => {
    render(<Tabs />)

    fireEvent.click(screen.getByLabelText('Voltar para a homepage'))

    const tabSearch = await screen.getByLabelText('Aba de menu')
    expect(tabSearch.getAttribute('aria-expanded')).toEqual('false')
  })

  it('should close menu tab on clicking logo', async () => {
    render(<Tabs />)

    fireEvent.click(screen.getByLabelText('Voltar para a homepage'))

    const tabMenu = await screen.getByLabelText('Aba de menu')

    expect(tabMenu.getAttribute('aria-expanded')).toEqual('false')
  })
})
