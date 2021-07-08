import { server } from '../mock/server';

beforeAll(() => {
  console.log('Before All!!!!');
  server.listen();
});

afterAll(() => {
  server.close();
});
