import { server } from '../mock/server';

beforeAll(() => {
  global.fetch = require('node-fetch');
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
