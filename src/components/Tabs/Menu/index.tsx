import { useState } from 'react'
import {
  MenuFooter,
  MenuList,
  MenuNav,
  MenuSocial,
  MenuTitle,
  Submenu
} from './styles'
import Link from 'next/link'
import { Spotify, Instagram } from '@styled-icons/fa-brands'
import { ChevronDownCircle } from '@styled-icons/ionicons-outline'
import { CardMenu, CardMenuProps } from '@/components/CardMenu'

export default function TabsMenu() {
  const [submenu, setSubmenu] = useState('albums')
  const categories = [
    {
      slug: 'albums',
      title: 'Álbuns',
      list: [
        {
          title: '4 Cabeça'
        }
      ]
    },
    {
      slug: 'genres',
      title: 'Gêneros',
      list: [
        {
          title: '4 Cabeça'
        }
      ]
    },
    {
      slug: 'countries',
      title: 'Países',
      list: [
        {
          title: '4 Cabeça'
        }
      ]
    },
    {
      slug: 'released',
      title: 'Ano de lançamento',
      list: [
        {
          title: '4 Cabeça'
        }
      ]
    }
  ]

  return (
    <MenuNav>
      <MenuList>
        {categories.map((category, index) => (
          <li key={index}>
            <MenuTitle
              onClick={() => setSubmenu(category.slug)}
              $isActive={submenu === category.slug}
            >
              <span>{category.title}</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu hidden>
              {category.list.map((album: CardMenuProps, index) => (
                <li key={index}>
                  <CardMenu
                    image={album?.image}
                    title={album?.title}
                    subtitle={album?.subtitle}
                  />
                </li>
              ))}
            </Submenu>
          </li>
        ))}
      </MenuList>

      <MenuFooter>
        <strong>Bandas 1 Álbum © 2023</strong>

        <ul>
          <li>
            <Link href="/termos">Termos</Link>
          </li>
          <li>
            <Link href="/privacidade">Privacidade</Link>
          </li>
        </ul>
      </MenuFooter>

      <MenuSocial>
        <li>
          <a
            href="https://instagram.com/bandas1album"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/ryyq8vjpuf4vgfgll9zoecplr?si=09LFT22HQaaRIgfIkIatEw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotify />
          </a>
        </li>
      </MenuSocial>
    </MenuNav>
  )
}
