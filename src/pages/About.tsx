import { Box } from '@mui/material';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import React from 'react';

export function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <SectionTitle title="About Page" />
      <p>Test application for Ocean Agency.</p>
      <p>Why it contains only frontend for full-stack developer?</p>
      <p>Maybe the NextJS with DB should be allowed instead of MirageJS?</p>
    </Box>
  );
}
