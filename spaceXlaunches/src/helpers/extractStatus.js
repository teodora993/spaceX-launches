// import { getAllLaunches } from "../service";

// export const extractStatus = (arr) =>  {

//     const statuses = [];
//     arr.forEach((item) => {
//         if (!statuses.find((el) => el === item.upcoming)) statuses.push(item.upcoming)
//     })
//     return statuses;
// }

export const extractStatus = (arr) => {
    const statuses = [];

    arr.forEach((item) => {
        const status = item.upcoming; // Assuming item.upcoming holds a boolean value
        if (!statuses.includes(status)) {
            statuses.push(status);
        }
    });

    return statuses;
}