import type { SearchBarProps } from "./interface";
import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchIcon,
  SearchInput,
  SearchLabel,
} from "./styles";

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchLabel>Pesquisar por nome</SearchLabel>
      <SearchBarWrapper>
        <SearchInput type="text" value={value} onChange={onChange} />
        <SearchIcon icon="material-symbols:search-rounded" />
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
