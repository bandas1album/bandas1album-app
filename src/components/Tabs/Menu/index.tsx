import { useEffect, useState } from 'react'
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
import { CardMenu } from '@/components/CardMenu'
import client from '@/graphql/client'
import { GetMenuCategoriesQuery } from '@/graphql/generated/graphql'
import { GET_MENU_CATEGORIES } from '@/graphql/queries'

export default function TabsMenu() {
  const [opened, setOpened] = useState(false)
  const [submenu, setSubmenu] = useState('albums')
  const [albums, setAlbums] = useState<GetMenuCategoriesQuery['albums']>()
  const [genres, setGenres] = useState<GetMenuCategoriesQuery['genres']>()
  const [countries, setCountries] =
    useState<GetMenuCategoriesQuery['countries']>()

  useEffect(() => {
    if (!opened) {
      client
        .query({ query: GET_MENU_CATEGORIES })
        .then((response) => {
          const data = response.data as GetMenuCategoriesQuery
          setAlbums(data.albums)
          setGenres(data.genres)
          setCountries(data.countries)
        })
        .catch((error) => console.error(error))
    }

    return () => {
      setOpened(true)
    }
  }, [opened])

  return (
    <MenuNav>
      <MenuList>
        {albums?.data?.length ? (
          <li>
            <MenuTitle
              onClick={() => setSubmenu('albums')}
              onBlur={() => setSubmenu('')}
              $isActive={submenu === 'albums'}
            >
              <span>Álbuns</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu hidden>
              {albums?.data.map((album) => (
                <li key={album.id}>
                  <Link
                    prefetch={false}
                    href={`/album/${album.attributes?.slug}`}
                  >
                    <CardMenu
                      image={
                        album.attributes?.cover.data?.attributes?.url || ''
                      }
                      title={album.attributes?.title || ''}
                      subtitle={album?.attributes?.artist || ''}
                    />
                  </Link>
                </li>
              ))}
            </Submenu>
          </li>
        ) : (
          ''
        )}

        {countries?.data.length ? (
          <li>
            <MenuTitle
              onClick={() => setSubmenu('genres')}
              onBlur={() => setSubmenu('')}
              $isActive={submenu === 'genres'}
            >
              <span>Gêneros</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu hidden>
              {genres?.data.map((genre) => (
                <li key={genre.id}>
                  <Link href={`/genero/${genre.attributes?.slug}`}>
                    <CardMenu title={genre.attributes?.title || ''} />
                  </Link>
                </li>
              ))}
            </Submenu>
          </li>
        ) : (
          ''
        )}

        {countries?.data.length ? (
          <li>
            <MenuTitle
              onClick={() => setSubmenu('countries')}
              onBlur={() => setSubmenu('')}
              $isActive={submenu === 'countries'}
            >
              <span>Países</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu hidden>
              {countries?.data.map((country) => (
                <li key={country.id}>
                  <Link href={`/pais/${country.attributes?.slug}`}>
                    <CardMenu title={country.attributes?.title || ''} />
                  </Link>
                </li>
              ))}
            </Submenu>
          </li>
        ) : (
          ''
        )}
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
