import { Body } from "../../components/Body"
import { Modal } from "../../components/Modal";
import { Input, InputFile } from "../../components/Input";
import { ModalContent, ModalFooter, ModalHeader, ModalWrapperContent } from "../../components/Modal/styles";
import { Button } from "../../components/Button";
import { z } from "zod";
import React, { useEffect, useRef, useState } from "react";
import type { IAcervo, IHttpResponse } from "../../interface";
import { getAcervo } from "../../mock";
import { CardsRow } from "../../components/Body/styles";
import { SecondaryCard, TertiaryCard, Card } from "../../components/Card";

const Schema = z.object({
    titulo: z.string().min(4, "Título tem que ter no minimo 5 digitos"),
    subtitulo: z.string().min(4, "Subtítulo tem que ter no minimo 5 digitos"),
    url: z.url('informe uma url válida')
})

const SchemaFile = z.object({
    titulo: z.string().min(4, "Título tem que ter no minimo 5 digitos"),
    subtitulo: z.string().min(4, "Subtítulo tem que ter no minimo 5 digitos"),
})

export function ManageAcervo() {
    const [acervoLista, setAcervoLista] = useState<IHttpResponse<IAcervo[]> | null>(null)
    const [fileData, setFileData] = useState<File | null>(null);
    const [isActive, setIsActive] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRefFile = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<z.core.$ZodIssue[]>([])
    const [material, setMaterial] = useState<z.infer<typeof Schema>>({
        titulo: '',
        subtitulo: '',
        url: ''
    })

    useEffect(() => {
        const listAcervo = async () => {
            setAcervoLista(await getAcervo())
        }
        listAcervo()
    }, [])

    function handleModal() {
        setIsActive(prev => !prev)

        setPreview(null)
        setMaterial((prev) => {
            return {
                ...prev,
                subtitulo: '',
                titulo: '',
                url: ''
            }
        }
        )
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        const materialFile = {
            titulo: material.titulo,
            subtitulo: material.subtitulo
        }
        const result = Schema.safeParse(material)
        const resultFile = SchemaFile.safeParse(materialFile)

        if (!result.success && !fileData) {
            const resultError = result.error.issues
            console.log(resultError)
            setErrors(resultError)
            setIsValid(false)
        }

        if (!resultFile.success && !!fileData) {
            const resultError = resultFile.error.issues
            setErrors(resultError)
            setIsValid(false)
        }

        if (result.success) {
            setErrors([])
            setIsValid(true)
        }

        if (resultFile.success) {
            setErrors([])
            setIsValid(true)
        }
        setMaterial((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    function hendleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);

    }

    function handleChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if (!file) return;

        setFileData(file)

    }

    const abrirSeletor = () => {
        inputRef.current?.click();
    };

    const abrirSeletorFile = () => {
        inputRefFile.current?.click();
    };

    function handleUpload() {
        if (!!material.url && !!fileData) {
            alert("Escolha entre o Link ou Upload")
            setIsValid(false)
        }
    }
    console.log(material.titulo.length)
    console.log('console !fileData: ', !fileData)
    return (
        <Body>

            <CardsRow>
                {!!acervoLista &&
                    acervoLista.body.map(({ id, titulo, subTitulo }) =>
                        <SecondaryCard key={id} title={titulo} subtitle={subTitulo} />
                    )
                }
                <TertiaryCard onClick={handleModal} />
            </CardsRow>

            <Modal isActive={isActive}>
                <ModalHeader  > Criar novo material de apoio </ModalHeader>
                <ModalWrapperContent>
                    <ModalContent>
                        <Input name="titulo" title="Titulo"
                            onChange={(event) => handleChange(event)}
                            helperText={
                                errors.filter(x => x.path.includes('titulo'))
                                    .map(x => x.message).toString()}
                        />
                        <Card title={material.titulo}
                            subtitle={material.subtitulo}
                            backgroundImage={preview ? preview : undefined}
                        />

                    </ModalContent>

                    <ModalContent>
                        <Input name='subtitulo' title="subtitulo"
                            onChange={(event) => handleChange(event)}
                            helperText={errors.filter(x => x.path.includes('subtitulo'))
                                .map(x => x.message).toString()}
                        />
                        <InputFile type="file"
                            name="conteudo"
                            ref={inputRefFile}
                            onChange={handleChangeFile}
                        />
                        <Button title="Fazer upload do conteúdo"
                            onClick={abrirSeletorFile}
                        />

                        <Input name='url' title="Link do material"
                            onChange={(event) => handleChange(event)}
                            helperText={!fileData ?
                                errors.filter(x => x.path.includes('url'))
                                    .map(x => x.message).toString()
                                : ''
                            }
                            disabled={!!fileData}
                        />

                        <InputFile type="file"
                            name="image"
                            accept="image/*"
                            onChange={hendleChangeImage}
                            ref={inputRef}
                        />
                        <Button title="Fazer upload da capa"
                            onClick={abrirSeletor}
                        />

                    </ModalContent>

                </ModalWrapperContent>

                <ModalFooter >
                    <Button title="Cancelar" onClick={handleModal} />
                    <Button $secondary title="Salvar" disabled={!isValid}
                        onClick={handleUpload}
                    />
                </ModalFooter>

            </Modal>

        </Body>
    )
}