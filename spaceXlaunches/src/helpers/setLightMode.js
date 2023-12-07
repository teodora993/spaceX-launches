// import RenderLaunches from "../components/RenderLaunches/renderLaunches"

const header = document.querySelector(".header")
const app = document.querySelector("#app")
const filtersSection = document.querySelector(".filters")
const launchesSelection = document.querySelector(".launches-selection")
// const divLaunch = document.querySelector(".launch")
// const inputs = document.querySelector("input")

export const setLightMode = (isLightMode) => {
        // setTimeout(() => {
            if(isLightMode) {
                header.style.backgroundColor = "#b6b6d7"
                header.style.color = "#000"
                app.style.backgroundColor = "#b6b6d7"
                app.style.color = "#fff"
                filtersSection.style.backgroundColor = "#b6b6d7"
                filtersSection.style.color = "#fff"
                launchesSelection.style.backgroundColor = "#7290fb"
                launchesSelection.style.color = "#fff"
                // divLaunch.style.backgroundColor = "#fff"
                // divLaunch.style.backgroundColor = "#000"
                // inputs.style.backgroundColor = "#fff"
                // inputs.style.color = "#000"
                return
            }
            header.style.backgroundColor = "#000"
            header.style.color = "#b6b6d7"
            app.style.backgroundColor = "#1c19bd"
            app.style.color = "#b6b6d7"
            filtersSection.style.backgroundColor = "#1c19bd"
            filtersSection.style.color = "#b6b6d7"
            launchesSelection.style.backgroundColor = "#14126d"
            launchesSelection.style.color = "#b6b6d7"
            // divLaunch.style.backgroundColor = "#000"
            // divLaunch.style.backgroundColor = "#fff"
            // inputs.style.backgroundColor = "#000"
            // inputs.style.color = "#000"
        // }, 3000);
} 