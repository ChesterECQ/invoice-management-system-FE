import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
            height: 'auto',
            background: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
          }}
        >
          {/* NavBar */}
          <Navbar />
          {/* Main Container */}
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              minHeight: '93.6vh',
              overflow: 'auto',
            }}
          >
            <Container maxWidth='xl' sx={{ mt: 4, mb: 10 }}>
              {children}
            </Container>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
