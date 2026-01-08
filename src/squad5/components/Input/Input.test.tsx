import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Input, InputFile } from './index'
import {
  InputContainer,
  InputText,
  InputTitle,
  HelpText,
  InputFileWrapper,
} from './styles'

describe('Input component', () => {
  it('deve renderizar o título corretamente', () => {
    render(<Input title="Email" />)

    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('deve renderizar o input de texto', () => {
    render(<Input title="Nome" placeholder="Digite seu nome" />)

    const input = screen.getByPlaceholderText('Digite seu nome')
    expect(input).toBeInTheDocument()
  })

  it('deve renderizar o helperText quando fornecido', () => {
    render(<Input title="Senha" helperText="Campo obrigatório" />)

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('não deve renderizar o helperText quando não fornecido', () => {
    render(<Input title="Usuário" />)

    expect(screen.queryByText(/Campo obrigatório/i)).not.toBeInTheDocument()
  })
})

describe('Input styled-components', () => {
  it('InputContainer deve possuir estilos base', () => {
    const { container } = render(<InputContainer />)

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column')
    expect(container.firstChild).toHaveStyleRule('gap', '10px')
    expect(container.firstChild).toHaveStyleRule('min-width', '306px')
  })

  it('InputText deve possuir estilos de input', () => {
    const { container } = render(<InputText />)

    expect(container.firstChild).toHaveStyleRule('border', 'solid 1px #E3E8EE')
    expect(container.firstChild).toHaveStyleRule('border-radius', '4px')
    expect(container.firstChild).toHaveStyleRule('background-color', '#FFFFFF')
    expect(container.firstChild).toHaveStyleRule('height', '36px')
    expect(container.firstChild).toHaveStyleRule('max-width', '306px')
  })

  it('InputTitle deve possuir estilos de label', () => {
    const { container } = render(<InputTitle />)

    expect(container.firstChild).toHaveStyleRule('font-size', '16px')
    expect(container.firstChild).toHaveStyleRule('color', '#f0f0f0')
    expect(container.firstChild).toHaveStyleRule('font-family', 'Goldman')
  })

  it('HelpText deve possuir estilos de erro', () => {
    const { container } = render(<HelpText />)

    expect(container.firstChild).toHaveStyleRule('font-size', '16px')
    expect(container.firstChild).toHaveStyleRule('color', '#CD3D64')
    expect(container.firstChild).toHaveStyleRule('font-family', 'Goldman')
  })
})

describe('InputFile component', () => {
  it('deve renderizar input do tipo file oculto', () => {
    const { container } = render(<InputFile type="file" />)

    expect(container.firstChild).toHaveStyleRule('visibility', 'hidden')
    expect(container.firstChild).toHaveStyleRule('position', 'absolute')
  })
})

describe('InputFileWrapper styled-component', () => {
  it('deve ser invisível na tela', () => {
    const { container } = render(<InputFileWrapper />)

    expect(container.firstChild).toHaveStyleRule('visibility', 'hidden')
    expect(container.firstChild).toHaveStyleRule('position', 'absolute')
  })
})