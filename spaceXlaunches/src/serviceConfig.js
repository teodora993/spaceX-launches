import axios from "axios"

export const spaceXInstance = axios.create({
    baseURL: "https://api.spacexdata.com/v3",
    timeout: 5000,
    headers: {},
})
