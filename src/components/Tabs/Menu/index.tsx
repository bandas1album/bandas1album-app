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

export default function TabsMenu() {
  const [albums, setAlbums] = useState<any[]>([])
  const [albumsPage, setAlbumsPage] = useState<number | undefined>(1)
  const [albumsHasNextPage, setAlbumsHasNextPage] = useState<boolean>()
  const [albumsIsLoading, setAlbumsIsLoading] = useState<boolean>(false)
  const [genres, setGenres] = useState<any[]>([])
  const [genresPage, setGenresPage] = useState(1)
  const [genresHasNextPage, setGenresHasNextPage] = useState<boolean>()
  const [genresIsLoading, setGenresIsLoading] = useState<boolean>(false)
  const [countries, setCountries] = useState<any[]>([])
  const [countriesPage, setCountriesPage] = useState(1)
  const [countriesHasNextPage, setCountriesHasNextPage] = useState<boolean>()
  const [countriesIsLoading, setCountriesIsLoading] = useState<boolean>(false)

  const year = new Date().getFullYear()

  const getAlbums = (page = 1) => {
    // setAlbumsIsLoading(false)
  }

  const getGenres = (page = 1) => {
    // setGenresIsLoading(true)
  }

  const getCountries = (page = 1) => {
    // setCountriesIsLoading(true)
  }

  const handleScroll = (
    el: EventTarget,
    hasNextPage: boolean | undefined,
    fn: () => void
  ) => {
    const $list = el as HTMLUListElement
    const isEnd = $list.scrollTop + $list.clientHeight >= $list.scrollHeight
    if (isEnd && hasNextPage) {
      fn()
    }
  }

  useEffect(() => {
    getAlbums()
    getGenres()
    getCountries()
  }, [])

  return (
    <MenuNav>
      <MenuList>
        {albums?.length ? (
          <details>
            <MenuTitle>
              <span>Álbuns</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu
              $loading={albumsIsLoading}
              onScroll={(e) =>
                handleScroll(e.target, albumsHasNextPage, () => {
                  getAlbums(albumsPage && albumsPage + 1)
                })
              }
            >
              {albums?.map((album) => (
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
          </details>
        ) : (
          ''
        )}

        {countries?.length ? (
          <details>
            <MenuTitle>
              <span>Gêneros</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu
              $loading={genresIsLoading}
              onScroll={(e) =>
                handleScroll(e.target, genresHasNextPage, () => {
                  getGenres(genresPage && genresPage + 1)
                })
              }
            >
              {genres?.map((genre) => (
                <li key={genre.id}>
                  <Link href={`/genero/${genre.attributes?.slug}`}>
                    <CardMenu title={genre.attributes?.title || ''} />
                  </Link>
                </li>
              ))}
            </Submenu>
          </details>
        ) : (
          ''
        )}

        {countries?.length ? (
          <details>
            <MenuTitle>
              <span>Países</span>
              <ChevronDownCircle />
            </MenuTitle>

            <Submenu
              $loading={countriesIsLoading}
              onScroll={(e) =>
                handleScroll(e.target, countriesHasNextPage, () => {
                  getCountries(countriesPage && countriesPage + 1)
                })
              }
            >
              {countries?.map((country) => (
                <li key={country.id}>
                  <Link href={`/pais/${country.attributes?.slug}`}>
                    <CardMenu title={country.attributes?.title || ''} />
                  </Link>
                </li>
              ))}
            </Submenu>
          </details>
        ) : (
          ''
        )}
      </MenuList>

      <MenuFooter>
        <strong>Bandas de 1 Álbum © {year}</strong>
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
