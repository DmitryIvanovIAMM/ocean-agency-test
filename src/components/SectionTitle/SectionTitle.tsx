import { FC } from 'react';
import { Typography } from '@mui/material';

const sectionTitleSx = {
  textTransform: 'uppercase',
  color: '#1976d2',
  marginBottom: '20px',
};

export interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <Typography component="h2" variant="h4" align="center" sx={sectionTitleSx}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
