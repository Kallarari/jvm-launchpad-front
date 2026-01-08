
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

    it('deve verificar a cor do pseudo-elemento ::after', () => {
        render(<Button title='Botão' />);

        expect(screen.getByRole('button')).toHaveStyleRule(
            'background-color',
            '#e63946',
            { modifier: '::after' }
        );
    })
    it('deve aplicar a cor correta no ::after quando for secundário', () => {
        render(<Button title='Botão' $secondary />);

        expect(screen.getByRole('button')).toHaveStyleRule(
            'background-color',
            '#101010',
            { modifier: '::after' } // O segredo está no modifier
        );
    });

    it('deve ter opacidade 1 no ::before ao passar o mouse', () => {
        render(<Button title='Botão' />);

        expect(screen.getByRole('button')).toHaveStyleRule(
            'opacity',
            '1',
            { modifier: '&:hover::before' }
        );
    });
})