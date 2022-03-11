import axios from "axios";
import { baseURL } from "../constants/constants";

const api = axios.create({
    baseURL: baseURL,
    })

export default api;