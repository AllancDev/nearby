import axios from "axios";

export const api = axios.create({
    baseURL: "https://b6a5-2804-d55-5861-8e00-5d1a-2f0a-f1a2-41dc.ngrok-free.app",
    timeout: 700,
});