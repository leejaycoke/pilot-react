import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoadingPage from './pages/LoadingPage';
import MainRouter from './routes/MainRouter';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Suspense fallback={<LoadingPage />}>
          <MainRouter />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
