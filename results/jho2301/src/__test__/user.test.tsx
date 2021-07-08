import { screen } from '@testing-library/react';

import UserPage from '../pages/User/UserPage';
import { myRender } from './testUtil';

describe('LOGIN', () => {
  test('로그인한 사용자는 회원정보를 확인할 수 있다.', async () => {
    myRender(<UserPage />);

    await screen.findByText(/닉네임/g);
    await screen.findByText(/999/g);
  });
});
