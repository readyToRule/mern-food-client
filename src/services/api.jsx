import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-food-backend-wkgp.onrender.com/api",
});

export default API;