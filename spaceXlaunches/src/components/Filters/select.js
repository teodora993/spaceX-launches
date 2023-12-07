import RenderLaunches from "../RenderLaunches/renderLaunches";
import { getAllLaunches } from "../../service";
import { getOneLaunch } from "../../service";

export const SelectLaunchYear = (years) => {

  const selectLaunchYear = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.value = "default";
  defaultOption.textContent = "Select Launch Year";
  selectLaunchYear.appendChild(defaultOption);

  years.forEach((el) => {
    const optionLaunchYear = document.createElement("option");
    optionLaunchYear.value = el;
    optionLaunchYear.textContent = el;
    selectLaunchYear.appendChild(optionLaunchYear);
  });

  selectLaunchYear.addEventListener("change", async (event) => {
    try {
        const response = await getAllLaunches();
        const filteredLaunches = response.data.filter(launch => {
            return launch.launch_year === event.target.value;
        });
        RenderLaunches(filteredLaunches);
    } catch (error) {
      // eslint-disable-next-line no-console
        console.log(error);
    }
});
  return selectLaunchYear;
};

export const SelectFlightNumber = (numbers) => {

const selectFlightNumber = document.createElement("select");
const defaultOption = document.createElement("option");
defaultOption.value = "default";
defaultOption.textContent = "Select Flight Number";
selectFlightNumber.appendChild(defaultOption);

numbers.forEach((el) => {
  const optionFlightNumber = document.createElement("option");
  optionFlightNumber.value = el;
  optionFlightNumber.textContent = el;
  selectFlightNumber.appendChild(optionFlightNumber);
});
selectFlightNumber.addEventListener("change", async (event) => {
  try {
      const response = await getOneLaunch(event.target.value);
      RenderLaunches([response.data]); // Render a single launch based on the selected flight number
  } catch (error) {
    // eslint-disable-next-line no-console
      console.log(error);
  }
});
return selectFlightNumber 
}

export const SelectLaunchStatus = (statuses) => {

const selectLaunchStatus = document.createElement("select");
const defaultOption = document.createElement("option");
defaultOption.value = "default";
defaultOption.textContent = "Select Launch Status";
selectLaunchStatus.appendChild(defaultOption);

statuses.forEach((el) => {
  const optionLaunchStatus = document.createElement("option");
  optionLaunchStatus.value = el;
  optionLaunchStatus.textContent = el;
  selectLaunchStatus.appendChild(optionLaunchStatus);
});

selectLaunchStatus.addEventListener("change", async (event) => {
  try {
      const response = await getAllLaunches();
      const filteredLaunches = response.data.filter(launch => {
          return launch.upcoming === (event.target.value === "true");
      });
      RenderLaunches(filteredLaunches);
  } catch (error) {
    // eslint-disable-next-line no-console
      console.log(error);
  }
});
return selectLaunchStatus 
}