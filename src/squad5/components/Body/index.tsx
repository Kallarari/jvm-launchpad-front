import { BodyContainer } from "./styles";
import type { IBody } from "./types";

export function Body({ children }: IBody) {
    return (
        <BodyContainer>
            {children}
        </BodyContainer>

    )
}