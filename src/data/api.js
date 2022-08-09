import axios from "axios";

const BASE_URL =
  "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

const Api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default Api;
