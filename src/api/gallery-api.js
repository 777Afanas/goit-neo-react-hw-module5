import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";
const YOUR_ACCESS_KEY = "PpKOVlIU1jpiBUczpFv1FRZZ7i0l26nYmGB7MUvg5cg";

const getImages = async (searchQuery, page) => {
  const { data } = await axios.get("/photos", {
    params: {
      page,
      per_page: 12,
      query: searchQuery,
      client_id: YOUR_ACCESS_KEY,
    },
  });
  console.log(data.results);
  return data.results;
};

export default getImages;
