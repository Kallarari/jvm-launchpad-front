import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('renderiza o conteúdo passado como children', () => {
    render(
      <Footer>
        <span>Conteúdo do footer</span>
      </Footer>
    )

    expect(screen.getByText('Conteúdo do footer')).toBeInTheDocument()
  })
})
