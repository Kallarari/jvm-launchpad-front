import { Icon } from "@iconify/react"
import { Button } from "../Button"
import { Title, TitleWrapper, ButtonWrapper, TitleWrapperManage, ButtonManageTitle, TitleManage } from "./styles"

export const TitleAcervo = () => {

    return (
        <TitleWrapper>
            <Title> Acervo de Gratuito</Title>

            <ButtonWrapper>
                <Button $secondary title="Conhecer o projeto"/>
                <Button $secondary title="Fazer meu cadastro"/>

            </ButtonWrapper>
        </TitleWrapper>
    )
}

export const TitleAcervoManage = () => {
    
    return (
        <TitleWrapperManage>
            <ButtonManageTitle> <Icon icon="lucide:arrow-left" width="24" height="24" /> </ButtonManageTitle>

            <TitleManage>Configuração do Acervo de gratuito </TitleManage>

        </TitleWrapperManage>
    )
}