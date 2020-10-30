import { User } from './models/User';

const user = new User({ name: 'myName', age: 20 });

user.on('change', () => {
  console.log('Change');
});
user.on('change', () => {});

console.log(user);
