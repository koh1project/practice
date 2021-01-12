import { mocked } from "ts-jest/utils";
import { Server } from "../app/Server/Server";
import { Launcher } from './../app/Launcher';

jest.mock('./../app/Server/Server', () => {
  return {
    Server: jest.fn(() => {
      return {
        startServer: () => {
          console.log('Starting fake server');
        }
      }
    })
  }
});

describe('Launcher test suite', () => {
  const mockedServer = mocked(Server, true);
  test('create server', () => {
    new Launcher();
    expect(mockedServer).toBeCalled();
  });
});
