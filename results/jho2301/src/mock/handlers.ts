import { LoginForm } from './../types';
import { rest } from 'msw';

export const loginHandlers = [
  rest.post<LoginForm>('http://localhost:5000/auth/login', (req, res, ctx) => {
    const { account } = req.body;

    if (account === 'wrong') {
      return res(ctx.status(400), ctx.json({ message: 'wrong!' }));
    }

    return res(
      ctx.json({
        accessToken: 'xxxxxxxxxxxxxxx',
      })
    );
  }),
];
