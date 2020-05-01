import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://table-serving.firebaseio.com";

export default instance;
