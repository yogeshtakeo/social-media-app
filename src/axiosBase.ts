import axios from "axios";
const axiosBase = () => {
  const baseLink = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });

  return baseLink;
};

export default axiosBase;
