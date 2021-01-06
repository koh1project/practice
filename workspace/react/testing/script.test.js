const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheese.com',
  'disney.com',
  'dogpicture.com',
]

describe('googleSearch', () => {
  it('This is a test', () => {
    expect('Hello').toBe('Hello');
  });

  it('It is searching google', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture.com']);
  });

  it('Work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('Does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});