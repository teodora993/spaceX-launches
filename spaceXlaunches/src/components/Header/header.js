import { setLightMode } from "../../helpers/setLightMode"

const Header = () => {
    let isLightMode = false

    const header = document.querySelector(".header")
    
    const headingName = document.createElement("h1")
    headingName.textContent = "SpaceX Launches"
    
    const headingParagraph = document.createElement("p")
    headingParagraph.classList.add("heading-paragraph")
    headingParagraph.innerHTML = "SpaceX designs, manufactures and launches advanced rockets and spacecraft.</br> The company was founded in 2002 to revolutionize space technology...</br> Feel free to explore launches made by SpaceX on this website!"

    const lightMode = document.createElement("div")
    lightMode.classList.add("darkMode")
    lightMode.textContent = "Light Mode"

    header.append(headingName, headingParagraph, lightMode)

    lightMode.addEventListener("click", function() {
        isLightMode = !isLightMode

            if(isLightMode) {
                lightMode.classList.add("lightMode")
                lightMode.textContent = "Dark Mode"
    
                lightMode.classList.remove("darkMode")
    
                setLightMode(isLightMode)
                return
            }
            lightMode.classList.add("darkMode")
            lightMode.classList.remove("lightMode")
            setLightMode(isLightMode)
            lightMode.textContent = "Light Mode"
    })
}

export default Header