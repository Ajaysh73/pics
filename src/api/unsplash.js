import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID p7CjFWb4Tr1crap7UftYvoI4_fHH2EQc6tJoWk7xd_0'
  }
});