import { spaceXInstance } from "./serviceConfig.js"

export const getAllLaunches = () => {
    return spaceXInstance.get("/launches")
}

export const getOneLaunch = (flightNumber) => {
    return spaceXInstance.get(`/launches/${flightNumber}`)
}

export const getPastLaunches = () => {
    return spaceXInstance.get("/launches/past")
}

export const getUpcomingLaunches = () => {
    return spaceXInstance.get("/launches/upcoming")
}

export const getLatestLaunch = () => {
    return spaceXInstance.get("/launches/latest")
}

export const getNextLaunch = () => {
    return spaceXInstance.get("/launches/next")
}
