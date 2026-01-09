import * as S from "./styles";
import { Input } from "@/feature-cadastro/components/Input"
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formCadastroSchema } from "./schema";
import type { CadastroTecnicoFormData } from "./schema";

export const FormCadastro = () => {
    
    const form = useForm<CadastroTecnicoFormData>({
        resolver: zodResolver(formCadastroSchema),
        mode: "onBlur",
    });

    return <S.Container>
        <FormProvider {...form}>

            <S.Form>
                <S.FormContainer>
                    <Input name="perfilDiscord" label="Perfil do discord" placeholder="Text" />
                    <Input name="nickname" label="Nome no discord(nickname)" placeholder="Text" />
                    <Input name="gitHub" label="Perfil no GitHub" placeholder="Text" />
                    <Input name="linkedin" label="Perfil no LinkedIn" placeholder="Text" />
                    <S.ContentPr>
                        <Input name="linkPr" label="Link do PR do projeto prático?" placeholder="Text" />
                        <S.InfoTest href="#" target="_blank" rel="noopener noreferrer">
                            O que é o teste prático?
                        </S.InfoTest>
                    </S.ContentPr>
                </S.FormContainer>
                <S.Submit type="submit">Confirmar e enviar</S.Submit>
            </S.Form>
        </FormProvider>
    </S.Container>;
}
