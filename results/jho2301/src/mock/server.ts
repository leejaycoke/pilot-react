import { loginHandlers, userHandlers } from './handlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...loginHandlers, ...userHandlers);
