import RenderLaunches from "../RenderLaunches/renderLaunches";

export const SearchByMissionName = (data) => {
    const missionNameInput = document.createElement("input")
    missionNameInput.type = "text"
    missionNameInput.placeholder = "Search by mission name..."

    missionNameInput.addEventListener("keyup", async(event) => {
        if(event.key === "Enter") {
            const result = data.filter((item) => 
                item.mission_name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            )
            RenderLaunches(result)
        }
    })
    return missionNameInput
}

export const SearchByRocketName = (data) => {
    const rocketNameInput = document.createElement("input")
    rocketNameInput.type = "text"
    rocketNameInput.placeholder = "Search by rocket name..."

    rocketNameInput.addEventListener("keyup", async(event) => {
        if(event.key === "Enter") {
            const result = data.filter((item) => 
                item.rocket.rocket_name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            )
            RenderLaunches(result)
        }
    })
    return rocketNameInput
}

export const SearchByLaunchYear = (data) => {
    const launchYearInput = document.createElement("input")
    launchYearInput.type = "text"
    launchYearInput.placeholder = "Search by launch year.."

    launchYearInput.addEventListener("keyup", async(event) => {
        if(event.key === "Enter") {
            const result = data.filter((item) => 
                item.launch_year
                .toLowerCase()
                .includes(event.target.value)
            )
            RenderLaunches(result)
        }
    })
    return launchYearInput
}
