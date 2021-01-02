import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
  test('first test', () => {
    const result = Utils.toUpperCase('act');
    expect(result).toBe('ABC');
  });
});