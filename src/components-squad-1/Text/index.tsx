import React from 'react';
import { theme } from '../../infrastructure/theme/index';

const FONT_FAMILIES = {
  inter: "'Inter', sans-serif",
  goldman: "'Goldman', cursive",
};

const SIZES = {
  13: '13px',
  16: '16px',
  22: '22px',
  32: '32px',
};

const CUSTOM_COLORS = {
  red: '#E63946',
  white: '#ffffff',
  primary: theme.colors.primary,
  dark: theme.colors.dark,
};

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType; 
  children: React.ReactNode;
  size?: keyof typeof SIZES;       
  font?: keyof typeof FONT_FAMILIES; 
  color?: keyof typeof CUSTOM_COLORS | string; 
  weight?: number | string;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(({ 
  as: Component = 'span', 
  children,
  className = '',
  size = 16,
  font = 'inter',
  color = 'dark',
  weight, 
  style,
  ...props 
}, ref) => {

  const resolvedColor = (CUSTOM_COLORS as Record<string, string>)[color as string] || color;
  const defaultWeight = font === 'inter' ? 600 : 400;
  const internalStyles: React.CSSProperties = {
    fontSize: SIZES[size],
    fontFamily: FONT_FAMILIES[font],
    color: resolvedColor,
    fontWeight: weight || defaultWeight,
    lineHeight: 1.5, 
    ...style, 
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={internalStyles}
      {...props}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';