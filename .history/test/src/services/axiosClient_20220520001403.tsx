import axios from "axios";
import { BASE_URL } from "services/apiEndpoint";
const axiosClient = axios.create({
 baseURL: BASE_URL,
 headers:{}
});
