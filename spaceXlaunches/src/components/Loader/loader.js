const Loader = () => {
    const loaderContainer = document.createElement("div")
    loaderContainer.classList.add("loader")

    for(let i = 1; i <= 5; i++) {
        const divPillar = document.createElement("div")
        divPillar.classList.add("pillar")
        loaderContainer.append(divPillar)
        if(i == 1) continue
        divPillar.classList.add(`d${i}`)
    }
    
    return loaderContainer

}

export default Loader