import { server } from '../mock/server';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});
