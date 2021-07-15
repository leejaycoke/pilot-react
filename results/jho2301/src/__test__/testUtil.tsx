import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const createPushMock = () => {
  const pushMock = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...Object.assign({}, jest.requireActual('react-router-dom')),
    useHistory: () => ({ push: pushMock }),
  }));

  return pushMock;
};

export const createAlertMock = () => {
  const alertMock = jest.fn();

  global.alert = alertMock;

  return alertMock;
};

export const myRender = (children: React.ReactNode) =>
  render(
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={true}>{children}</Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
