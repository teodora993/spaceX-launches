export const extractFlightNumbers = (arr) =>  {

    const numbers = [];

    arr.forEach((item) => {
        if (!numbers.find((el) => el === item.flight_number)) numbers.push(item.flight_number)
    })
    return numbers;
}