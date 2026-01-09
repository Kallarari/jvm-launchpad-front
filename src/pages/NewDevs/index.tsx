import { Icon } from "@iconify/react";
import { mockDevs } from "./mocks/users.mock";
import { DevCard } from "./components/DevCard";
import { SectionHeader } from "./components/SectionHeader";
import { ContainerPrincipal, NavigationSection, SearchWrapper, CardList } from "./styles.module";
import { SearchBar } from "./components/Search";
import { useDevsSearch } from "./hooks/useDevsSearch";
import { AppTemplate } from "./components/MainLayout";
import { GlobalHeader } from "./components/GlobalHeader";
import { Footer } from "./components/Footer";


export function NewDevsPage(){
  const {
    search,
    setSearch,
    filteredDevs,
    total
  } = useDevsSearch(mockDevs);
  
  return (
    <AppTemplate>
      <GlobalHeader />
      <ContainerPrincipal>
        <NavigationSection>
          <SectionHeader 
            titlePrimary="Novos Devs"
            leftIcon={<Icon icon="ep:back" width="50px" height="50px" />}
            rightLabel="Confirmar"  
          />
        </NavigationSection>
        <SearchWrapper>
          <SearchBar 
            total={total}
            value={search}
            onChange={setSearch}
          />
        </SearchWrapper>
        <CardList>
          {filteredDevs.map(dev => (
            <DevCard key={dev.id} dev={dev} />
          ))}
        </CardList>
      </ContainerPrincipal>
      <Footer />
    </AppTemplate>
  )
}