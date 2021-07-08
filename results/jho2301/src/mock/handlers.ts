import { rest } from 'msw';
import uuid4 from 'uuid4';

export const loginHandlers = [
  rest.post('/auth/login', (req, res, ctx) => {
    return res(
      ctx.json({
        accessToken: uuid4(),
      })
    );
  }),
];
