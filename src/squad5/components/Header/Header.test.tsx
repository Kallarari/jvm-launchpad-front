import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from '../Header'

describe('Header', () => {
  it('renderiza o conteúdo passado como children', () => {
    render(
      <Header>
        <span>Conteúdo do header</span>
      </Header>
    )

    expect(screen.getByText('Conteúdo do header')).toBeInTheDocument()
  })
})
