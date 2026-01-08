import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import {
  TitleAcervo,
  TitleAcervoManage,
} from './index'

import {
  TitleWrapper,
  ButtonWrapper,
  Title,
  TitleWrapperManage,
  TitleManage,
  ButtonManageTitle,
} from './styles'

vi.mock('../Button', () => ({
  Button: ({ title }: { title: string }) => <button>{title}</button>,
}))

vi.mock('@iconify/react', () => ({
  Icon: () => <span data-testid="icon" />,
}))

describe('TitleAcervo component', () => {
  it('deve renderizar o título principal', () => {
    render(<TitleAcervo />)

    expect(
      screen.getByText('Acervo de Gratuito')
    ).toBeInTheDocument()
  })

  it('deve renderizar dois botões de ação', () => {
    render(<TitleAcervo />)

    expect(
      screen.getByText('Conhecer o projeto')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Fazer meu cadastro')
    ).toBeInTheDocument()
  })
})

describe('TitleAcervoManage component', () => {
  it('deve renderizar o botão de voltar com ícone', () => {
    render(<TitleAcervoManage />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('deve renderizar o título de gerenciamento', () => {
    render(<TitleAcervoManage />)

    expect(
      screen.getByText('Configuração do Acervo de gratuito')
    ).toBeInTheDocument()
  })
})

describe('TitleAcervo styled-components', () => {
  it('TitleWrapper deve possuir layout centralizado', () => {
    const { container } = render(<TitleWrapper />)

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column')
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
    expect(container.firstChild).toHaveStyleRule('width', '827px')
  })

  it('ButtonWrapper deve alinhar botões horizontalmente', () => {
    const { container } = render(<ButtonWrapper />)

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row')
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'safe center'
    )
    expect(container.firstChild).toHaveStyleRule('gap', '10%')
  })

  it('Title deve possuir tipografia correta', () => {
    const { container } = render(<Title />)

    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      "'Goldman', sans-serif"
    )
    expect(container.firstChild).toHaveStyleRule('font-size', '48px')
    expect(container.firstChild).toHaveStyleRule('color', '#fff')
    expect(container.firstChild).toHaveStyleRule('text-align', 'center')
  })
})

describe('TitleAcervoManage styled-components', () => {
  it('TitleWrapperManage deve ser layout horizontal', () => {
    const { container } = render(<TitleWrapperManage />)

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row')
    expect(container.firstChild).toHaveStyleRule('width', '827px')
  })

  it('TitleManage deve possuir largura maior', () => {
    const { container } = render(<TitleManage />)

    expect(container.firstChild).toHaveStyleRule('width', '561px')
    expect(container.firstChild).toHaveStyleRule('font-size', '48px')
  })

  it('ButtonManageTitle deve possuir estilos de botão primário', () => {
    const { container } = render(<ButtonManageTitle />)

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      '#e63946'
    )
    expect(container.firstChild).toHaveStyleRule('border-radius', '10px')
    expect(container.firstChild).toHaveStyleRule('width', '105px')
    expect(container.firstChild).toHaveStyleRule('height', '52px')
  })
})