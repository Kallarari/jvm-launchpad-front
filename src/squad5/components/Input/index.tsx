import { Icon } from "@iconify/react";
import { InputContainer, InputText, InputTitle, HelpText, InputFileWrapper } from "./styles";
import type { IInput } from "./types";

export function Input({ helperText, title, ...rest }: IInput) {
    return (
        <InputContainer>
            <InputTitle > {title} </InputTitle>
            <InputText {...rest} />
            {helperText &&
                <HelpText>
                    <Icon icon="mingcute:alert-fill" width="16px" height="16px" /> {helperText}
                </HelpText>
            }
        </InputContainer>
    )
}

export function InputFile({...rest}:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> ) {
    
    return (
        <InputFileWrapper {...rest} />
    )
}
