import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import LoadingPage from './pages/LoadingPage';
import MainRouter from './routes/MainRouter';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <GlobalStyle />
              <Suspense fallback={<LoadingPage />}>
                <MainRouter />
              </Suspense>
            </SnackbarProvider>
          </ThemeProvider>
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
