import type { SearchBarProps } from "./interface";
import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchIcon,
  SearchInput,
  SearchLabel,
} from "./styles";

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const inputId = "search-name";

  return (
    <SearchBarContainer>
      <SearchLabel htmlFor={inputId}>Pesquisar por nome</SearchLabel>
      <SearchBarWrapper>
        <SearchInput
          id={inputId}
          name="searchName"
          type="text"
          value={value}
          onChange={onChange}
        />
        <SearchIcon icon="material-symbols:search-rounded" />
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
