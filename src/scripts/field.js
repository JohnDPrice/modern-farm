let plantContainer = [

];

export const addPlant = (seedObject) => {
    plantContainer.push(seedObject)
}

export const usePlants = () => {
    return plantContainer
}