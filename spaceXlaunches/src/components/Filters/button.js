import { getOneLaunch } from "../../service";
import RenderLaunches from "../RenderLaunches/renderLaunches";
import { getUpcomingLaunches } from "../../service";

const getRandomFlightNumber = (numbers) => {
  // Implement your logic to get a random flight number from the 'numbers' array
  // For example:
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

export const displayRandomLaunch = async (numbers) => {
  const button = document.createElement("button");
  button.type = "input"
  button.textContent = "Your Random Launch";
  button.addEventListener("click", async () => {
      const randomFlightNumber = getRandomFlightNumber(numbers);
      try {
          const response = await getOneLaunch(randomFlightNumber);
          RenderLaunches([response.data]); // Render a single launch based on the random flight number
      } catch (error) {
          console.error(error);
      }
  });
  return button;  
};

export const displayUpcomingLaunches = async () => {
  const button = document.createElement("button");
  button.type = "input";
  button.textContent = "Upcoming Launches";
  button.addEventListener("click", async () => {
      try {
          const response = await getUpcomingLaunches();
          RenderLaunches(response.data); // Ensure the function name is correct here
      } catch (error) {
          console.error(error);
      }
  }); 
  return button;
};
