import { fireEvent, render, screen } from '@testing-library/react';

import LoginPage from '../pages/Login/LoginPage';

describe('LOGIN', () => {
  test('사용자는 로그인을 할 수 있다.', () => {
    render(<LoginPage />);

    const $idInput = screen.getByPlaceholderText('ID');
    const $passwordInput = screen.getByPlaceholderText('P/W');
    const $loginButton = screen.getByRole('button');

    fireEvent.change($idInput, { target: { value: 'devbadak' } });
    fireEvent.change($passwordInput, { target: { value: '1234' } });
    fireEvent.click($loginButton);

    const pushMock = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...Object.assign({}, jest.requireActual('react-router-dom')),
      useHistory: () => ({
        push: pushMock,
      }),
    }));

    expect(pushMock).toBeCalledWith('/users/devbadak');
  });
});
