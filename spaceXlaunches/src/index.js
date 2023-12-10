import { getAllLaunches } from "./service";
import RenderLaunches from "./components/RenderLaunches/renderLaunches";
import Header from "./components/Header/header"
import Loader from "./components/Loader/loader";
import { SearchByLaunchYear, SearchByMissionName, SearchByRocketName } from "./components/Filters/search";

import { SelectLaunchStatus, SelectLaunchYear, SelectFlightNumber } from "./components/Filters/select";
import { extractLaunchYears } from "./helpers/extractLaunchYears";
import { extractStatus } from "./helpers/extractStatus";

import { extractFlightNumbers } from "./helpers/extractFlightNumbers";
import { displayRandomLaunch } from "./components/Filters/button";
import { displayUpcomingLaunches } from "./components/Filters/button";
import "../asset/css/style.css"

const renderFilters = async (data) => {
    // //eslint-disable-next-line no-console
    // console.log(data);
    const filters = document.querySelector(".filters")

    const allYears = extractLaunchYears(data)
    const allNumbers = extractFlightNumbers(data)
    const allStatuses = extractStatus(data)

    const searchMissionName = SearchByMissionName(data)
    const searchRocketName = SearchByRocketName(data)
    const searchLaunchYear = SearchByLaunchYear(data)

    const selectYear = SelectLaunchYear(allYears)
    const selectNumber = SelectFlightNumber(allNumbers)
    const selectStatus = SelectLaunchStatus(allStatuses)

    // const randomButton = displayRandomLaunch(allNumbers);

    filters.append(
        searchMissionName,
        searchRocketName,
        searchLaunchYear,
        selectYear,
        selectNumber,
        selectStatus
        // randomButton
        )

        // Display random launch button after other filters
        try {
            const randomButton = await displayRandomLaunch(allNumbers);
            filters.appendChild(randomButton);
        } catch (error) {
            console.error(error);
        }
        // Display upcoming launches button after other filters
        try {
            const upcomingButton = await displayUpcomingLaunches();
            filters.appendChild(upcomingButton);
        } catch (error) {
            console.error(error);
        }
}

const fetchAllLaunches = async () => {
    const app = document.querySelector("#app")
    const loader = Loader()
    app.append(loader)
    try {
        setTimeout(async () => {
            const response = await getAllLaunches()
            renderFilters(response.data)
            RenderLaunches(response.data)
            // //eslint-disable-next-line no-console
            // console.log(response.data)
            loader.remove()
        }, 5000)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

// const fetchUpcomingLaunches = async () => {
//     try {
//         const response = await getUpcomingLaunches()
//         renderFilters(response.data)
//         RenderLaunches(response.data)
//     } catch(error) {
//         // eslint-disable-next-line no-console
//         console.log(error);
//     }
// }

// const fetchOneLaunch = async () => {
//         try {
//             const response = await getOneLaunch()
//             // eslint-disable-next-line no-console
//             // console.log(response)
//             renderFilters(response.data)
//             RenderLaunches(response.data)
//         } catch (error) {
//             // eslint-disable-next-line no-console
//             console.log(error)
//         }
// }

// // Function to display a random launch based on a flight number
// const fetchOneLaunch = async (numbers) => {
//     // const button = document.createElement("button");
//     // button.textContent = "Display Random Launch";
//     // button.addEventListener("click", async () => {
//       const randomFlightNumber = getRandomFlightNumber(numbers);
//       try {
//         const response = await getOneLaunch(randomFlightNumber);
//         RenderLaunches([response.data]); // Render a single launch based on the random flight number
//       } catch (error) {
//         console.error(error);
//       }
//     // });
//     return button;
//   };

// ... (your existing code)

// Call the function to create and append the button
fetchAllLaunches()
Header()
// fetchUpcomingLaunches()
// fetchOneLaunch(randomFlightNumber)
// fetchAndDisplayRandomLaunch()
