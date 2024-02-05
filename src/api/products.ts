import axios from "axios";

const apiUrl = "https://fakestoreapi.com/products";

export const fetchProductsAPI = async () => await axios.get(apiUrl);

export const fetchSingleProductAPI = async (id: number) =>
  await axios.get(`${apiUrl}/${id}`);
