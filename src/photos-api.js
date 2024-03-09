import axios from 'axios';

const API_KEY = 'XSwUV5fdSl6y8Yok4PJU2h2s2rTm_vyTQJwR4DAkyn4';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 12,
};

export const fetchPhotos = async (params = {}) => {
  const { data } = await axios.get('/search/photos', {
    params,
  });
  return data;
};
