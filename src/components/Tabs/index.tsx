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
import { useState } from 'react'
import TabsMenu from './Menu'

export default function Tabs() {
  const [openedTabs, setOpenedTabs] = useState({
    state: false,
    tab: ''
  })
  const isOpenedSearch = openedTabs.state && openedTabs.tab === 'search'
  const isOpenedMenu = openedTabs.state && openedTabs.tab === 'menu'

  return (
    <TabsPanel>
      <TabsItem
        aria-label="Aba de busca"
        aria-expanded={isOpenedSearch ? true : false}
        $opened={isOpenedSearch ? true : false}
      >
        <TabsSearch />
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
          onClick={() =>
            setOpenedTabs({
              state:
                openedTabs.tab === 'search' && openedTabs.state ? false : true,
              tab: 'search'
            })
          }
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
            setOpenedTabs({
              state:
                openedTabs.tab === 'menu' && openedTabs.state ? false : true,
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
