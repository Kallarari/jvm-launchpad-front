import {
  SearchBarContainer,
  SearchBarWrapper,
  SearchIcon,
  SearchInput,
  SearchLabel,
} from "./styles";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchLabel>Pesquisar por nome</SearchLabel>
      <SearchBarWrapper>
        <SearchInput />
        <SearchIcon icon="material-symbols:search-rounded" />
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
