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
import {
  Album,
  Country,
  Genre,
  GetMenuCategoriesQuery,
  Released
} from '@/graphql/generated/graphql'
import { GET_MENU_CATEGORIES } from '@/graphql/queries'

export default function TabsMenu() {
  const [opened, setOpened] = useState(false)
  const [submenu, setSubmenu] = useState('albums')
  const [albums, setAlbums] = useState<Album[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [releases, setReleases] = useState<Released[]>([])

  useEffect(() => {
    if (!opened) {
      client
        .request<GetMenuCategoriesQuery>(GET_MENU_CATEGORIES)
        .then((response) => {
          setAlbums(response.albums)
          setGenres(response.genres)
          setCountries(response.countries)
          setReleases(response.releases)
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
        <li>
          <MenuTitle
            onClick={() => setSubmenu('albums')}
            $isActive={submenu === 'albums'}
          >
            <span>Álbuns</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu hidden>
            {albums?.map((album) => (
              <li key={album.id}>
                <Link href={`/album/${album.slug}`}>
                  <CardMenu
                    image={album.cover.url}
                    title={album.title}
                    subtitle={album?.artist}
                  />
                </Link>
              </li>
            ))}
          </Submenu>
        </li>
        <li>
          <MenuTitle
            onClick={() => setSubmenu('genres')}
            $isActive={submenu === 'genres'}
          >
            <span>Gêneros</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu hidden>
            {genres?.map((genre) => (
              <li key={genre.id}>
                <Link href={`/genero/${genre.slug}`}>
                  <CardMenu title={genre.title} />
                </Link>
              </li>
            ))}
          </Submenu>
        </li>
        <li>
          <MenuTitle
            onClick={() => setSubmenu('countries')}
            $isActive={submenu === 'countries'}
          >
            <span>Países</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu hidden>
            {countries?.map((country) => (
              <li key={country.id}>
                <Link href={`/pais/${country.slug}`}>
                  <CardMenu title={country.title} />
                </Link>
              </li>
            ))}
          </Submenu>
        </li>
        <li>
          <MenuTitle
            onClick={() => setSubmenu('releases')}
            $isActive={submenu === 'releases'}
          >
            <span>Ano de lançamento</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu hidden>
            {releases?.map((year) => (
              <li key={year.id}>
                <Link href={`/ano/${year.title}`}>
                  <CardMenu title={year.title} />
                </Link>
              </li>
            ))}
          </Submenu>
        </li>
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
