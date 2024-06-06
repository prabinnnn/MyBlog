import axios from "axios"
import {API_URL} from "../constants/index"

const instance = axios.create({
    baseURL: API_URL,
    timeout:5000,
  });

export default instance;