import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'myName',
  age: 20,
});

const id = axios.get('http://localhost:3000/users/1');
