import { render, screen } from '@testing-library/react';

import UserPage from '../pages/User/UserPage';

describe('LOGIN', () => {
  test('로그인한 사용자는 회원정보를 확인할 수 있다.', async () => {
    render(<UserPage />);

    await screen.findByText('닉네임');
    await screen.findByText(999);
  });
});
