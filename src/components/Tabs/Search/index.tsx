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
        .request<GetAutocompleteBySearchQuery>(GET_AUTOCOMPLETE_BY_SEARCH, {
          search: search
        })
        .then((response) => {
          if (
            response.albums?.nodes.length ||
            response.countries?.nodes.length ||
            response.genres?.nodes.length ||
            response.releases?.nodes.length
          )
            return setAutocomplete(response)

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

      {autocomplete?.albums?.nodes.length ||
      autocomplete?.genres?.nodes.length ||
      autocomplete?.countries?.nodes.length ||
      autocomplete?.releases?.nodes.length ? (
        <SearchAutocomplete className="m-tabs-search__autocomplete">
          {autocomplete?.albums?.nodes.map((album) => (
            <li key={album.id}>
              <Link href={`/album/${album.slug}`}>
                Álbuns / <strong>{album.title}</strong>
              </Link>
            </li>
          ))}
          {autocomplete?.genres?.nodes.map((genre) => (
            <li key={genre.id}>
              <Link href={`/genero/${genre.slug}`}>
                Gêneros / <strong>{genre.title}</strong>
              </Link>
            </li>
          ))}
          {autocomplete?.countries?.nodes.map((country) => (
            <li key={country.id}>
              <Link href={`/pais/${country.slug}`}>
                Países / <strong>{country.title}</strong>
              </Link>
            </li>
          ))}
          {autocomplete?.releases?.nodes.map((released) => (
            <li key={released.id}>
              <Link href={`/lancamento/${released.title}`}>
                Lançamento / <strong>{released.title}</strong>
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
