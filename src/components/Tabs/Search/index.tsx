import { useEffect, useState } from 'react'
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
import { GetAutocompleteBySearchQuery } from '@/graphql/generated/graphql'
import { GET_AUTOCOMPLETE_BY_SEARCH } from '@/graphql/queries'
import client from '@/graphql/client'
import Link from 'next/link'

export default function TabsSearch() {
  const [search, setSearch] = useState('')
  const [autocomplete, setAutocomplete] = useState<
    GetAutocompleteBySearchQuery | undefined
  >(undefined)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
    setAutocomplete(undefined)

    if (search.length) {
      client
        .query({
          query: GET_AUTOCOMPLETE_BY_SEARCH,
          variables: {
            search: {
              containsi: search
            }
          }
        })
        .then((response) => {
          const data = response.data as GetAutocompleteBySearchQuery

          if (
            data.albums?.data.length ||
            data.countries?.data.length ||
            data.genres?.data.length
          )
            return setAutocomplete(data)

          return setError(true)
        })
        .catch(() => setError(true))
    }
  }, [search])

  return (
    <SearchForm className="m-tabs-search">
      <SearchControl className="m-tabs-search__control">
        <SearchInput
          onChange={debounce((e) => setSearch(e.target.value), 500)}
          type="text"
          placeholder="Faça sua busca"
        />

        <SearchHelp
          type="button"
          className="m-tabs-search__help"
          aria-label="Você pode pesquisar por álbum, banda, gênero, país e ano de lançamento."
        >
          <HelpCircle />
        </SearchHelp>
      </SearchControl>

      {error ? (
        <SearchError>
          Não foi possível encontrar o álbum, país, gênero ou ano de lançamento
          buscado.
        </SearchError>
      ) : (
        ''
      )}

      {autocomplete?.albums?.data.length ||
      autocomplete?.genres?.data.length ||
      autocomplete?.countries?.data.length ? (
        <SearchAutocomplete className="m-tabs-search__autocomplete">
          {autocomplete?.albums?.data.map((album) => (
            <li key={album.id}>
              <Link href={`/album/${album.attributes?.slug}`}>
                Álbuns / <strong>{album?.attributes?.title}</strong>
              </Link>
            </li>
          ))}
          {autocomplete?.genres?.data.map((genre) => (
            <li key={genre.id}>
              <Link href={`/genero/${genre.attributes?.slug}`}>
                Gêneros / <strong>{genre.attributes?.title}</strong>
              </Link>
            </li>
          ))}
          {autocomplete?.countries?.data.map((country) => (
            <li key={country.id}>
              <Link href={`/pais/${country.attributes?.slug}`}>
                Países / <strong>{country.attributes?.title}</strong>
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
