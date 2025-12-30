import React, { useState } from 'react';
import * as S from './styles';
import { Text } from '../../../components-squad-1/Text/index'

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Header onClick={toggleAccordion} $isOpen={isOpen}>
        <S.IconWrapper $isOpen={isOpen}>
          ▼
        </S.IconWrapper>
        
        {/* Título usando seu componente Text com fonte Goldman */}
        <Text 
            font="goldman" 
            size={32} 
            color="#FFF" 
            style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
        >
            {title}
        </Text>
      </S.Header>

      {isOpen && (
        <S.Content>
          {/* Conteúdo usando seu componente Text com fonte Inter */}
          <Text 
            font="inter" 
            size={16} 
            color="#ddd"
            style={{ lineHeight: '1.5' }}
          >
            {children}
          </Text>
        </S.Content>
      )}
    </S.Container>
  );
};