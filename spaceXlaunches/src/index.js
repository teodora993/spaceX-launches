import { getAllLaunches } from "./service";
import RenderLaunches from "./components/RenderLaunches/renderLaunches";
import Header from "./components/Header/header"
import Loader from "./components/Loader/loader";
import { SearchByLaunchYear, SearchByMissionName, SearchByRocketName } from "./components/Filters/search";

import { SelectLaunchStatus, SelectLaunchYear } from "./components/Filters/select";
import { extractLaunchYears } from "./helpers/extractLaunchYears";
import { extractStatus } from "./helpers/extractStatus";

import { SelectFlightNumber } from "./components/Filters/select";
import { extractFlightNumbers } from "./helpers/extractFlightNumbers";
// import { getOneLaunch } from "./service";

import "../asset/css/style.css"

const renderFilters = (data) => {
    // //eslint-disable-next-line no-console
    // console.log(data);
    const allYears = extractLaunchYears(data)

    const filters = document.querySelector(".filters")
  
    const allNumbers = extractFlightNumbers(data)
    const allStatuses = extractStatus(data)

    const searchMissionName = SearchByMissionName(data)
    const searchRocketName = SearchByRocketName(data)
    const searchLaunchYear = SearchByLaunchYear(data)

    const selectYear = SelectLaunchYear(allYears)
    const selectNumber = SelectFlightNumber(allNumbers)
    const selectStatus = SelectLaunchStatus(allStatuses)

    filters.append(searchMissionName, searchRocketName, searchLaunchYear, selectYear, selectNumber, selectStatus)
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

fetchAllLaunches()
Header()
// fetchUpcomingLaunches()
// fetchOneLaunch()
