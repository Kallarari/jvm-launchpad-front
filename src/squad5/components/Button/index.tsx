
import { ButtonContainer } from "./styles";
import type { IButton } from "./types";

export const Button = ({title, onClick, $secondary}:IButton) => {
    
    return(
        <ButtonContainer $secondary={$secondary} onClick={onClick} >
            {title}
        </ButtonContainer >
    )

}