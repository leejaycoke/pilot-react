import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import LoginPage from '../pages/Login/LoginPage';
import { createAlertMock, createPushMock } from './setupTests';

describe('LOGIN', () => {
  test('사용자는 로그인을 할 수 있다.', async () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </RecoilRoot>
    );

    const $idInput = screen.getByPlaceholderText('ID');
    const $passwordInput = screen.getByPlaceholderText('P/W');
    const $loginButton = screen.getByRole('button');

    fireEvent.change($idInput, { target: { value: 'devbadak' } });
    fireEvent.change($passwordInput, { target: { value: '1234' } });
    fireEvent.click($loginButton);

    createAlertMock();

    await waitFor(() => expect(window.location.pathname).toEqual('/users/me'));
  });

  test('회원이 아닐시, 에러를 표시한다.', async () => {
    render(<LoginPage />);

    const $idInput = screen.getByPlaceholderText('ID');
    const $passwordInput = screen.getByPlaceholderText('P/W');
    const $loginButton = screen.getByRole('button');

    fireEvent.change($idInput, { target: { value: 'wrong' } });
    fireEvent.change($passwordInput, { target: { value: 'wrong' } });
    fireEvent.click($loginButton);

    const alertMock = createAlertMock();

    await waitFor(() => expect(alertMock).toBeCalled());
  });
});
