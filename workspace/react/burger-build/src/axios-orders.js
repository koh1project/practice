import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-499a0.firebaseio.com/'
});

export default instance;