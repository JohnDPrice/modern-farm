let plantContainerArray = [

];

export const addPlant = (seedObject) => {
    plantContainerArray.push(seedObject)
}

export const usePlants = () => {
    let plantContainer = plantContainerArray
    return plantContainer
}