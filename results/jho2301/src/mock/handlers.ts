import { LoginForm, User } from './../types';
import { rest } from 'msw';

export const loginHandlers = [
  rest.post<LoginForm>('http://localhost:5000/auth/login', (req, res, ctx) => {
    const { account, password } = req.body;

    if (account !== 'devbadak' || password !== '1234') {
      return res(ctx.status(400), ctx.json({ message: 'wrong!' }));
    }

    return res(
      ctx.json({
        accessToken: 'xxxxxxxxxxxxxxx',
      })
    );
  }),
  rest.get('http://localhost:5000/auth/logout', (req, res, ctx) => {
    return res(ctx.status(204), ctx.text(''));
  }),
];

export const userHandlers = [
  rest.get<User>('http://localhost:5000/v1/users/me', (req, res, ctx) => {
    return res(
      ctx.json({
        name: '닉네임',
        level: 999,
      })
    );
  }),
];
