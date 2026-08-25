import Link from 'next/link'
import {
  TabsButton,
  TabsItem,
  TabsLogo,
  TabsPanel,
  TabsWrapper
} from './styles'
import { Search, Menu } from '@styled-icons/ionicons-outline'
import TabsSearch from './Search'
import { useEffect, useState } from 'react'
import TabsMenu from './Menu'
import { gaEvent } from '@/lib/gtag'

export default function Tabs() {
  const [openedTabs, setOpenedTabs] = useState({
    state: false,
    tab: ''
  })
  const isOpenedSearch = openedTabs.state && openedTabs.tab === 'search'
  const isOpenedMenu = openedTabs.state && openedTabs.tab === 'menu'

  // Mantém o painel acima do teclado virtual no mobile. Quando o teclado abre,
  // apenas o visual viewport encolhe (não o layout viewport), então o painel
  // ancorado no rodapé fica escondido atrás do teclado. Aqui medimos a altura
  // do teclado e expomos como uma CSS var usada no `bottom` do TabsPanel.
  useEffect(() => {
    const vv = window.visualViewport
    if (!vv) return

    const update = () => {
      const keyboard = Math.max(
        0,
        window.innerHeight - vv.height - vv.offsetTop
      )
      document.documentElement.style.setProperty(
        '--keyboard-offset',
        `${keyboard}px`
      )
    }

    vv.addEventListener('resize', update)
    vv.addEventListener('scroll', update)
    update()

    return () => {
      vv.removeEventListener('resize', update)
      vv.removeEventListener('scroll', update)
      document.documentElement.style.removeProperty('--keyboard-offset')
    }
  }, [])

  return (
    <TabsPanel>
      <TabsItem
        aria-label="Aba de busca"
        aria-expanded={isOpenedSearch ? true : false}
        $opened={isOpenedSearch ? true : false}
      >
        <TabsSearch focus={isOpenedSearch} />
      </TabsItem>
      <TabsItem
        aria-label="Aba de menu"
        aria-expanded={isOpenedMenu ? true : false}
        $opened={isOpenedMenu ? true : false}
      >
        <TabsMenu />
      </TabsItem>
      <TabsWrapper $opened={openedTabs.state}>
        <TabsButton
          aria-label={
            isOpenedSearch ? 'Fechar aba de busca' : 'Abrir aba de busca'
          }
          onClick={() => {
            const closing = openedTabs.tab === 'search' && openedTabs.state
            if (!closing) {
              gaEvent('open_panel', { panel: 'search' })
            }
            setOpenedTabs({
              state: closing ? false : true,
              tab: 'search'
            })
          }}
          $active={isOpenedSearch}
        >
          <Search aria-hidden="true" />
        </TabsButton>
        <Link
          aria-label="Voltar para a homepage"
          href="/"
          onClick={() =>
            setOpenedTabs({
              state: false,
              tab: ''
            })
          }
        >
          <TabsLogo></TabsLogo>
        </Link>
        <TabsButton
          aria-label={isOpenedMenu ? 'Fechar aba de menu' : 'Abrir aba de menu'}
          onClick={() => {
            const closing = openedTabs.tab === 'menu' && openedTabs.state
            if (!closing) {
              gaEvent('open_panel', { panel: 'menu' })
            }
            setOpenedTabs({
              state: closing ? false : true,
              tab: 'menu'
            })
          }}
          $active={isOpenedMenu}
        >
          <Menu aria-hidden="true" />
        </TabsButton>
      </TabsWrapper>
    </TabsPanel>
  )
}
