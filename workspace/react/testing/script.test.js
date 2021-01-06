const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheese.com',
  'disney.com',
  'dogpicture.com',
]

it('This is a test', () => {
  expect('Hello').toBe('Hello');
});

it('It is searching google', () => {
  expect(googleSearch('test', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture.com']);
});