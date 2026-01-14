
import { Logo } from "../Logo";
import { User } from "../UserProfile";
import { TopBarContainer } from "./styles";

export function GlobalHeader (){
  return(
    <TopBarContainer>
      <Logo />
      <User />
    </TopBarContainer>
  )
}