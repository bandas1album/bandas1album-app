import { HelpCircle } from '@styled-icons/ionicons-outline'
import {
  SearchAutocomplete,
  SearchControl,
  SearchForm,
  SearchHelp,
  SearchInput
} from './styles'

export default function TabsSearch() {
  return (
    <SearchForm className="m-tabs-search">
      <SearchControl className="m-tabs-search__control">
        <SearchInput type="text" placeholder="Faça sua busca" />

        <SearchHelp
          type="button"
          className="m-tabs-search__help"
          aria-label="Você pode pesquisar por álbum, banda, gênero e país."
        >
          <HelpCircle />
        </SearchHelp>
      </SearchControl>

      <SearchAutocomplete className="m-tabs-search__autocomplete">
        <li>
          Álbuns / <strong>Lorem</strong>
        </li>
        <li>
          Gêneros / <strong>Lorem</strong>
        </li>
        <li>
          País / <strong>Lorem</strong>
        </li>
        <li>
          Ano / <strong>Lorem</strong>
        </li>
      </SearchAutocomplete>
    </SearchForm>
  )
}
