import { FooterContainer } from "./styles";
import type { IFooter } from "./types";

export function Footer({ children }: IFooter) {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>

    )
}
