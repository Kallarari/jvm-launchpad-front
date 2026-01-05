import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { Header } from '.'

describe('Header', () => {
  it('deve renderizar o conteúdo passado como children', () => {
    render(
      <Header>
        <h1>Meu Header</h1>
        <button>Botão</button>
      </Header>
    )
    expect(screen.getByText('Meu Header')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Botão' })).toBeInTheDocument()
  })
})