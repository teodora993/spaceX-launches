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

// how to name true = upcoming , false = past....