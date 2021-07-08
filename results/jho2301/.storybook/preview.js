import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/Global.styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      </RecoilRoot>
    </>
  ),
];
