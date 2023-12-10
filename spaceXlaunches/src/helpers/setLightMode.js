const app = document.querySelector("#app")
const header = document.querySelector(".header")
const filtersSection = document.querySelector(".filters")
const launchesSelection = document.querySelector(".launches-selection")

export const setLightMode = (isLightMode) => {
    const launches = document.querySelectorAll(".launch")
    const inputs = document.querySelectorAll("input")
    const selects = document.querySelectorAll("select")
    const options = document.querySelectorAll("option")
    const buttons = document.querySelectorAll("button")

            if(isLightMode) {
                header.style.backgroundColor = "#b6b6d7"
                header.style.color = "#b6b6d7"
                app.style.backgroundColor = "#b6b6d7"
                app.style.color = "#fff"
                filtersSection.style.backgroundColor = "#b6b6d7"
                filtersSection.style.color = "#fff"
                launchesSelection.style.backgroundColor = "#7290fb"
                launchesSelection.style.color = "#fff"

                launches.forEach((launch) => {
                    launch.style.backgroundColor = "#b6b6d7";
                    launch.style.color = "#09083e";
                    launch.style.filter = "drop-shadow(0 0 15px #b6b6d7)"
                });
                inputs.forEach((input) => {
                    input.style.backgroundColor = "#b6b6d7"
                    input.style.color = "#09083e"
                    input.style.borderColor = "#8281bd"
                })
                selects.forEach((select) => {
                    select.style.backgroundColor = "#b6b6d7"
                    select.style.color = "#09083e"
                    select.style.borderColor = "#8281bd"
                })
                options.forEach((option) => {
                    option.style.backgroundColor = "#b6b6d7"
                    option.style.color = "#09083e"
                })
                buttons.forEach((button) => {
                    button.style.backgroundColor = "#b6b6d7"
                    button.style.color = "#09083e"
                    button.style.borderColor = "#8281bd"
                })
                return
            }
            header.style.backgroundColor = "#09083e"
            header.style.color = "#b6b6d7"
            app.style.backgroundColor = "#1c19bd"
            app.style.color = "#b6b6d7"
            filtersSection.style.backgroundColor = "#1c19bd"
            filtersSection.style.color = "#b6b6d7"
            launchesSelection.style.backgroundColor = "#09083e"
            launchesSelection.style.color = "#b6b6d7"

            launches.forEach((launch) => {
                launch.style.backgroundColor = "#09083e";
                launch.style.color = "#b6b6d7";
                launch.style.filter = "drop-shadow(0 0 15px #1c19bd)"
            });
            inputs.forEach((input) => {
                input.style.backgroundColor = "#09083e"
                input.style.color = "#b6b6d7"
                input.style.borderColor = "transparent"
            })
            selects.forEach((select) => {
                select.style.backgroundColor = "#09083e"
                select.style.color = "#b6b6d7"
                select.style.borderColor = "transparent"
            })
            options.forEach((option) => {
                option.style.backgroundColor = "#09083e"
                option.style.color = "#b6b6d7"
            })
            buttons.forEach((button) => {
                button.style.backgroundColor = "#09083e"
                button.style.color = "#b6b6d7"
                button.style.borderColor = "transparent"
            })
} 