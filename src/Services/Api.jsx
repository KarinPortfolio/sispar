import axios from "axios";

const api = axios.create({
  baseURL: "https://sispar-api-kh9p.onrender.com",
});

export default api;
