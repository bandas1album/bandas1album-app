import Link from 'next/link'
import { TabsButton, TabsLogo, TabsPanel, TabsWrapper } from './styles'
import { Search, Menu } from '@styled-icons/ionicons-outline'

export default function Tabs() {
  return (
    <TabsPanel>
      <TabsWrapper>
        <TabsButton>
          <Search />
        </TabsButton>
        <Link href="/">
          <TabsLogo></TabsLogo>
        </Link>
        <TabsButton>
          <Menu />
        </TabsButton>
      </TabsWrapper>
    </TabsPanel>
  )
}
