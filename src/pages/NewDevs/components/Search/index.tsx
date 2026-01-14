import { Icon } from "@iconify/react";
import type { SearchBarProps } from "./interface";
import { SearchFiltersWrapper, SearchInputGroup, Label, Total, SearchFieldBox, Input } from "./styles";

export function SearchBar ({value, onChange, total}:SearchBarProps){
  return(
    <SearchFiltersWrapper>
      <Total>total: {total}</Total>
      <SearchInputGroup>
        <Label>Pesquisar nome</Label>
        <SearchFieldBox>
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <Icon icon="material-symbols:search-rounded" width="24px"   height="24px"/>
        </SearchFieldBox>
      </SearchInputGroup>
    </SearchFiltersWrapper>
  )
}