import axios from 'axios';

const API_URL = 'https://randomuser.me/api/';

export const getUsers = (numberOfResults:any) => {
  console.log('log: ');
  return axios.get(`${API_URL}?results=${numberOfResults}`);
};