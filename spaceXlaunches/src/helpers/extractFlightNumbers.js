// import { getAllLaunches } from "../service";

export const extractFlightNumbers = (arr) =>  {

    // if (!Array.isArray(years)) {
    //     console.error("Launches data is not an array:", years);
    //     return [];
    //   }
    const numbers = [];
    
//     // if (!Array.isArray(launches)) {
//     //     console.error("Launches data is not an array:", launches);
//     //     return [];
//     //   }
//     const years = [];
    
    arr.forEach((item) => {
        if (!numbers.find((el) => el === item.flight_number)) numbers.push(item.flight_number)
    })
  
    return numbers;
}