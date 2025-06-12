import { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import './container.css';

const borderColor = '#1976d2'; // Use the same color as the border

const containerSx = {
  padding: '20px',
  background: '#fff',
  color: borderColor,
  position: 'relative',
  '&::after': {
    content: "' '",
    position: 'absolute',
    inset: '-2px',
    background: `conic-gradient(from var(--angle), transparent 0%, ${borderColor}, #0000, #0000, ${borderColor}, #0000, #0000)`,
    zIndex: -1,
    '@keyframes slideInFromRight': {
      from: {
        '--angle': '0deg',
      },
      to: {
        '--angle': '360deg',
      },
    },
    animation: `slideInFromRight 10s linear infinite`,
  },
};

export const FormContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="sm" sx={containerSx}>
      {children}
    </Container>
  );
};
