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

export const createPushMock = () => {
  const pushMock = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...Object.assign({}, jest.requireActual('react-router-dom')),
    useHistory: () => ({ push: pushMock }),
  }));

  return pushMock;
};

export const createAlertMock = () => {
  const alertMock = jest.fn();

  global.alert = alertMock;

  return alertMock;
};
