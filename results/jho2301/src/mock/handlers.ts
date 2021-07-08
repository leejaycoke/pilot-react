import { rest } from 'msw';

export const loginHandlers = [
  rest.post('http://localhost:5000/auth/login', (req, res, ctx) => {
    return res(
      ctx.json({
        accessToken: 'xxxxxxxxxxxxxxx',
      })
    );
  }),
];
