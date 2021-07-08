import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {
  doLogin,
  doLogout,
  doUserInfo,
  AuthenticationInfoRequest,
  AuthenticationInfoResponse,
} from '../apis/modules/auth';
import { resolve } from 'url';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('doLogin unit test', () => {
  test('OK test', () => {
    expect.assertions(1);
    return expect(
      doLogin(
        new AuthenticationInfoRequest(
          process.env.REACT_APP_ID,
          process.env.REACT_APP_PASSWORD
        )
      )
    ).resolves.toHaveProperty('accessToken');
  });

  test('Logout test', () => {
    expect.assertions(1);
    return expect(doLogout()).resolves.toEqual(204);
  });

  test('ERROR test', () => {
    return expect(
      doLogin(new AuthenticationInfoRequest(process.env.REACT_APP_ID, ''))
    ).resolves.toEqual({
      code: 400,
      message: expect.any(String),
    });
  });
});

describe('check User info unit test', () => {
  let accessToken: AuthenticationInfoResponse;

  beforeEach(async () => {
    accessToken = await doLogin(
      new AuthenticationInfoRequest(
        process.env.REACT_APP_ID,
        process.env.REACT_APP_PASSWORD
      )
    );
  });

  test('User Info Success Test', () => {
    return doUserInfo(accessToken.accessToken).then(info => {
      expect(info).toEqual({
        id: 1,
        account: 'foo',
        name: '반려생활',
        level: 1,
      });
    });
  });

  test('User Info Fail Test', () => {
    const test: AuthenticationInfoResponse = new AuthenticationInfoResponse(
      'test'
    );
    return expect(doUserInfo(test.accessToken)).resolves.toEqual({
      code: expect.any(Number),
      message: expect.any(String),
    });
  });

  afterEach(() => {
    return doLogout();
  });
});
