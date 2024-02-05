import axios from "axios";
import { Products } from "../interfaces/products";

const apiUrl = "https://fakestoreapi.com/products/";

export const fetchProductsAPI = async () => await axios.get(apiUrl);
