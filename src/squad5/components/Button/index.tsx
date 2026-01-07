
import { ButtonContainer } from "./styles";
import type { IButton } from "./types";

export const Button = ({title, onClick, $secondary, disabled}:IButton) => {
    
    return(
        <ButtonContainer $secondary={$secondary} onClick={onClick} disabled={disabled} >
            {title}
        </ButtonContainer >
    )

}