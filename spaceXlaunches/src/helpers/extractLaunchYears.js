export const extractLaunchYears = (arr) =>  {

    const years = [];
    
    arr.forEach((launch) => {
        if (!years.find((el) => el === launch.launch_year)) years.push(launch.launch_year)
    })
    return years;
}
