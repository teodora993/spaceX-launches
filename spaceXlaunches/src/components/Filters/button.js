import { getOneLaunch } from "../../service";
import RenderLaunches from "../RenderLaunches/renderLaunches";
import { getUpcomingLaunches } from "../../service";

const getRandomFlightNumber = (numbers) => {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

export const displayRandomLaunch = async (numbers) => {
  const button = document.createElement("button");
  button.textContent = "Your Random Launch";
  button.addEventListener("click", async () => {
      const randomFlightNumber = getRandomFlightNumber(numbers);
      try {
          const response = await getOneLaunch(randomFlightNumber);
          RenderLaunches([response.data]); 
      } catch (error) {
        // eslint-disable-next-line no-console
          console.error(error);
      }
  });
  return button;  
};

export const displayUpcomingLaunches = async () => {
  const button = document.createElement("button");
  button.textContent = "Upcoming Launches";
  button.addEventListener("click", async () => {
      try {
          const response = await getUpcomingLaunches();
          RenderLaunches(response.data); 
      } catch (error) {
        // eslint-disable-next-line no-console
          console.error(error);
      }
  }); 
  return button;
};
