import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import {ModalBody,
  ModalFooter,
  ModalHeader,
  ModalWrapperContent,
  ModalContent,
  DividerContainer,
    DividerText
} from './styles'
  
describe('Modal styled-components', () => {
  describe('ModalBody', () => {
    it('deve renderizar com display none quando isActive=false', () => {
      const { container } = render(<ModalBody isActive={false} />)

      expect(container.firstChild).toHaveStyleRule('display', 'none')
    })

    it('deve renderizar com display grid quando isActive=true', () => {
      const { container } = render(<ModalBody isActive />)

      expect(container.firstChild).toHaveStyleRule('display', 'grid')
    })

    it('deve possuir estilos base corretamente', () => {
      const { container } = render(<ModalBody isActive />)

      expect(container.firstChild).toHaveStyleRule('width', '737px')
      expect(container.firstChild).toHaveStyleRule('height', '597px')
      expect(container.firstChild).toHaveStyleRule('background-color', '#101010')
      expect(container.firstChild).toHaveStyleRule('border-radius', '10px')
      expect(container.firstChild).toHaveStyleRule('position', 'absolute')
    })
  })

  describe('ModalHeader', () => {
    it('deve renderizar com estilos de header', () => {
      const { container } = render(<ModalHeader />)

      expect(container.firstChild).toHaveStyleRule('height', '50px')
      expect(container.firstChild).toHaveStyleRule('font-size', '24px')
      expect(container.firstChild).toHaveStyleRule('color', '#f0f0f0')
      expect(container.firstChild).toHaveStyleRule(
        'border-radius',
        '10px 10px 0px 0px'
      )
    })
  })

  describe('ModalFooter', () => {
    it('deve renderizar com flexbox centralizado', () => {
      const { container } = render(<ModalFooter />)

      expect(container.firstChild).toHaveStyleRule('display', 'flex')
      expect(container.firstChild).toHaveStyleRule(
        'justify-content',
        'safe center'
      )
      expect(container.firstChild).toHaveStyleRule('gap', '10%')
    })
  })

  describe('ModalWrapperContent', () => {
    it('deve renderizar como flex row', () => {
      const { container } = render(<ModalWrapperContent />)

      expect(container.firstChild).toHaveStyleRule('display', 'flex')
      expect(container.firstChild).toHaveStyleRule('flex-direction', 'row')
      expect(container.firstChild).toHaveStyleRule('justify-content', 'start')
    })
  })

  describe('ModalContent', () => {
    it('deve renderizar coluna com espaçamento', () => {
      const { container } = render(<ModalContent />)

      expect(container.firstChild).toHaveStyleRule('display', 'flex')
      expect(container.firstChild).toHaveStyleRule('flex-direction', 'column')
      expect(container.firstChild).toHaveStyleRule(
        'justify-content',
        'space-between'
      )
      expect(container.firstChild).toHaveStyleRule('gap', '0.9em')
    })
  })

  describe('Divider', () => {
    it('DividerContainer deve centralizar conteúdo', () => {
      const { container } = render(<DividerContainer />)

      expect(container.firstChild).toHaveStyleRule('display', 'flex')
      expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
    })

    it('DividerText deve possuir pseudo-elementos before e after', () => {
      const { container } = render(<DividerText />)

      expect(container.firstChild).toHaveStyleRule('border-top', '1px solid #fff', {
        modifier: '::before',
      })

      expect(container.firstChild).toHaveStyleRule('border-top', '1px solid #fff', {
        modifier: '::after',
      })
    })
  })
})