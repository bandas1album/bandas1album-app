import { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { HelpCircle } from '@styled-icons/ionicons-outline'
import {
  SearchAutocomplete,
  SearchControl,
  SearchError,
  SearchForm,
  SearchHelp,
  SearchInput
} from './styles'
import Link from 'next/link'
import { useGetAlbumsSearch } from '@/api/Albums/GetAlbumsSearch'
import type { GetAlbumsSearchResponse } from '@/api/Albums/GetAlbumsSearch/types'

type SearchAlbum = NonNullable<
  NonNullable<NonNullable<GetAlbumsSearchResponse['data']>['albums']>[number]
>
type SearchGenre = NonNullable<
  NonNullable<NonNullable<GetAlbumsSearchResponse['data']>['genres']>[number]
>
type SearchCountry = NonNullable<
  NonNullable<NonNullable<GetAlbumsSearchResponse['data']>['countries']>[number]
>

export default function TabsSearch({ focus }: { focus: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const { refetch, data: autocomplete } = useGetAlbumsSearch(search)

  useEffect(() => {
    setError(false)

    if (search.length) {
      refetch()
        .then((res) => {
          if (
            !res.data?.data?.albums &&
            !res.data?.data?.genres &&
            !res.data?.data?.countries
          ) {
            setError(true)
          }
        })
        .catch(() => {
          setError(true)
        })
    }
  }, [search, refetch])

  useEffect(() => {
    inputRef.current?.focus()
  }, [focus])

  return (
    <SearchForm className="m-tabs-search">
      <SearchControl className="m-tabs-search__control">
        <SearchInput
          ref={inputRef}
          onChange={debounce((e) => setSearch(e.target.value), 500)}
          type="text"
          placeholder="Faça sua busca"
        />

        <SearchHelp
          type="button"
          className="m-tabs-search__help"
          title="Você pode pesquisar por álbum, banda/artista, gênero ou país."
        >
          <HelpCircle aria-hidden="true" />
        </SearchHelp>
      </SearchControl>

      {error ? (
        <SearchError>
          Não foi possível encontrar o álbum, banda/artista, gênero ou país
          buscado.
        </SearchError>
      ) : (
        ''
      )}

      {autocomplete?.data?.albums?.length ||
      autocomplete?.data?.genres?.length ||
      autocomplete?.data?.countries?.length ? (
        <SearchAutocomplete className="m-tabs-search__autocomplete">
          {autocomplete.data.albums?.map((album: SearchAlbum) => (
            <li key={album.slug}>
              <Link href={`/album/${album.slug}`}>
                Álbuns /{' '}
                <strong>
                  {album.title === album.artist
                    ? album.title
                    : `${album.artist} - ${album.title}`}
                </strong>
              </Link>
            </li>
          ))}
          {autocomplete.data.genres?.map((genre: SearchGenre) => (
            <li key={genre.slug}>
              <Link href={`/genre/${genre.slug}`}>
                Gêneros / <strong>{genre.title}</strong>
              </Link>
            </li>
          ))}
          {autocomplete.data.countries?.map((country: SearchCountry) => (
            <li key={country.slug}>
              <Link href={`/country/${country.slug}`}>
                País / <strong>{country.title}</strong>
              </Link>
            </li>
          ))}
        </SearchAutocomplete>
      ) : (
        ''
      )}
    </SearchForm>
  )
}
