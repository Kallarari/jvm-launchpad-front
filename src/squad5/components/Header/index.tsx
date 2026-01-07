import { HeaderContainer } from "./styles";
import type { IHeader } from "./types";

export function Header({ children }: IHeader) {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>

    )
}
