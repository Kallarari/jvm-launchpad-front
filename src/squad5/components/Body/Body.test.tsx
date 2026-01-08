import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Body } from './index'
import { BodyContainer } from './styles'

vi.mock('../../Assets/Brackground.png', () => ({
  default: 'mocked-background.png',
}))

describe('Body component', () => {
  it('deve renderizar os children corretamente', () => {
    render(
      <Body>
        <span>Conteúdo interno</span>
      </Body>
    )

    expect(screen.getByText('Conteúdo interno')).toBeInTheDocument()
  })
})

describe('BodyContainer styled-component', () => {
  it('deve possuir estilos base de layout', () => {
    const { container } = render(<BodyContainer />)

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column')
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
    expect(container.firstChild).toHaveStyleRule('min-height', '100vh')
    expect(container.firstChild).toHaveStyleRule('width', '100%')
  })

  it('deve possuir propriedades de background', () => {
    const { container } = render(<BodyContainer />)

    expect(container.firstChild).toHaveStyleRule(
      'background-repeat',
      'no-repeat'
    )
    expect(container.firstChild).toHaveStyleRule('background-size', 'cover')
    expect(container.firstChild).toHaveStyleRule(
      'background-attachment',
      'fixed'
    )
    expect(container.firstChild).toHaveStyleRule(
      'background-position',
      'center'
    )
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      '#000000'
    )
  })

  it('deve aplicar a fonte padrão do layout', () => {
    const { container } = render(<BodyContainer />)

    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      '"Goldman", sans-serif'
    )
    expect(container.firstChild).toHaveStyleRule(
      '-webkit-font-smoothing',
      'antialiased'
    )
  })
})