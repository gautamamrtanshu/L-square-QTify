import axios from "axios";
export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchNewAlbum = async () => {
  const url = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
  try {
    const response = await axios.get(url);
    // console.log("response from new album in api.js", response.config.url.data);
    return response.config.url.data;
  } catch (error) {
    return null;
  }
};
