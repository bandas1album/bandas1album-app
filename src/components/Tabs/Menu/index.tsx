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
  AlbumEntity,
  CountryEntity,
  GenreEntity,
  GetMenuAlbumsQuery,
  GetMenuCountriesQuery,
  GetMenuGenresQuery
} from '@/graphql/generated/graphql'
import {
  GET_MENU_ALBUMS,
  GET_MENU_COUNTRIES,
  GET_MENU_GENRES
} from '@/graphql/queries'

export default function TabsMenu() {
  const [albums, setAlbums] = useState<AlbumEntity[]>([])
  const [albumsPage, setAlbumsPage] = useState<number | undefined>(1)
  const [albumsHasNextPage, setAlbumsHasNextPage] = useState<boolean>()
  const [albumsIsLoading, setAlbumsIsLoading] = useState<boolean>(false)
  const [genres, setGenres] = useState<GenreEntity[]>([])
  const [genresPage, setGenresPage] = useState(1)
  const [genresHasNextPage, setGenresHasNextPage] = useState<boolean>()
  const [genresIsLoading, setGenresIsLoading] = useState<boolean>(false)
  const [countries, setCountries] = useState<CountryEntity[]>([])
  const [countriesPage, setCountriesPage] = useState(1)
  const [countriesHasNextPage, setCountriesHasNextPage] = useState<boolean>()
  const [countriesIsLoading, setCountriesIsLoading] = useState<boolean>(false)

  const year = new Date().getFullYear()

  const getAlbums = (page = 1) => {
    setAlbumsIsLoading(true)
    client
      .query<GetMenuAlbumsQuery>({
        query: GET_MENU_ALBUMS,
        variables: {
          perPage: 10,
          page: page
        }
      })
      .then((response) => {
        const responseList = response.data.albums?.data as AlbumEntity[]
        setAlbums((current) => [...current, ...responseList])

        if (response.data.albums?.meta.pagination) {
          setAlbumsPage(response.data.albums?.meta.pagination.page)
          setAlbumsHasNextPage(
            response.data.albums?.meta.pagination.pageCount >
              response.data.albums?.meta.pagination.page
          )
        }
        setAlbumsIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setAlbumsIsLoading(false)
      })
  }

  const getGenres = (page = 1) => {
    setGenresIsLoading(true)
    client
      .query<GetMenuGenresQuery>({
        query: GET_MENU_GENRES,
        variables: {
          perPage: 10,
          page: page
        }
      })
      .then((response) => {
        const responseList = response.data.genres?.data as GenreEntity[]
        setGenres((current) => [...current, ...responseList])

        if (response.data.genres?.meta.pagination) {
          setGenresPage(response.data.genres?.meta.pagination.page)
          setGenresHasNextPage(
            response.data.genres?.meta.pagination.pageCount >
              response.data.genres?.meta.pagination.page
          )
        }
        setGenresIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setGenresIsLoading(false)
      })
  }

  const getCountries = (page = 1) => {
    setCountriesIsLoading(true)
    client
      .query<GetMenuCountriesQuery>({
        query: GET_MENU_COUNTRIES,
        variables: {
          perPage: 10,
          page: page
        }
      })
      .then((response) => {
        const responseList = response.data.countries?.data as CountryEntity[]
        setCountries((current) => [...current, ...responseList])

        if (response.data.countries?.meta.pagination) {
          setCountriesPage(response.data.countries?.meta.pagination.page)
          setCountriesHasNextPage(
            response.data.countries?.meta.pagination.pageCount >
              response.data.countries?.meta.pagination.page
          )
        }
        setCountriesIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setCountriesIsLoading(false)
      })
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
        <strong>Bandas 1 Álbum © {year}</strong>

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
