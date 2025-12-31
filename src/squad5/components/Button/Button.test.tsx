import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '.'

describe('Button component', () => {
    it('deve renderizar o texto corretamente', () => {
        render(<Button title='Salvar' />)

        expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument()
    })
    it('Chama o onClick quando clicado', () => {
        const onClick = vi.fn()

        render(<Button title='Enviar' onClick={onClick} />)

        fireEvent.click(screen.getByText('Enviar'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })
    it('Fica desabilitado quando a prop disabled é true', () => {
        render(<Button title='Enviar' disabled />)

        const button = screen.getByText('Enviar')
        expect(button).toBeDisabled()
    })

    it('Aplica estilo secundário quando $secondary é true', () => {
        render(<Button title='Enviar' $secondary />)

        const button = screen.getByText('Enviar')
        expect(button).toHaveStyle({
            backgroundColor: '#101010'
        })
    })
})