import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { Footer } from '.'

describe('Footer', () => {
    it('deve renderizar o conteúdo passado como children', () => {
        render(<Footer><span>Meu Footer</span></Footer>)
        expect(screen.getByText('Meu Footer')).toBeInTheDocument()
    })
})
