
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { Card } from '../Card'

describe('Card', () => {
    it('deve renderizar o título corretamente', () => {
        render(<Card title="Título do Card" subtitle="Subtítulo do Card" />)
        expect(screen.getByText('Título do Card')).toBeInTheDocument()
    })

    it('deve renderizar o conteúdo passado como children', () => {
        render(
            <Card title="Card" subtitle="Subtítulo">
                <p>Conteúdo do Card</p>
            </Card>
        )
        expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument()
    })

    it('deve aplicar a classe customizada se fornecida', () => {
    render(<Card title="Card" subtitle="Subtítulo" className="custom-class" />)
    expect(screen.getByTestId('card-container')).toHaveClass('custom-class')
})
})
