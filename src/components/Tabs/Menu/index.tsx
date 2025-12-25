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
import { useGetMenu } from '@/api/GetMenu'
import { handleScroll } from '@/utils/handleScroll'

export default function TabsMenu() {
  const {
    data: albums,
    isFetching: albumsIsLoading,
    refetch: getAlbums,
    fetchNextPage: getAlbumsNextPage
  } = useGetMenu('album')
  const {
    data: genres,
    isFetching: genresIsLoading,
    refetch: getGenres,
    fetchNextPage: getGenresNextPage
  } = useGetMenu('genre')
  const {
    data: countries,
    isFetching: countriesIsLoading,
    refetch: getCountries,
    fetchNextPage: getCountriesNextPage
  } = useGetMenu('country')
  const {
    data: years,
    isFetching: yearsIsLoading,
    refetch: getYears,
    fetchNextPage: getYearsNextPage
  } = useGetMenu('released')

  const year = new Date().getFullYear()

  return (
    <MenuNav>
      <MenuList>
        <details onClick={() => getAlbums()}>
          <MenuTitle>
            <span>Álbuns</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu
            $loading={albumsIsLoading}
            onScroll={(e) => handleScroll(e.target, () => getAlbumsNextPage())}
          >
            {albums?.pages?.map((page) =>
              page.data?.map((album) => (
                <li key={album.slug}>
                  <Link prefetch={false} href={`/album/${album?.slug}`}>
                    <CardMenu
                      image={album.cover || ''}
                      title={album.title || ''}
                      subtitle={album?.artist || ''}
                    />
                  </Link>
                </li>
              ))
            )}
          </Submenu>
        </details>

        <details onClick={() => getGenres()}>
          <MenuTitle>
            <span>Gêneros</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu
            $loading={genresIsLoading}
            onScroll={(e) => handleScroll(e.target, () => getGenresNextPage())}
          >
            {genres?.pages.map((page) =>
              page.data?.map((genre) => (
                <li key={genre.slug}>
                  <Link href={`/genre/${genre.slug}`}>
                    <CardMenu title={genre.title || ''} />
                  </Link>
                </li>
              ))
            )}
          </Submenu>
        </details>

        <details onClick={() => getCountries()}>
          <MenuTitle>
            <span>País de lançamento</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu
            $loading={countriesIsLoading}
            onScroll={(e) =>
              handleScroll(e.target, () => getCountriesNextPage())
            }
          >
            {countries?.pages.map((page) =>
              page.data?.map((country) => (
                <li key={country.slug}>
                  <Link href={`/country/${country.slug}`}>
                    <CardMenu title={country?.title || ''} />
                  </Link>
                </li>
              ))
            )}
          </Submenu>
        </details>

        <details onClick={() => getYears()}>
          <MenuTitle>
            <span>Ano de lançamento</span>
            <ChevronDownCircle />
          </MenuTitle>

          <Submenu
            $loading={yearsIsLoading}
            onScroll={(e) => handleScroll(e.target, () => getYearsNextPage())}
          >
            {years?.pages.map((page) =>
              page.data?.map((year) => (
                <li key={year.slug}>
                  <Link href={`/year/${year.slug}`}>
                    <CardMenu title={year?.title || ''} />
                  </Link>
                </li>
              ))
            )}
          </Submenu>
        </details>
      </MenuList>

      {/* <MenuFooter>
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
      </MenuSocial> */}
    </MenuNav>
  )
}
