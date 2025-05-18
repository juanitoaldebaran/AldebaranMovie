import axios from "axios";

const memberAPIClient = axios.create({
    baseURL: "http://localhost:8080/member",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default memberAPIClient;