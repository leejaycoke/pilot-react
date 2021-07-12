import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import GlobalStyle from './Global.styles';

const $root = document.getElementById('root');

ReactDOM.render(
  <>
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </>,
  $root
);
