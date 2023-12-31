const RenderLaunches = (launches) => {
    const main = document.querySelector(".launches-selection")
    main.textContent = ""

    if(launches.length == 0) {
        const pError = document.createElement("p")
        pError.classList.add("errorMessage")
        pError.textContent = "No match found"
        main.append(pError)
        return
    }

        launches.forEach((launch) => {
        const divLaunch = document.createElement("div")
        divLaunch.classList.add("launch")

        const imgLaunch = document.createElement("img")
        imgLaunch.src = launch.links.mission_patch
        imgLaunch.alt = "Mission patch image"

        const launchInfo = document.createElement("div")
        launchInfo.classList.add("launch-info")

        const missionName = document.createElement("h3")
        missionName.textContent = launch.mission_name

        const flightNumber = document.createElement("p")
        flightNumber.textContent = `Flight Number: ${launch.flight_number}`

        const rocketName = document.createElement("p")
        rocketName.textContent = `Rocket Name: ${launch.rocket.rocket_name}`

        const rocketType = document.createElement("p")
        rocketType.textContent = `Rocket Type: ${launch.rocket.rocket_type}`

        const launchYear = document.createElement("p")
        launchYear.textContent = `Launch year: ${launch.launch_year}` 

        const launchNationality = document.createElement("p")
        launchNationality.textContent = `Nationality: ${launch.rocket.second_stage.payloads[0].nationality}`

        const launchManufacturer = document.createElement("p")
        launchManufacturer.textContent = `Manufacturer: ${launch.rocket.second_stage.payloads[0].manufacturer}`

        const launchPaylodType = document.createElement("p")
        launchPaylodType.textContent = `Payload-type: ${launch.rocket.second_stage.payloads[0].payload_type}`

        launchInfo.append(missionName, flightNumber, rocketName, rocketType, launchYear, launchNationality, launchManufacturer, launchPaylodType)
        divLaunch.append(imgLaunch, launchInfo)

        main.append(divLaunch)
    })

}

export default RenderLaunches

