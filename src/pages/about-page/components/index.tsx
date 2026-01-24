import React, { useState } from 'react';
import * as S from './styles';
import { Text } from '../../../squad1-files/components/Text/index';

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
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="currentColor" d="m.325 11.6l5.02-9.99c1.1-2.19 4.21-2.19 5.31 0l5.02 9.99c1 2-.436 4.36-2.66 4.36h-10c-2.22 0-3.66-2.36-2.66-4.36z"></path></svg>
        </S.IconWrapper>
      
        <Text 
            font="goldman" 
            size={32} 
            color="#FFF" 
            style={{letterSpacing: '1px' }}
        >
            {title}
        </Text>
      </S.Header>

      <S.ContentWrapper $isOpen={isOpen}>
        <S.Content>
           <S.PaddingBox>
              <Text
                as="div"
                font="inter" 
                size={16} 
                color="#ddd"
                style={{ lineHeight: '1.5' }}
              >
                {children}
              </Text>
           </S.PaddingBox>
        </S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};