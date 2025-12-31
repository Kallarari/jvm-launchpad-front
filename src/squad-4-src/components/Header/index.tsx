import { Logo } from "../Logo";
import { User } from "../User";
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <User />
    </HeaderWrapper>
  );
};
