import axios from "axios";
import { baseUrl } from "./Constants/constants";

//we can create axios instance in this file using the baseurl
//we have stored the base url in constant file
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
