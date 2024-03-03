import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchQuery, page=1) => {
  const response = await axios.get(
    "/search/photos",{
      params: {
        query: searchQuery,
        perPage: 12,
        page,
        orientation: 'landscape',
      },
      headers: {
        Authorization: "Client-ID XSwUV5fdSl6y8Yok4PJU2h2s2rTm_vyTQJwR4DAkyn4",
        // 'Accept-Version': 'v1',
      },
    }
  );
  return response.data.results;
};