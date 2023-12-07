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
// setTimeout(() => {
    
launches.forEach((launch) => {
    const divLaunch = document.createElement("div")
    divLaunch.classList.add("launch")

    const imgLaunch = document.createElement("img")
    imgLaunch.src = launch.links.flickr_images
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

    const launchSuccess = document.createElement("p")
    launchSuccess.textContent = `Launch success: ${launch.launch_success}`

    const launchStatus = document.createElement("p")
    launchStatus.textContent = `Upcoming: ${launch.upcoming}`

    // const launchDetails = document.createElement("p")
    // launchDetails.textContent = launch.details

    launchInfo.append(missionName, flightNumber, rocketName, rocketType, launchYear, launchSuccess, launchStatus)
    divLaunch.append(imgLaunch, launchInfo)

    main.append(divLaunch)
})
// if (typeof callback === 'function') {
//     callback();
// }
// }, 2000);

}

export default RenderLaunches

