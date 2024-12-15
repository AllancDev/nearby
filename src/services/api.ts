import axios from "axios";

export const api = axios.create({
    baseURL: "https://b05d-2804-d55-5861-8e00-4522-247d-42b0-964c.ngrok-free.app",
    timeout: 700,
});