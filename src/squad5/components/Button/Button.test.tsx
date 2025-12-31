import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '.'

describe('Button', () => {
    it('deve renderizar corretamente', () => {
        render(<Button title='Salvar' />)
        
        expect(screen.getByRole('button', {name: 'Salvar'})).toBeInTheDocument()
    })
    
})