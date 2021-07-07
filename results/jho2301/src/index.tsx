import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './Global.styles';

const $root = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  $root
);
